import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, IconButton, InputAdornment, Input } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';
import { ValidatorForm } from 'react-material-ui-form-validator';
import logo from 'image/logoRegistration.svg';
import { FlexDiv, DefaultTextValidator, OverlayForm } from 'style/otherStyles';
import { LoginWindow, Button } from 'style/cabinet/login';
import { useActions } from 'hooks/useActions';
import { LoginState } from 'types/Cabinet';
import { Link } from 'react-router-dom';

export const Login: React.FC = () => {
    const [login, setLogin] = React.useState<LoginState>({
        email: '',
        password: '',
        showPassword: false,
    });
    const handleChange =
        (prop: keyof LoginState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
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

    const handleSubmit = async () => {
        const res = await fetchLogin(login.email, login.password);
        if (res) {
            alert(res);
        }
    };
    const { t } = useTranslation();

    return (
        <OverlayForm>
            <LoginWindow>
                <FlexDiv sx={{ justifyContent: 'center', mb: '30px' }}>
                    <Link to='/'>
                        <img
                            style={{
                                width: '35px',
                                marginRight: '10px',
                                marginBottom: '10px',
                            }}
                            src={logo}
                            alt='Logo'
                        />
                    </Link>

                    <Typography sx={{ fontWeight: 'bold' }}>
                        {t('cabinet.login.title')}
                    </Typography>
                </FlexDiv>

                <ValidatorForm onSubmit={handleSubmit}>
                    <Typography>Email</Typography>
                    {DefaultTextValidator(
                        login.email,
                        handleChange('email'),
                        ['required', 'isEmail'],
                        [
                            t('validation.error.required'),
                            t('validation.error.email'),
                        ]
                    )}

                    <Typography sx={{ mt: '30px' }}>
                        {t('cabinet.login.password')}
                    </Typography>

                    <Input
                        name='password'
                        id='standard-adornment-password'
                        type={login.showPassword ? 'text' : 'password'}
                        value={login.password}
                        onChange={handleChange('password')}
                        sx={{ width: '100%', mb: '30px' }}
                        endAdornment={
                            <InputAdornment position='end'>
                                <IconButton
                                    aria-label='toggle password visibility'
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
                    <Button type='submit'>
                        {t('cabinet.login.loginButton')}
                    </Button>
                </ValidatorForm>
            </LoginWindow>
        </OverlayForm>
    );
};
