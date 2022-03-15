import React from 'react';
import {
    Typography,
    Box,
    styled,
    TextField,
    MenuItem,
    List,
    ListItemIcon,
    Icon,
    InputAdornment,
    ListItem,
    ListItemText,
} from '@mui/material';
import { Phone, RemoveCircle } from '@mui/icons-material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from 'image/logoRegistration.svg';
import { FlexDiv, DefaultTextValidator } from 'style/otherStyles';
import { useActions } from 'hooks/useActions';
import { RegistrationState } from 'types/Cabinet';

const Background = styled('div')({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#eee',
    position: 'relative',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
});

const RegistrationWindow = styled('div')({
    backgroundColor: '#fff',
    maxWidth: '55%',
    padding: '40px 30px',
    textAlign: 'left',
    '@media (max-width: 599px)': {
        maxWidth: '80%',
    },
});

const FormColumn = styled('div')({
    width: '267px',
    '@media (max-width: 599px)': {
        width: '100%',
    },
});

const Button = styled('button')({
    textTransform: 'uppercase',
    padding: '5px',
    fontSize: '15px',
    lineHeight: '36px',
    color: '#000000',
    borderRadius: '4px',
    background: '#FFDBB8',
    marginTop: '20px',
    marginBottom: '20px',
    width: '267px',
    '@media (max-width: 899px)': {
        width: '100%',
        maxWidth: '267px',
    },
});

export const Registration: React.FC = () => {
    const [registration, setRegistration] = React.useState<RegistrationState>({
        email: '',
        password: '',
        phone: [],
        nameCompany: '',
        city: '',
        sphera: '',
        address: '',
        subway: '',
    });
    const [phone, setPhone] = React.useState<Array<string>>([]);
    const handleChange =
        (prop: keyof RegistrationState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setRegistration({ ...registration, [prop]: event.target.value });
        };

    const { fetchRegistration } = useActions();

    const handleSubmit = () => {
        const res = fetchRegistration(
            registration.city,
            registration.email,
            registration.nameCompany,
            registration.password,
            registration.phone,
            registration.sphera,
            registration.address,
            registration.subway
        );
        if (res) {
            alert(res);
        } else {
            alert('Учетная запись партнера успешно создана');
        }
    };
    return (
        <Background>
            <RegistrationWindow>
                <ValidatorForm
                    onSubmit={handleSubmit}
                >
                    <FlexDiv sx={{ justifyContent: 'flex-start' }}>
                        <img
                            style={{
                                width: '35px',
                                marginRight: '10px',
                                marginBottom: '10px',
                            }}
                            src={logo}
                            alt="Logo"
                        />
                        <Typography sx={{ fontWeight: 'bold' }}>
                            Регистрация
                        </Typography>
                    </FlexDiv>
                    <Typography sx={{ mb: '20px', lineHeight: 1 }}>
                        Создание учетной записи партнера
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: {
                                xs: 'wrap',
                                lg: 'nowrap',
                            },
                        }}
                    >
                        <FormColumn sx={{ mr: { xs: '0', sm: '15px' } }}>
                            <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>
                                Контактная информация
                            </Typography>

                            <Typography>Название компании</Typography>
                            {DefaultTextValidator(
                                registration.nameCompany,
                                handleChange('nameCompany'),
                                ['required'],
                                ['Это поле обязательно']
                            )}

                            <Typography sx={{ mt: '20px' }}>Город</Typography>
                            {DefaultTextValidator(
                                registration.city,
                                handleChange('city'),
                                ['required'],
                                ['Это поле обязательно']
                            )}

                            <Typography sx={{ mt: '20px' }}>Адрес</Typography>
                            {DefaultTextValidator(
                                registration.address,
                                handleChange('address'),
                                ['required'],
                                ['Это поле обязательно']
                            )}

                            <Typography sx={{ mt: '20px' }}>Пароль</Typography>
                            {DefaultTextValidator(
                                registration.password,
                                handleChange('password'),
                                [
                                    'required',
                                    'minStringLength:6',
                                    'matchRegexp:^.*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$',
                                ],
                                [
                                    'Это поле обязательно',
                                    'Пароль не может быть меньше 6 символов',
                                    'Пароль должен содержать заглавные и строчные латинские буквы, цифры и специальные символы',
                                ]
                            )}

                            <Typography sx={{ mt: '20px' }}>
                                Телефоны
                            </Typography>
                            <TextField
                                type="number"
                                required
                                id="standard-multiline-flexible"
                                multiline
                                value={phone}
                                onChange={(event) =>
                                    setPhone([
                                        event.target.value
                                            .replace(/\D/g, '')
                                            .replace(/^[0-9]/, '+7')
                                            .replace(/^(\S{13,})?$/, ''),
                                    ])
                                }
                                variant="standard"
                                sx={{ width: '100%' }}
                                InputProps={{
                                    endAdornment: (
                                        <InputAdornment
                                            position="end"
                                            onClick={() => {
                                                setRegistration({
                                                    ...registration,
                                                    phone: registration.phone.concat(
                                                        [phone]
                                                    ),
                                                });
                                                setPhone([]);
                                            }}
                                        >
                                            <Icon
                                                fontSize="small"
                                                sx={{ cursor: 'pointer' }}
                                            >
                                                add_circle
                                            </Icon>
                                        </InputAdornment>
                                    ),
                                }}
                            />
                            {registration.phone && (
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                    aria-label="contacts"
                                >
                                    {registration.phone.map(
                                        (item: string[], i: number) => (
                                            <ListItem
                                                disablePadding
                                                key={item[i]}
                                            >
                                                <ListItemIcon>
                                                    <Phone />
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {item}
                                                </ListItemText>
                                                <ListItemIcon>
                                                    <RemoveCircle
                                                        sx={{
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => {
                                                            registration.phone =
                                                                registration.phone.filter(
                                                                    (
                                                                        n: string[]
                                                                    ) =>
                                                                        n !==
                                                                        item
                                                                );
                                                            setRegistration({
                                                                ...registration,
                                                            });
                                                        }}
                                                    />
                                                </ListItemIcon>
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            )}
                        </FormColumn>
                        <FormColumn>
                            <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>
                                Основная информация
                            </Typography>
                            <Typography>Сфера</Typography>
                            <TextValidator
                                name="sphera"
                                id="standard-multiline-flexible"
                                multiline
                                select
                                value={registration.sphera}
                                onChange={handleChange('sphera')}
                                variant="standard"
                                validators={['required']}
                                errorMessages={['Это поле обязательно']}
                                sx={{ width: '100%' }}
                            >
                                <MenuItem value="RECORD">
                                    Студии звукозаписи
                                </MenuItem>
                                <MenuItem value="PHOTO">Фотостудии</MenuItem>
                                <MenuItem value="TEACHING">
                                    Школы и педагоги
                                </MenuItem>
                                <MenuItem value="DANCE">
                                    Танцевальные залы
                                </MenuItem>
                            </TextValidator>

                            <Typography sx={{ mt: '20px' }}>Метро</Typography>
                            {DefaultTextValidator(
                                registration.subway,
                                handleChange('subway'),
                                ['required'],
                                ['Это поле обязательно']
                            )}

                            <Typography sx={{ mt: '20px' }}>Email</Typography>
                            {DefaultTextValidator(
                                registration.email,
                                handleChange('email'),
                                ['required', 'isEmail'],
                                ['Это поле обязательно', 'Email не верен']
                            )}
                        </FormColumn>
                    </Box>
                    <Button type="submit">зарегестрироваться</Button>
                </ValidatorForm>
            </RegistrationWindow>
        </Background>
    );
};
