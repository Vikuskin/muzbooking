/* eslint-disable no-unneeded-ternary */
/* eslint-disable arrow-body-style */
/* eslint-disable no-undef */
/* eslint-disable no-else-return */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {
    FormControlLabel,
    Checkbox,
    Box,
    TextField,
    Typography,
    List,
    Grid,
    ListItem,
    Icon,
    styled,
} from '@mui/material';
import { ContentPageButton, FlexDiv, TitleH2, ContentPageListItem } from 'style/otherStyles';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useActions } from 'hooks/useActions';
import {CheckedPlace} from 'components/databases/dbCheckboxs'

interface StatePlatform {
    namePlatform: string;
    square: number;
    rider: string;
    products: Array<StateProducts>;
}

interface StateProducts {
    id: number;
    name: string;
    price: string;
    mon: string;
    tue: string;
    wed: string;
    thu: string;
    fri: string;
    sat: string;
    sun: string;
}

export interface PlatformProps {
    namePlatform: string;
    square: number;
    rider: string;
    products: Array<StateProducts>;
    services: Array<CheckedPlace>;
    comfort: Array<CheckedPlace>;
    idPlatform: string
}

export const ContentPagePlatform: React.FC<PlatformProps> = ({
    namePlatform,
    square,
    rider,
    products,
    services,
    comfort,
    idPlatform
}) => {
    const [platform, setPlatform] = React.useState<StatePlatform>({
        namePlatform,
        square,
        rider,
        products,
    });

    const handleChange =
        (prop: keyof StatePlatform) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setPlatform({ ...platform, [prop]: event.target.value });
        };
    const [servicesChecked, setServicesChecked] = React.useState(services);
    const [comfortChecked, setComfortChecked] = React.useState(comfort);
    const handleChangeServices = (position: any) => {
        const updatedCheckedState = servicesChecked.map((item, index) =>
            index === position
                ? { ...item, checked: !item.checked }
                : { ...item }
        );
        setServicesChecked(updatedCheckedState);
    };

    const handleChangeComfort = (position: any) => {
        const updatedCheckedState = comfortChecked.map((item, index) =>
            index === position
                ? { ...item, checked: !item.checked }
                : { ...item }
        );
        setComfortChecked(updatedCheckedState);
    };

    const [product, setProduct] = React.useState<StateProducts>({
        id: Date.now(),
        name: '',
        price: '',
        mon: '00-23',
        tue: '00-23',
        wed: '00-23',
        thu: '00-23',
        fri: '00-23',
        sat: '00-23',
        sun: '00-23',
    });

    const handleChangeProducts =
        (prop: keyof StateProducts) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setProduct({ ...product, [prop]: event.target.value });
        };
    const { fetchAccountPlatform, fetchAccountContent } = useActions();

    const sendPlatform = async () => {
        await fetchAccountPlatform(
            localStorage.token,
            platform.namePlatform,
            platform.square,
            platform.rider,
            platform.products,
            servicesChecked,
            comfortChecked,
            idPlatform
        );
        window.location.reload();
    };

    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography>Название</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={platform.namePlatform}
                onChange={handleChange('namePlatform')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Площадь</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={platform.square}
                onChange={handleChange('square')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Райдер</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={platform.rider}
                onChange={handleChange('rider')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />

            {/* COMFORT SERVICES */}
            <Box
                sx={{
                    display: 'flex',
                    flexGrow: 1,
                    justifyContent: 'space-between',
                    maxHeight: '420px',
                    overflow: 'scroll',
                    overflowX: 'hidden',
                    maxWidth: '100%',
                    padding: '20px',
                    border: '2px solid #e2e2e2',
                    borderRadius: '4px',
                    backgroundColor: '#ebeff2',
                    marginBottom: '30px',
                }}
            >
                <Grid item xs={12} md={6}>
                    <TitleH2>Удобства</TitleH2>
                    <List sx={{ p: 0 }}>
                        {comfortChecked.map(({ value, id, checked }) => (
                            <ListItem sx={{ p: 0 }} key={id}>
                                <FormControlLabel
                                    value={value}
                                    control={<Checkbox />}
                                    label={value}
                                    checked={checked}
                                    onChange={() => handleChangeComfort(id)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TitleH2>Сервис</TitleH2>
                    <List sx={{ p: 0 }}>
                        {servicesChecked.map(({ value, id, checked }) => (
                            <ListItem key={id} sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={value}
                                    control={<Checkbox />}
                                    label={value}
                                    checked={checked}
                                    onChange={() => handleChangeServices(id)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Box>

            {/* PRICES */}
            <TitleH2>Услуги</TitleH2>
            <ContentPageListItem sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ width: '80%' }}>
                    <FlexDiv >
                        <Box sx={{ width: '50%', mb: '30px' }}>
                            <Typography>Наименование</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={product.name}
                                onChange={handleChangeProducts('name')}
                                variant="standard"
                            />
                        </Box>

                        <Box sx={{ width: '50%', mb: '30px' }}>
                            <Typography>Цена</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={product.price}
                                onChange={handleChangeProducts('price')}
                                variant="standard"
                            />
                        </Box>
                    </FlexDiv>

                    <Typography>Время работы</Typography>
                    <FlexDiv>
                        <Typography>Понедельник</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.mon}
                            onChange={handleChangeProducts('mon')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Вторник</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.tue}
                            onChange={handleChangeProducts('tue')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Среда</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.wed}
                            onChange={handleChangeProducts('wed')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Четверг</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.thu}
                            onChange={handleChangeProducts('thu')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Пятница</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.fri}
                            onChange={handleChangeProducts('fri')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Суббота</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.sat}
                            onChange={handleChangeProducts('sat')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Воскресенье</Typography>
                        <TextField
                            id="standard-multiline-flexible"
                            multiline
                            value={product.sun}
                            onChange={handleChangeProducts('sun')}
                            variant="standard"
                            sx={{ width: '70%' }}
                        />
                    </FlexDiv>
                </Box>
                <Icon
                    fontSize="large"
                    sx={{ cursor: 'pointer' }}
                    onClick={() => {
                        setPlatform({
                            ...platform,
                            products: [...platform.products, product],
                        });
                        setProduct({
                            id: Date.now(),
                            name: '',
                            price: '',
                            mon: '00-23',
                            tue: '00-23',
                            wed: '00-23',
                            thu: '00-23',
                            fri: '00-23',
                            sat: '00-23',
                            sun: '00-23',
                        });
                    }}
                >
                    add_circle
                </Icon>
            </ContentPageListItem>
            {platform.products.map((item: StateProducts) => {
                return (
                <ContentPageListItem sx={{ justifyContent: 'space-between' }}
                    key={item.id}
                >
                    <Box sx={{ width: '80%' }}>
                        <FlexDiv>
                            <Box sx={{ width: '50%', mb: '30px' }}>
                                <Typography>Наименование</Typography>
                                <TextField
                                    id="standard-multiline-flexible"
                                    multiline
                                    value={item.name}
                                    onChange={handleChangeProducts('name')}
                                    variant="standard"
                                />
                            </Box>

                            <Box sx={{ width: '50%', mb: '30px' }}>
                                <Typography>Цена</Typography>
                                <TextField
                                    id="standard-multiline-flexible"
                                    multiline
                                    value={item.price}
                                    onChange={handleChangeProducts('price')}
                                    variant="standard"
                                />
                            </Box>
                        </FlexDiv>

                        <Typography>Время работы</Typography>
                        <FlexDiv>
                            <Typography>Понедельник</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.mon}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Вторник</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.tue}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Среда</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.wed}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Четверг</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.thu}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Пятница</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.fri}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Суббота</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.sat}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Воскресенье</Typography>
                            <TextField
                                id="standard-multiline-flexible"
                                multiline
                                value={item.sun}
                                variant="standard"
                                sx={{ width: '70%' }}
                            />
                        </FlexDiv>
                    </Box>
                    <RemoveCircleIcon
                        fontSize="large"
                        sx={{ cursor: 'pointer' }}
                        onClick={() => {
                            platform.products = platform.products.filter(
                                (n: any) => n !== item
                            );
                            setPlatform({ ...platform });
                        }}
                    />
                </ContentPageListItem>)
            })}

            <ContentPageButton onClick={() => sendPlatform()}>Сохранить</ContentPageButton>
            <ContentPageButton onClick={() => fetchAccountContent(localStorage.token)}>Назад</ContentPageButton>


        </Box>
    );
};
