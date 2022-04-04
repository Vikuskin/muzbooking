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
} from '@mui/material';
import { Link } from 'react-router-dom';
import { InputTitle } from 'style/otherStyles';
import {
    MainWrapper,
    Main,
    Places,
    CardWrapper,
} from 'style/search/searchPage';
import { useTypedSelector } from 'hooks/useTypedSelector';
import { useActions } from 'hooks/useActions';
import { CardPlace } from 'components/Search/CardPlace';
import { Header } from 'components/Header/Header';
import { Filters } from 'components/Search/Filters';
import { YandexMap } from 'components/Search/Map';
import { CardPlaceProps } from 'types/Search';
import { path } from 'enum';

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
    const handleChangeAutocomplete = (newValue: string | null) => {
        setValueAutoComplete(newValue);
    };
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

    const maxPrice: number =
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
                        <Filters
                            handleChangeAutoComplete={handleChangeAutocomplete}
                            autoComplete={autoComplete}
                            handleChangeSort={handleChangeSort}
                            sort={sort}
                            rangePrice={rangePrice}
                            handleChangeRangePrice={handleChangeRangePrice}
                            maxPrice={maxPrice}
                        />

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
                    <YandexMap data={data} mapState={mapState} />
                </Main>
            </Box>
        </>
    );
};
