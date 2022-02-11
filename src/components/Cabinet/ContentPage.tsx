import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

interface State {
    sphera: string,
    name: string,
    city: string,
    address: string,
    phone: object,
    subway: string,
    email: object
}

export const ContentPage = () => {
    const [value, setValue] = React.useState<State>({
        sphera: '',
        name: '',
        city: '',
        address: '',
        phone: {},
        subway: '',
        email: {}
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue({ ...value, [prop]: event.target.value });
    };

    return (
        <Box sx={{
            mt: '70px',
            p: '30px'
        }}>   
        {/* MAIN INFO */}
            <Box sx={{
                width: '50%',
                textAlign: 'left'
            }}>
                
            
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
                    <MenuItem value='RECORD'>Студии звукозаписи</MenuItem>
                    <MenuItem value='PHOTO'>Фотостудии</MenuItem>
                    <MenuItem value='TEACHING'>Школы и педагоги</MenuItem>
                    <MenuItem value='DANCE'>Танцевальные залы</MenuItem>
                </TextField>
            <Typography>Название</Typography>
                <TextField
                    id="standard-multiline-flexible"
                    multiline
                    value={value.name}
                    onChange={handleChange('name')}
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
            <Typography>Телефоны</Typography>
                <TextField
                    id="standard-multiline-flexible"
                    multiline
                    value={value.name}
                    onChange={handleChange('name')}
                    variant="standard"
                    sx={{ width: '100%', mb: '30px' }}
                />
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
                    value={value.name}
                    onChange={handleChange('name')}
                    variant="standard"
                    sx={{ width: '100%', mb: '30px' }}
                />
            </Box>
        </Box>
    )
}