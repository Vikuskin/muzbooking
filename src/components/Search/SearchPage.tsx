/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useState } from 'react';
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
// import { usePosition } from 'use-position';
import { CardPlace } from 'components/Search/CardPlace';
import { Header } from 'components/Header/Header';
import { CardPlaceProps } from 'types/Search';

const Main = styled(FlexDiv)({
    alignItems: 'flex-start',
    minHeight: '800px',
    padding: '5px 20px',
    '@media (max-width: 600px)': {
        flexWrap: 'wrap',
    },
});

const Filters = styled(Box)({
    flexBasis: '40%',
    textAlign: 'left',
    paddingRight: '20px',
    '@media (max-width: 600px)': {
        paddingRight: 0,
        flexBasis: '100%',
    },
});

const Places = styled(Box)({
    width: '100%',
    minWidth: '280px',
    paddingRight: '20px',
    height: '800px',
    overflowY: 'scroll',
    '@media (max-width: 900px)': {
        paddingRight: 0,
    },
});

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
    const [sort, setSort] = useState<string>('');
    const services: string = useTypedSelector(
        (state) => state.services.services
    );
    const { data, loading } = useTypedSelector((state) => state.data);
    const { chooseServices, fetchPlaces, fetchCatalogPlace } = useActions();
    const autoComplete: Array<string> = data.map(
        (item: CardPlaceProps) => item.nameCompany
    );
    const [valueAutoComplete, setValueAutoComplete] = useState<string | null>(
        ''
    );
    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };
    let findPlace: CardPlaceProps[] = [];
    useMemo(() => {
        if (valueAutoComplete) {
            findPlace = data.filter(
                (item: CardPlaceProps) => item.nameCompany === valueAutoComplete
            );
        } else {
            findPlace = [];
        }
    }, [valueAutoComplete]);

    useMemo(() => {
        if (sort === 'increase price') {
            data.sort(
                (a: CardPlaceProps, b: CardPlaceProps) => a.price - b.price
            );
        } else {
            data.sort(
                (a: CardPlaceProps, b: CardPlaceProps) => b.price - a.price
            );
        }
    }, [sort, data]);

    useEffect(() => {
        fetchPlaces(services);
    }, [services]);
    // const watch = true;
    // const { latitude, longitude } = usePosition(watch);
    // console.log(latitude)
    // console.log(longitude)

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

                <Main>
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
                        <Filters>
                            <Box sx={{ mb: '15px' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Поиск по названию
                                </Typography>
                                <Autocomplete
                                    disablePortal
                                    id="searchName"
                                    options={autoComplete}
                                    sx={{ minWidth: 200, p: 0 }}
                                    onChange={(
                                        event: any,
                                        newValue: string | null
                                    ) => {
                                        setValueAutoComplete(newValue);
                                    }}
                                    renderInput={(params) => (
                                        <TextField {...params} />
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
                        </Filters>

                        {/* PLACES */}
                        <Places
                            sx={{
                                width: '100%',
                                minWidth: '280px',
                                pr: { xs: 0, sm: 0, md: '20px' },
                                height: '800px',
                                overflowY: 'scroll',
                            }}
                        >
                            {loading ? (
                                <>Загрузка...</>
                            ) : (
                                (findPlace[0] &&
                                    findPlace.map((item: CardPlaceProps) => (
                                        <Link to="/catalog">
                                            <Button
                                                sx={{
                                                    color: ' black',
                                                    textTransform: 'inherit',
                                                    width: '100%',
                                                }}
                                                onClick={() =>
                                                    fetchCatalogPlace(item._id!)
                                                }
                                            >
                                                <CardPlace
                                                    key={item._id}
                                                    title={item.nameCompany!}
                                                    address={item.address}
                                                    subway={item.subway}
                                                    timetable={item.timetable}
                                                    price={item.price}
                                                    images={item.images}
                                                />
                                            </Button>
                                        </Link>
                                    ))) ||
                                (data[0] &&
                                    data.map((item: CardPlaceProps) => (
                                        <Link to="/catalog">
                                            <Button
                                                sx={{
                                                    color: ' black',
                                                    textTransform: 'inherit',
                                                    width: '100%',
                                                }}
                                                onClick={() =>
                                                    fetchCatalogPlace(item._id!)
                                                }
                                            >
                                                <CardPlace
                                                    key={item._id}
                                                    title={item.nameCompany!}
                                                    address={item.address}
                                                    subway={item.subway}
                                                    timetable={item.timetable}
                                                    price={item.price}
                                                    images={item.images}
                                                />
                                            </Button>
                                        </Link>
                                    )))
                            )}
                        </Places>
                    </Box>

                    {/* MAP */}
                    <Map>
                        {/* <iframe
                            title="Yandex map"
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A4cf72c2061ddf2ea4555a3b49919308b440e44d331185ac4c861c1f173393260&amp;source=constructor"
                            width="100%"
                            height="100%"
                            style={{ border: 'none', borderRadius: '15px' }}
                        /> */}
                    </Map>
                </Main>
            </Box>
        </>
    );
};
