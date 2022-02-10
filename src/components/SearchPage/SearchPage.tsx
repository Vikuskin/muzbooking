import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import { CardPlace } from './CardPlace';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

const InputTitle = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: 'none',
        padding: '20px 8px',
        overflow: 'hidden',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
  });

const InputDefault = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        color: 'rgba(0, 0, 0, 0.6)',
        padding: '16px 39px 16px 9px',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
    },
});

export const SearchPage: React.FC = () => {
    const [service, setService] = React.useState('');
    const [sort, setSort] = React.useState('');

    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
    ]

    const handleChangeService = (event: SelectChangeEvent) => {
        setService(event.target.value as string);
    };

    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

    const imgExmp = [ `${process.env.PUBLIC_URL}/image/dancing.png`, `${process.env.PUBLIC_URL}/image/dancing.png`, `${process.env.PUBLIC_URL}/image/dancing.png` ]
    
    return (
        <Box sx={{ 
            mt: '70px'
         }}>
            <Box sx={{ minWidth: 120, maxWidth: 300, margin: 'auto' }}>
                <FormControl fullWidth sx={{ border: 'none' }}>
                    <Select
                        id="service"
                        value={service}
                        onChange={handleChangeService}
                        input={<InputTitle />}
                    >
                    <MenuItem value='record studios'>Студии звукозаписи</MenuItem>
                    <MenuItem value='photo studios'>Фотостудии</MenuItem>
                    <MenuItem value='teaching'>Школы и педагоги</MenuItem>
                    <MenuItem value='dancing'>Танцевальные залы</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: '800px'
            }}>

            <Box sx={{ 
                flexBasis: '50%',
                display: 'flex',
            }}>
            {/* FILTERS */}
            <Box sx={{
                p: '5px 10px 5px 20px',
                textAlign: 'left',
            }}>
                <Box sx={{ mb: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Поиск по названию</Typography>
                    <Autocomplete
                        disablePortal
                        id="searchName"
                        options={top100Films}
                        sx={{ width: 300, p: 0 }}
                        renderInput={(params) => <TextField {...params} label="Площадка" />}
                    />
                </Box>
                <Box sx={{ minWidth: 120, maxWidth: 300, margin: 'auto', mb: '15px' }}>
                    <Typography sx={{ fontWeight: 'bold' }}>Сортировать</Typography>
                        <FormControl fullWidth sx={{ border: 'none' }}>
                            <Select
                                id="sort"
                                value={sort}
                                onChange={handleChangeSort}
                                input={<InputDefault/>}
                            >
                                <MenuItem value='increase price'>По возрастанию цены</MenuItem>
                                <MenuItem value='decrease price'>По убыванию цены</MenuItem>
                            </Select>
                        </FormControl>
                </Box>
            </Box>


            {/* PLACES */}  
            <Box sx={{
                width: '100%',
                p: '0px 10px'
            }}>
                <CardPlace id={1} title='some title' address='saint-P' subway='Nevskiy' timetable='all time' price={100} img={imgExmp}/>
            </Box>
            </Box>

            {/* MAP */}
            <Box sx={{
                flexBasis: '50%',
                borderRadius: '10px'
            }}>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cf72c2061ddf2ea4555a3b49919308b440e44d331185ac4c861c1f173393260&amp;source=constructor" width="100%" height="100%" style={{ border: 'none', borderRadius: '15px' }}></iframe>
            </Box>
            </Box>
        </Box>
    )
}