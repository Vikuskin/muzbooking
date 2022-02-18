/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import logo from 'image/logoRegistration.svg';
import { InputDefault, FlexDiv } from 'style/otherStyles';
import { Link } from 'react-router-dom';
import { useActions } from 'hooks/useActions';
import { useTypedSelector } from 'hooks/useTypedSelector';


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

const FormLabel = styled('p')({
    lineHeight: 1,
    fontSize: '1rem',
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

export interface State {
    email: string;
    password: string;
    phone: string[][];
    nameCompany: string;
    city: string;
    sphera: string;
    address: string;
    subway: string;
    description: string;
}

export const Registration: React.FC = () => {
    const [value, setValue] = React.useState<State>({
        email: '',
        password: '',
        phone: [],
        nameCompany: '',
        city: '',
        sphera: '',
        address: '',
        subway: '',
        description: '',
    });
    const [phone, setPhone] = React.useState<Array<string>>(['']);
    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue({ ...value, [prop]: event.target.value });
        };
        const {data, loading, error} = useTypedSelector((state) => state.account);
    const {fetchRegistration} = useActions()
    

    const sendRegistration = async () => {
        const res = await fetchRegistration(
            value.city,
            value.email,
            value.nameCompany,
            value.password,
            value.phone,
            value.sphera,
            value.address,
            value.subway,
            value.description
        );
        if (res) {
            alert(res)
        } else {
            alert('Учетная запись партнера успешно создана')
        }
    }
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
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.nameCompany}
                            onChange={handleChange('nameCompany')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />
                        <Typography>Город</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.city}
                            onChange={handleChange('city')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />
                        <Typography>Адрес</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.address}
                            onChange={handleChange('address')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />
                        <Typography>Пароль</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.password}
                            onChange={handleChange('password')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />
                        <Typography>Телефоны</Typography>
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
                                            setValue({
                                                ...value,
                                                phone: value.phone.concat([
                                                    phone,
                                                ]),
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
                        {value.phone ? (
                            <List
                                sx={{
                                    width: '100%',
                                    maxWidth: 360,
                                    bgcolor: 'background.paper',
                                }}
                                aria-label="contacts"
                            >
                                {value.phone.map(
                                    (item: string[], i: number) => (
                                        // eslint-disable-next-line react/no-array-index-key
                                        <ListItem disablePadding key={i}>
                                            <ListItemIcon>
                                                <PhoneIcon />
                                            </ListItemIcon>
                                            <ListItemText>{item}</ListItemText>
                                            <ListItemIcon>
                                                <RemoveCircleIcon
                                                    sx={{ cursor: 'pointer' }}
                                                    onClick={() => {
                                                        value.phone =
                                                            value.phone.filter(
                                                                (n: any) =>
                                                                    n !== item
                                                            );
                                                        setValue({ ...value });
                                                    }}
                                                />
                                            </ListItemIcon>
                                        </ListItem>
                                    )
                                )}
                            </List>
                        ) : (
                            // eslint-disable-next-line react/jsx-no-useless-fragment
                            <></>
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
                            value={value.sphera}
                            onChange={handleChange('sphera')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
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
                        <Typography>Метро</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.subway}
                            onChange={handleChange('subway')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />
                        <Typography>Email</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.email}
                            onChange={handleChange('email')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />

                        <Typography>Описание</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={value.description}
                            onChange={handleChange('description')}
                            variant="standard"
                            sx={{ width: '100%', mb: '30px' }}
                        />
                    </FormColumn>
                </Box>
                <Button onClick={() => sendRegistration()}>
                    зарегестрироваться
                </Button>
            </RegistrationWindow>
        </Background>
    );
};
