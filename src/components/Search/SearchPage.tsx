/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
    Card,
    Slider,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { InputSearch, InputTitle, FlexDiv } from 'style/otherStyles';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { CardPlace } from 'components/Search/CardPlace';
import { Header } from 'components/Header/Header';
import { CardPlaceProps } from 'types/Search';
import {
    YMaps,
    Map,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ObjectManager,
    ObjectManagerFeatures,
} from 'react-yandex-maps';
import axios from 'axios';
import { path } from 'enum';

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

const CardWrapper = styled(Card)({
    overflow: 'visible',
    boxShadow: 'none',
    padding: '5px',
});

export const SearchPage: React.FC = () => {
    const [sort, setSort] = useState<string>('');
    const services: string = useTypedSelector(
        (state) => state.services.services
    );
    const { data, loading } = useTypedSelector((state) => state.data);
    const { chooseServices, fetchPlaces, fetchCatalogPlace } = useActions();

    // FILTERS
    const autoComplete: Array<string> = data[0]
        ? data.map((item: CardPlaceProps) => item.nameCompany)
        : [];
    const [valueAutoComplete, setValueAutoComplete] = useState<string | null>(
        ''
    );
    const handleChangeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    };

    const [findPlace, setFindPlace] = useState([]);
    useMemo(() => {
        if (valueAutoComplete) {
            setFindPlace(
                data.filter(
                    (item: CardPlaceProps) =>
                        item.nameCompany === valueAutoComplete
                )
            );
        } else {
            setFindPlace([]);
        }
    }, [valueAutoComplete, data]);

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
            (item: { price: string }, current: { price: string }) =>
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
            setFindPlace(
                data.filter(
                    (item: CardPlaceProps) =>
                        item.price >= rangePrice[0] &&
                        item.price <= rangePrice[1]
                )
            );
        }
    }, [rangePrice, data]);

    // MAP
    const [mapState, setMapState] = useState(true);
    const coords: ObjectManagerFeatures = [];
    const getCoordinate = async (city: string, address: string) => {
        try {
            const response = await axios.get(
                `https://catalog.api.2gis.com/3.0/items/geocode?q=${city}, ${address}, 3&fields=items.point,items.geometry.centroid&key=ruxutq4755`
            );
            return response.data;
        } catch (e) {
            return e.response;
        }
    };

    if (data[0]) {
        data.forEach(async (item: CardPlaceProps) => {
            const result = await getCoordinate(item.city, item.address);
            coords.push({
                type: 'Feature',
                id: item._id,
                geometry: {
                    type: 'Point',
                    coordinates: [
                        result.result.items[0].point.lat,
                        result.result.items[0].point.lon,
                    ],
                },
                properties: {
                    balloonContentHeader: `<font size=3><b>${item.nameCompany}</b></font>`,
                    balloonContentBody: `<p>${item.address}</p>${item.subway}<p></p><p></p>`,
                    balloonContentFooter: `<font size=1>${item.price}</font>`,
                    hintContent: `<strong>${item.nameCompany}</strong>`,
                },
            });
        });
    }

    const FetchPlaces = (params: string) => {
        const prevParams = useRef(params);

        useEffect(() => {
            if (
                prevParams.current !== params ||
                prevParams.current === params
            ) {
                fetchPlaces(params);
                setMapState(true);
                prevParams.current = params;
            }
        }, [params]);
    };
    FetchPlaces(services || 'RECORD');
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <Box sx={{ mt: '70px' }}>
                <Box sx={{ minWidth: 120, maxWidth: 300, margin: 'auto' }}>
                    <FormControl fullWidth sx={{ border: 'none' }}>
                        <Select
                            id='service'
                            key={`service-${services}`}
                            defaultValue={services || 'RECORD'}
                            onChange={(event: SelectChangeEvent) => {
                                chooseServices(event.target.value);
                                setMapState(false);
                            }}
                            input={<InputTitle />}
                        >
                            <MenuItem value='RECORD'>
                                {t('sphera.record')}
                            </MenuItem>
                            <MenuItem value='PHOTO'>
                                {t('sphera.photo')}
                            </MenuItem>
                            <MenuItem value='TEACHING'>
                                {t('sphera.teaching')}
                            </MenuItem>
                            <MenuItem value='DANCE'>
                                {t('sphera.dance')}
                            </MenuItem>
                        </Select>
                    </FormControl>
                </Box>

                <Main>
                    <MainWrapper>
                        {/* FILTERS */}
                        <Filters>
                            <Box sx={{ mb: '15px' }}>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    {t('search.searchPage.filtersName')}
                                </Typography>
                                <Autocomplete
                                    disablePortal
                                    id='searchName'
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
                                    {t(
                                        'search.searchPage.filtersSort.filtersSort'
                                    )}
                                </Typography>
                                <FormControl fullWidth sx={{ border: 'none' }}>
                                    <Select
                                        id='sort'
                                        value={sort}
                                        onChange={handleChangeSort}
                                        input={<InputSearch />}
                                    >
                                        <MenuItem value='increase price'>
                                            {t(
                                                'search.searchPage.filtersSort.increase'
                                            )}
                                        </MenuItem>
                                        <MenuItem value='decrease price'>
                                            {t(
                                                'search.searchPage.filtersSort.decrease'
                                            )}
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                            <Box>
                                <Typography sx={{ fontWeight: 'bold' }}>
                                    {t('search.searchPage.price')}
                                </Typography>
                                <Slider
                                    value={rangePrice}
                                    onChange={handleChangeRangePrice}
                                    min={0}
                                    max={maxPrice}
                                    valueLabelDisplay='auto'
                                    sx={{ color: '#f79521' }}
                                />
                            </Box>
                        </Filters>

                        {/* PLACES */}
                        <Places>
                            {loading ? (
                                <>{t('loading')}</>
                            ) : (
                                (findPlace[0] &&
                                    findPlace.map((item: CardPlaceProps) => (
                                        <Link
                                            key={item._id}
                                            to={path.Catalog}
                                            style={{ width: '100%' }}
                                        >
                                            <CardWrapper
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
                                                    title={item.nameCompany!}
                                                    address={item.address}
                                                    subway={item.subway}
                                                    timetable={item.timetable}
                                                    price={item.price}
                                                    images={item.images}
                                                    city={item.city}
                                                    _id={item._id}
                                                />
                                            </CardWrapper>
                                        </Link>
                                    ))) ||
                                (data[0] ? (
                                    data.map((item: CardPlaceProps) => (
                                        <Link
                                            key={item._id}
                                            to={path.Catalog}
                                            style={{ width: '100%' }}
                                        >
                                            <CardWrapper
                                                sx={{
                                                    color: 'black',
                                                    textTransform: 'inherit',
                                                    width: '100%',
                                                }}
                                                onClick={() =>
                                                    fetchCatalogPlace(item._id!)
                                                }
                                            >
                                                <CardPlace
                                                    title={item.nameCompany!}
                                                    address={item.address}
                                                    subway={item.subway}
                                                    timetable={item.timetable}
                                                    price={item.price}
                                                    images={item.images}
                                                    city={item.city}
                                                    _id={item._id}
                                                />
                                            </CardWrapper>
                                        </Link>
                                    ))
                                ) : (
                                    <Box>
                                        {t(
                                            'cabinet.calendar.tableHeadUndefined'
                                        )}
                                    </Box>
                                ))
                            )}
                        </Places>
                    </MainWrapper>

                    {/* MAP */}

                    <MapWrapper>
                        {mapState ? (
                            <YMaps>
                                <Map
                                    defaultState={{
                                        center: [59.935413, 30.331365],
                                        zoom: 9,
                                    }}
                                    width='100%'
                                    height='100%'
                                >
                                    <ObjectManager
                                        options={{
                                            clusterize: true,
                                            gridSize: 32,
                                            clusterDisableClickZoom: true,
                                        }}
                                        objects={{
                                            preset: 'islands#greenDotIcon',
                                        }}
                                        clusters={{
                                            preset: 'islands#greenClusterIcons',
                                        }}
                                        features={coords}
                                        modules={[
                                            'objectManager.addon.objectsBalloon',
                                            'objectManager.addon.objectsHint',
                                        ]}
                                    />
                                </Map>
                            </YMaps>
                        ) : (
                            <Box>{t('loading')}</Box>
                        )}
                    </MapWrapper>
                </Main>
            </Box>
        </>
    );
};
