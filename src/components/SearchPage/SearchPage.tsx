/* eslint-disable no-nested-ternary */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
///
import React, { useEffect } from 'react';
import {
    Box,
    MenuItem,
    FormControl,
    Select,
    SelectChangeEvent,
    TextField,
    Autocomplete,
    Typography,
    styled,
    Button,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { InputSearch, InputTitle, FlexDiv } from 'style/otherStyles';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { CardPlace } from 'components/SearchPage/CardPlace';
import { Header } from 'components/Header/Header';

const Map = styled('div')({
    minWidth: '45%',
    borderRadius: '10px',
    height: '800px',
    '@media (max-width: 900px)': {
        minWidth: '100%',
        height: '500px',
        marginTop: '20px',
    },
    '@media (max-width: 600px)': {
        height: '300px',
    },
});

export const SearchPage: React.FC = () => {
    const [sort, setSort] = React.useState('');
    const services: string = useTypedSelector(
        (state) => state.services.services
    );
    console.log(services);
    const { data, loading } = useTypedSelector((state) => state.data);
    const { chooseServices, fetchPlaces, fetchCatalogPlace } = useActions();
    console.log(data);
    const autoComplete: any = [];
    autoComplete.push(data);

    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

    useEffect(() => {
        fetchPlaces(services);
    }, [services]);
    return (
        <>
            <Header />
            <Box sx={{ mt: '70px' }}>
                <Box sx={{ minWidth: 120, maxWidth: 300, margin: 'auto' }}>
                    <FormControl fullWidth sx={{ border: 'none' }}>
                        <Select
                            id="service"
                            key={`service-${services}`}
                            defaultValue={services || 'RECORD'}
                            onChange={(event: SelectChangeEvent) => {
                                chooseServices(event.target.value);
                            }}
                            input={<InputTitle />}
                        >
                            <MenuItem value="RECORD">
                                Студии звукозаписи
                            </MenuItem>
                            <MenuItem value="PHOTO">Фотостудии</MenuItem>
                            <MenuItem value="TEACHING">
                                Школы и педагоги
                            </MenuItem>
                            <MenuItem value="DANCE">Танцевальные залы</MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <FlexDiv
                    sx={{
                        alignItems: 'flex-start',
                        minHeight: '800px',
                        p: '5px 20px',
                        flexWrap: {
                            xs: 'wrap',
                            md: 'nowrap',
                        },
                    }}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: {
                                xs: 'wrap',
                                sm: 'nowrap',
                            },
                            width: '100%',
                        }}
                    >
                        {/* FILTERS */}
                        <Box
                            sx={{
                                flexBasis: {
                                    xs: '100%',
                                    sm: '40%',
                                },
                                textAlign: 'left',
                                pr: { xs: 0, sm: '20px' },
                            }}
                        >
                            <Box sx={{ mb: '15px' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Поиск по названию
                                </Typography>
                                <Autocomplete
                                    disablePortal
                                    id="searchName"
                                    options={autoComplete}
                                    sx={{ minWidth: 200, p: 0 }}
                                    renderInput={(params) => (
                                        <TextField
                                            // eslint-disable-next-line react/jsx-props-no-spreading
                                            {...params}
                                            label="Площадка"
                                        />
                                    )}
                                />
                            </Box>
                            <Box
                                sx={{
                                    minWidth: 120,
                                    margin: 'auto',
                                    mb: '15px',
                                }}
                            >
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Сортировать
                                </Typography>
                                <FormControl fullWidth sx={{ border: 'none' }}>
                                    <Select
                                        id="sort"
                                        value={sort}
                                        onChange={handleChangeSort}
                                        input={<InputSearch />}
                                    >
                                        <MenuItem value="increase price">
                                            По возрастанию цены
                                        </MenuItem>
                                        <MenuItem value="decrease price">
                                            По убыванию цены
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>

                        {/* PLACES */}
                        <Box
                            sx={{
                                width: '100%',
                                minWidth: '280px',
                                pr: { xs: 0, sm: 0, md: '20px' },
                            }}
                        >
                            {loading ? (
                                <>Загрузка...</>
                            ) : data[0] ? (
                                data.map((item: any) => (
                                    <Link to="/catalog">
                                        <Button
                                            sx={{ color:' black', textTransform: 'inherit' }}
                                            onClick={() =>
                                                fetchCatalogPlace(item._id)
                                            }
                                        >
                                            <CardPlace
                                                key={item._id}
                                                title={item.nameCompany}
                                                address={item.address}
                                                subway={item.subway}
                                                timetable={item.timetable}
                                                price={item.price}
                                                images={item.images}
                                            />
                                        </Button>
                                    </Link>
                                ))
                            ) : (
                                <>Нет площадок</>
                            )}
                        </Box>
                    </Box>

                    {/* MAP */}
                    <Map>
                        <iframe
                            title="Yandex map"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cf72c2061ddf2ea4555a3b49919308b440e44d331185ac4c861c1f173393260&amp;source=constructor"
                            width="100%"
                            height="100%"
                            style={{ border: 'none', borderRadius: '15px' }}
                        />
                    </Map>
                </FlexDiv>
            </Box>
        </>
    );
};
