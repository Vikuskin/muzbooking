import React from 'react';
import {
    Typography,
    IconButton,
    InputAdornment,
    Input,
    styled,
} from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import logo from 'image/logoRegistration.svg';
import { CustomButton, FlexDiv, input } from 'style/otherStyles';
import { useActions } from 'hooks/useActions';

interface State {
    email: string;
    password: string;
    showPassword: boolean;
}

const Background = styled('div')({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#eee',
    position: 'relative',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
});

const LoginWindow = styled('div')({
    backgroundColor: '#fff',
    maxWidth: '40%',
    padding: '40px 60px',
    textAlign: 'left',
    '@media (max-width: 899px)': {
        maxWidth: '60%',
    },
    '@media (max-width: 599px)': {
        maxWidth: '70%',
        padding: '20px 40px',
    },
});

const Button = styled(CustomButton)({
    fontWeight: 'normal',
    width: '100%',
    marginLeft: 0,
    fontSize: '15px',
    padding: '10px 20px',
    display: 'block',
    maxWidth: '100%',
});

export const Login: React.FC = () => {
    const [login, setLogin] = React.useState<State>({
        email: '',
        password: '',
        showPassword: false,
    });

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setLogin({ ...login, [prop]: event.target.value });
        };

    const handleClickShowPassword = () => {
        setLogin({
            ...login,
            showPassword: !login.showPassword,
        });
    };

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const { fetchLogin } = useActions();

    return (
        <Background>
            <LoginWindow>
                <FlexDiv sx={{ justifyContent: 'center', mb: '30px' }}>
                    <img
                        style={{
                            width: '35px',
                            marginRight: '10px',
                            marginBottom: '10px',
                        }}
                        src={logo}
                        alt="Logo"
                    />
                    <Typography sx={{ fontWeight: 'bold' }}>Вход</Typography>
                </FlexDiv>

                <Typography>Логин</Typography>
                {input(login.email, handleChange('email'))}

                <Typography sx={{ mt: '30px' }}>Пароль</Typography>
                <Input
                    id="standard-adornment-password"
                    type={login.showPassword ? 'text' : 'password'}
                    value={login.password}
                    onChange={handleChange('password')}
                    sx={{ width: '100%', mb: '30px' }}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {login.showPassword ? (
                                    <VisibilityOff />
                                ) : (
                                    <Visibility />
                                )}
                            </IconButton>
                        </InputAdornment>
                    }
                />
                <Button
                    onClick={async () => {
                        const res = await fetchLogin(
                            login.email,
                            login.password
                        );
                        if (res) {
                            alert(res);
                        }
                    }}
                >
                    войти
                </Button>
            </LoginWindow>
        </Background>
    );
};
