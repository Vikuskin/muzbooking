import { Box } from "@mui/system"
import { Typography } from "@mui/material"
import logo from '../../image/logoRegistration.svg'
import { Button } from "@mui/material"
import { TextField } from "@mui/material"
import { useState } from "react"
import React from 'react'
import { FormControl } from "@mui/material"
import { InputLabel } from "@mui/material"
import { OutlinedInput } from "@material-ui/core"
import { InputAdornment } from "@material-ui/core"
import { IconButton } from "@mui/material"
import { VisibilityOff } from "@mui/icons-material"
import { Visibility } from "@mui/icons-material"
import { CustomButton } from "../../style/otherStyles"
import Input from '@mui/material/Input';

interface State {
    name: string,
    password: string;
    showPassword: boolean;
}

export const Login: React.FC = () => {
    
    const [login, setLogin] = React.useState<State>({
        name: '',
        password: '',
        showPassword: false
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setLogin({ ...login, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setLogin({
          ...login,
          showPassword: !login.showPassword,
        });
      };
    
    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#eee',
            position: 'relative',
            display: 'grid',
            justifyItems:'center',
            alignItems:'center',
        }}>
            <Box sx={{
                backgroundColor: '#fff',
                maxWidth: { xs: '70%', sm: '60%', md: '40%' },
                padding: { xs: '20px 40px', lg: '40px 60px' },
                textAlign: 'left'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    justifyContent: 'center',
                    mb: '30px'
                }}>
                    <img style={{ width: '35px', marginRight: '10px', marginBottom: '10px' }} src={logo} alt='Logo'/>
                    <Typography sx={{ fontWeight: 'bold' }}>Вход</Typography>
                </Box>

                <Typography>Логин</Typography>
                <TextField
                    id="standard-multiline-flexible"
                    multiline
                    value={login.name}
                    onChange={handleChange('name')}
                    variant="standard"
                    sx={{ width: '100%', mb: '30px' }}
                />

                <Typography>Пароль</Typography>
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
                        {login.showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                    }
                />
                <CustomButton style={{ fontWeight: 'normal', width: '100%', marginLeft: 0, fontSize: '15px', padding: '10px 20px', display: 'block', maxWidth: '100%' }}>войти</CustomButton>
            </Box>
        </Box>
    )
}