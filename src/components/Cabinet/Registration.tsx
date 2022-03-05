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
import PhoneIcon from '@mui/icons-material/Phone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import logo from 'image/logoRegistration.svg';
import { FlexDiv, input } from 'style/otherStyles';
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
    const [phone, setPhone] = React.useState<Array<string>>(['']);
    const handleChange =
        (prop: keyof RegistrationState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setRegistration({ ...registration, [prop]: event.target.value });
        };

    const { fetchRegistration } = useActions();

    const sendRegistration = async () => {
        const res = await fetchRegistration(
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
                        {input(
                            registration.nameCompany,
                            handleChange('nameCompany')
                        )}
                        <Typography sx={{ mt: '20px' }}>Город</Typography>
                        {input(registration.city, handleChange('city'))}
                        <Typography sx={{ mt: '20px' }}>Адрес</Typography>
                        {input(registration.address, handleChange('address'))}
                        <Typography sx={{ mt: '20px' }}>Пароль</Typography>
                        {input(registration.password, handleChange('password'))}
                        <Typography sx={{ mt: '20px' }}>Телефоны</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={phone}
                            onChange={(event) => setPhone([event.target.value])}
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
                                        <ListItem disablePadding key={item[i]}>
                                            <ListItemIcon>
                                                <PhoneIcon />
                                            </ListItemIcon>
                                            <ListItemText>{item}</ListItemText>
                                            <ListItemIcon>
                                                <RemoveCircleIcon
                                                    sx={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        registration.phone =
                                                            registration.phone.filter(
                                                                (n: string[]) =>
                                                                    n !== item
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
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            select
                            value={registration.sphera}
                            onChange={handleChange('sphera')}
                            variant="standard"
                            sx={{ width: '100%' }}
                        >
                            <MenuItem value="RECORD">
                                Студии звукозаписи
                            </MenuItem>
                            <MenuItem value="PHOTO">Фотостудии</MenuItem>
                            <MenuItem value="TEACHING">
                                Школы и педагоги
                            </MenuItem>
                            <MenuItem value="DANCE">Танцевальные залы</MenuItem>
                        </TextField>
                        <Typography sx={{ mt: '20px' }}>Метро</Typography>
                        {input(registration.subway, handleChange('subway'))}
                        <Typography sx={{ mt: '20px' }}>Email</Typography>
                        {input(registration.email, handleChange('email'))}
                    </FormColumn>
                </Box>
                <Button onClick={() => sendRegistration()}>
                    зарегестрироваться
                </Button>
            </RegistrationWindow>
        </Background>
    );
};
