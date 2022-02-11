import * as React from 'react';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Typography } from '@mui/material';
import { CardPlace } from './CardPlace';
import { InputSearch } from '../../style/otherStyles';
import { Header } from '../Header/Header';
import { InputTitle } from '../../style/otherStyles';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

export const SearchPage: React.FC = () => {
    const [sort, setSort] = React.useState('');
    const services: string = useTypedSelector(state => state.services.services);
    console.log(services)
    const {chooseServices} = useActions()
    
    const top100Films = [
        { label: 'The Shawshank Redemption', year: 1994 },
        { label: 'The Godfather', year: 1972 },
        { label: 'The Godfather: Part II', year: 1974 },
        { label: 'The Dark Knight', year: 2008 },
    ]

    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

    const imgExmp = [ `${process.env.PUBLIC_URL}/image/dancing.png`, `${process.env.PUBLIC_URL}/image/dancing.png`, `${process.env.PUBLIC_URL}/image/dancing.png` ]
    
    return (
        <>
        <Header/>
        <Box sx={{ 
            mt: '70px'
         }}>
            <Box sx={{ minWidth: 120, maxWidth: 300, margin: 'auto' }}>
                <FormControl fullWidth sx={{ border: 'none' }}>
                    <Select
                        id="service"
                        key={`service-${services}`}
                        defaultValue={services ? services : 'RECORD'}
                        onChange={(event: SelectChangeEvent) => chooseServices(event.target.value)}
                        input={<InputTitle />}
                    >
                    <MenuItem value='RECORD'>Студии звукозаписи</MenuItem>
                    <MenuItem value='PHOTO'>Фотостудии</MenuItem>
                    <MenuItem value='TEACHING'>Школы и педагоги</MenuItem>
                    <MenuItem value='DANCE'>Танцевальные залы</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ 
                display: 'flex',
                justifyContent: 'space-between',
                minHeight: '800px',
                p: '5px 20px 5px 20px',
                flexWrap: { xs: 'wrap',sm: 'wrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' }
            }}>

            <Box sx={{ 
                display: 'flex',
                flexWrap: { xs: 'wrap',sm: 'nowrap', md: 'nowrap', lg: 'nowrap', xl: 'nowrap' }
            }}>

            {/* FILTERS */}
                <Box sx={{
                    flexBasis: { xs: '100%', sm: '35%', md: '35%', lg: '35%', xl: '35%' },
                    textAlign: 'left',
                    pr: { xs: 0, sm: '20px' },
                }}>
                    <Box sx={{ mb: '15px' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Поиск по названию</Typography>
                        <Autocomplete
                            disablePortal
                            id="searchName"
                            options={top100Films}
                            sx={{ minWidth: 200, p: 0 }}
                            renderInput={(params) => <TextField {...params} label="Площадка" />}
                        />
                    </Box>
                    <Box sx={{ minWidth: 120, margin: 'auto', mb: '15px' }}>
                        <Typography sx={{ fontWeight: 'bold' }}>Сортировать</Typography>
                            <FormControl fullWidth sx={{ border: 'none' }}>
                                <Select
                                    id="sort"
                                    value={sort}
                                    onChange={handleChangeSort}
                                    input={<InputSearch/>}
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
                    minWidth: '280px',
                    pr: { xs: 0, sm: 0, md: '20px' },
                }}>
                    <CardPlace id={1} title='some title' address='saint-P' subway='Nevskiy' timetable='all time' price={100} img={imgExmp}/>
                </Box>
            </Box>

            {/* MAP */}
            <Box sx={{
                minWidth: { xs: '100%', sm: '100%', md: '40%', lg: '40%', xl: '40%' },
                height: { xs: '300px', sm: '500px', md: '800px', lg: '800px', xl: '800px' },
                borderRadius: '10px'
            }}>
                <iframe title="Yandex map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cf72c2061ddf2ea4555a3b49919308b440e44d331185ac4c861c1f173393260&amp;source=constructor" width="100%" height="100%" style={{ border: 'none', borderRadius: '15px' }}></iframe>
            </Box>
            </Box>
        </Box>
        </>
    )
}