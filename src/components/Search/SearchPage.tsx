/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable prefer-template */
/* eslint-disable no-var */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
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
    Slider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { InputSearch, InputTitle, FlexDiv } from 'style/otherStyles';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { CardPlace } from 'components/Search/CardPlace';
import { Header } from 'components/Header/Header';
import { CardPlaceProps } from 'types/Search';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';
import axios from 'axios';

const Main = styled(FlexDiv)({
    alignItems: 'flex-start',
    minHeight: '800px',
    padding: '5px 20px',
    '@media (max-width: 600px)': {
        flexWrap: 'wrap',
    },
});

const MainWrapper = styled(Box)({
    display: 'flex',
    width: '100%',
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

const MapWrapper = styled('div')({
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

    useEffect(() => {
        fetchPlaces(services || 'RECORD');
    }, [services]);

    const autoComplete: Array<string> = data[0]
        ? data.map((item: CardPlaceProps) => item.nameCompany)
        : [];
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
        if (data[0]) {
            if (sort === 'increase price') {
                data.sort(
                    (a: CardPlaceProps, b: CardPlaceProps) => a.price - b.price
                );
            } else {
                data.sort(
                    (a: CardPlaceProps, b: CardPlaceProps) => b.price - a.price
                );
            }
        }
    }, [sort, data]);
    const maxPrice =
        data[0] &&
        data.reduce(
            (item: { price: any }, current: { price: any }) =>
                item.price > current.price ? item : current,
            0
        ).price;

    const [rangePrice, setRangePrice] = useState<number[]>([0, maxPrice]);
    const handleChangeRangePrice = (
        event: Event,
        newValue: number | number[]
    ) => {
        setRangePrice(newValue as number[]);
    };
    useMemo(() => {
        if (data[0]) {
            findPlace = data.filter(
                (item: any) =>
                    item.price >= rangePrice[0] && item.price <= rangePrice[1]
            );
        }
    }, [rangePrice]);
    // const watch = true;
    // const { latitude, longitude } = usePosition(watch);
    // console.log(latitude);
    // console.log(longitude);

    const coords: any = [];
    const getCoordinate = async (city: string, address: string) => {
        try {
            const response = await axios.get(
                `https://geocode-maps.yandex.ru/1.x/?apikey=80b066aa-5aff-4f52-9b3b-4cdc28cc4c7c&format=json&geocode=${city}+${address}&results=1`
            );
            return response.data.response.GeoObjectCollection.featureMember[0]
                .GeoObject.Point.pos;
        } catch (e) {
            console.log(e);
        }
    };
    if (data[0]) {
        data.map(async (item: { city: string; address: string }) => {
            const result = await getCoordinate(item.city, item.address);
            coords.push(result)
            console.log(coords)
            return result;
        });
    }
    const test = [
        '30.351935 59.990723',
        '30.339835 59.93305',
        '30.356589 59.931887',
    ];
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
                    <MainWrapper>
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
                            <Box>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    Стоимость, ₽/ч
                                </Typography>
                                <Slider
                                    value={rangePrice}
                                    onChange={handleChangeRangePrice}
                                    min={0}
                                    max={maxPrice}
                                    valueLabelDisplay="auto"
                                    sx={{ color: '#f79521' }}
                                />
                            </Box>
                        </Filters>

                        {/* PLACES */}
                        <Places>
                            {loading ? (
                                <>Загрузка...</>
                            ) : (
                                (findPlace[0] &&
                                    findPlace.map((item: CardPlaceProps) => (
                                        <Button
                                            key={item._id}
                                            sx={{
                                                color: ' black',
                                                textTransform: 'inherit',
                                                width: '100%',
                                            }}
                                            onClick={() =>
                                                fetchCatalogPlace(item._id!)
                                            }
                                        >
                                            <Link
                                                to="/catalog"
                                                style={{ width: '100%' }}
                                            >
                                                <CardPlace
                                                    title={item.nameCompany!}
                                                    address={item.address}
                                                    subway={item.subway}
                                                    timetable={item.timetable}
                                                    price={item.price}
                                                    images={item.images}
                                                />
                                            </Link>
                                        </Button>
                                    ))) ||
                                (data[0] &&
                                    data.map((item: CardPlaceProps) => (
                                        <Button
                                            key={item._id}
                                            sx={{
                                                color: ' black',
                                                textTransform: 'inherit',
                                                width: '100%',
                                            }}
                                            onClick={() =>
                                                fetchCatalogPlace(item._id!)
                                            }
                                        >
                                            <Link
                                                to="/catalog"
                                                style={{ width: '100%' }}
                                            >
                                                <CardPlace
                                                    title={item.nameCompany!}
                                                    address={item.address}
                                                    subway={item.subway}
                                                    timetable={item.timetable}
                                                    price={item.price}
                                                    images={item.images}
                                                />
                                            </Link>
                                        </Button>
                                    )))
                            )}
                        </Places>
                    </MainWrapper>

                    {/* MAP */}
                    <MapWrapper>
                        <YMaps>
                            <Map
                                defaultState={{
                                    center: [59.935413, 30.331365],
                                    zoom: 9,
                                }}
                                width="100%"
                                height="100%"
                            >
                                
                                
                                <Placemark geometry={[30.351935, 59.990723]}/>
                               
                                {/* {test[0] &&
                                    test.map((item: any) => {
                                        console.log(item.split(' ')[0]);
                                        return (
                                            <Placemark
                                                geometry={[
                                                    item.split(' ')[0],
                                                    item.split(' ')[1],
                                                ]}
                                            />
                                        );
                                    })}
                                <Placemark defaultGeometry={[30.351935, 59.990723]}/> */}
                            </Map>
                        </YMaps>
                    </MapWrapper>
                </Main>
            </Box>
        </>
    );
};
