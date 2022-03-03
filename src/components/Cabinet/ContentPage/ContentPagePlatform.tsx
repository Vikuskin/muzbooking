/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import {
    FormControlLabel,
    Checkbox,
    Box,
    Typography,
    List,
    Grid,
    ListItem,
    Icon,
    styled,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import {
    ContentPageButton,
    FlexDiv,
    TitleH2,
    ContentPageListItem,
    input,
} from 'style/otherStyles';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { useActions } from 'hooks/useActions';
import { CheckedPlace } from 'components/databases/dbCheckboxs';

interface StatePlatform {
    namePlatform: string;
    square: string;
    rider: string;
    products: Array<StateProducts>;
}

export interface StateProducts {
    id: string;
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
    square: string;
    rider: string;
    products: Array<StateProducts>;
    services: Array<CheckedPlace>;
    comfort: Array<CheckedPlace>;
    _id: string;
    images: Array<string>;
}

const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
    marginBottom: '30px',
};
const activeStyle = {
    borderColor: '#2196f3',
};
const acceptStyle = {
    borderColor: '#00e676',
};
const rejectStyle = {
    borderColor: '#ff1744',
};
const Comfort = styled('div')({
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
});

export const ContentPagePlatform: React.FC<PlatformProps> = ({
    namePlatform,
    square,
    rider,
    products,
    services,
    comfort,
    _id,
    images,
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
        id: Date.now().toString(),
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
    const { fetchAccountPlatform } = useActions();

    // images
    const [files, setFiles] = useState(images);
    console.log(files);
    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file: Blob | MediaSource) =>
                Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })
            )
        );
    }, []);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject,
    } = useDropzone({
        onDrop,
        accept: 'image/jpeg, image/png, image/jpg',
        maxFiles: 3,
    });

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {}),
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    const thumbs = files.map((file: any) => (
        <div key={file.filename} style={{ position: 'relative' }}>
            <img
                src={
                    file.preview
                        ? file.preview
                        : `http://localhost:5000/${file.path}`
                }
                alt={file.originalname}
                style={{ minHeight: '300px', marginRight: '10px' }}
            />
            <RemoveCircleIcon
                fontSize="large"
                sx={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={() => {
                    const fileRemove: any = files.filter(
                        (n: any) => n !== file
                    );
                    setFiles(fileRemove);
                }}
            />
        </div>
    ));

    useEffect(
        () => () => {
            files.forEach((file: any) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    const sendPlatform = async () => {
        console.log(files);
        fetchAccountPlatform(
            localStorage.token,
            platform.namePlatform,
            platform.square,
            platform.rider,
            platform.products,
            servicesChecked,
            comfortChecked,
            _id,
            files
        );
        window.location.reload();
    };

    return (
        <Box sx={{ textAlign: 'left' }}>
            <Typography>Название</Typography>
            {input(platform.namePlatform, handleChange('namePlatform'))}
            <Typography sx={{ mt: '20px' }}>Площадь</Typography>
            {input(platform.square, handleChange('square'))}
            <Typography sx={{ mt: '20px' }}>Райдер</Typography>
            {input(platform.rider, handleChange('rider'))}

            {/* IMAGES */}
            <Typography sx={{ mt: '20px' }}>Изображения</Typography>
            <Box {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <Box>Перетащите изображения сюда</Box>
            </Box>
            <Box>{files[0] && thumbs}</Box>

            {/* COMFORT SERVICES */}
            <Comfort>
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
            </Comfort>

            {/* PRICES */}
            <TitleH2>Услуги</TitleH2>
            <ContentPageListItem sx={{ justifyContent: 'space-between' }}>
                <Box sx={{ width: '80%' }}>
                    <FlexDiv>
                        <Box sx={{ width: '50%' }}>
                            <Typography>Наименование</Typography>
                            <Box sx={{ width: '50%', mb: '30px' }}>
                                {input(
                                    product.name,
                                    handleChangeProducts('name')
                                )}
                            </Box>
                        </Box>

                        <Box sx={{ width: '50%' }}>
                            <Typography>Цена</Typography>
                            <Box sx={{ width: '50%', mb: '30px' }}>
                                {input(
                                    product.price,
                                    handleChangeProducts('price')
                                )}
                            </Box>
                        </Box>
                    </FlexDiv>

                    <Typography>Время работы</Typography>
                    <FlexDiv>
                        <Typography>Понедельник</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.mon, handleChangeProducts('mon'))}
                        </Box>
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Вторник</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.tue, handleChangeProducts('tue'))}
                        </Box>
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Среда</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.wed, handleChangeProducts('wed'))}
                        </Box>
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Четверг</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.thu, handleChangeProducts('thu'))}
                        </Box>
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Пятница</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.fri, handleChangeProducts('fri'))}
                        </Box>
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Суббота</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.sat, handleChangeProducts('sat'))}
                        </Box>
                    </FlexDiv>
                    <FlexDiv>
                        <Typography>Воскресенье</Typography>
                        <Box sx={{ width: '70%' }}>
                            {input(product.sun, handleChangeProducts('sun'))}
                        </Box>
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
                            id: Date.now().toString(),
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
            {platform.products.map((item: StateProducts) => (
                <ContentPageListItem
                    sx={{ justifyContent: 'space-between' }}
                    key={item.id}
                >
                    <Box sx={{ width: '80%' }}>
                        <FlexDiv>
                            <Box sx={{ width: '50%' }}>
                                <Typography>Наименование</Typography>
                                <Box sx={{ width: '50%', mb: '30px' }}>
                                    {input(
                                        item.name,
                                        handleChangeProducts('name')
                                    )}
                                </Box>
                            </Box>

                            <Box sx={{ width: '50%' }}>
                                <Typography>Цена</Typography>
                                <Box sx={{ width: '50%', mb: '30px' }}>
                                    {input(
                                        item.price,
                                        handleChangeProducts('price')
                                    )}
                                </Box>
                            </Box>
                        </FlexDiv>

                        <Typography>Время работы</Typography>
                        <FlexDiv>
                            <Typography>Понедельник</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.mon, handleChangeProducts('mon'))}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Вторник</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.tue, handleChangeProducts('tue'))}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Среда</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.wed, handleChangeProducts('wed'))}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Четверг</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.thu, handleChangeProducts('thu'))}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Пятница</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.fri, handleChangeProducts('fri'))}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Суббота</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.sat, handleChangeProducts('sat'))}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <Typography>Воскресенье</Typography>
                            <Box sx={{ width: '70%' }}>
                                {input(item.sun, handleChangeProducts('sun'))}
                            </Box>
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
                </ContentPageListItem>
            ))}

            <ContentPageButton onClick={() => sendPlatform()}>
                Сохранить
            </ContentPageButton>
        </Box>
    );
};
