/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    FormControlLabel,
    Checkbox,
    Box,
    Typography,
    List,
    Grid,
    ListItem,
    Icon,
} from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { useDropzone } from 'react-dropzone';
import {
    FlexDiv,
    TitleH2,
    ContentPageListItem,
    DefaultTextValidator,
    TypographyMarginTop,
    ButtonPrimary,
} from 'style/otherStyles';
import {
    baseStyle,
    activeStyle,
    acceptStyle,
    rejectStyle,
    Comfort,
    TypographyTimetable,
} from 'style/cabinet/contentPage/contentPagePlatform';
import { useActions } from 'hooks/useActions';
import {
    ContentCompanyImages,
    ContentPagePlatformProps,
    PlatformState,
    ProductsState,
} from 'types/Cabinet';
import { path } from 'enum';

export const ContentPagePlatform: React.FC<ContentPagePlatformProps> = ({
    namePlatform,
    square,
    rider,
    products,
    services,
    comfort,
    _id,
    images,
}) => {
    const [platform, setPlatform] = React.useState<PlatformState>({
        namePlatform,
        square,
        rider,
        products,
    });
    const handleChange =
        (prop: keyof PlatformState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setPlatform({ ...platform, [prop]: event.target.value });
        };
    const [servicesChecked, setServicesChecked] = React.useState(services);
    const [comfortChecked, setComfortChecked] = React.useState(comfort);
    const handleChangeServices = (position: number) => {
        const updatedCheckedState = servicesChecked.map((item, index) =>
            index === position
                ? { ...item, checked: !item.checked }
                : { ...item }
        );
        setServicesChecked(updatedCheckedState);
    };

    const handleChangeComfort = (position: number) => {
        const updatedCheckedState = comfortChecked.map((item, index) =>
            index === position
                ? { ...item, checked: !item.checked }
                : { ...item }
        );
        setComfortChecked(updatedCheckedState);
    };

    const [product, setProduct] = React.useState<ProductsState>({
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
        (prop: keyof ProductsState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setProduct({ ...product, [prop]: event.target.value });
        };
    const { fetchAccountPlatform } = useActions();

    // images

    const [files, setFiles] = useState(images);
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

    const thumbs = files.map((file: ContentCompanyImages) => (
        <div key={file.filename || file.name} style={{ position: 'relative' }}>
            <img
                src={
                    file.preview
                        ? file.preview
                        : `${path.SERVER_URL}/${file.path}`
                }
                alt={file.originalname}
                style={{ minHeight: '300px', marginRight: '10px' }}
            />
            <RemoveCircleIcon
                fontSize='large'
                sx={{ position: 'absolute', top: '10px', right: '10px' }}
                onClick={() => {
                    const fileRemove: Array<ContentCompanyImages> =
                        files.filter((n: ContentCompanyImages) => n !== file);
                    setFiles(fileRemove);
                }}
            />
        </div>
    ));

    useEffect(
        () => () => {
            files.forEach((file: ContentCompanyImages) =>
                URL.revokeObjectURL(file.preview!)
            );
        },
        [files]
    );

    const handleSubmit = async () => {
        await fetchAccountPlatform(
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
    const { t } = useTranslation();

    return (
        <Box sx={{ textAlign: 'left' }}>
            <ValidatorForm onSubmit={handleSubmit}>
                <Typography>
                    {t('cabinet.contentPage.platform.name')}
                </Typography>
                {DefaultTextValidator(
                    platform.namePlatform,
                    handleChange('namePlatform'),
                    ['required'],
                    [t('validation.error.required')]
                )}

                <TypographyMarginTop>
                    {t('cabinet.contentPage.platform.square')}
                </TypographyMarginTop>
                {DefaultTextValidator(
                    platform.square,
                    handleChange('square'),
                    ['required', 'isNumber', 'minNumber:1'],
                    [
                        t('validation.error.required'),
                        t('validation.error.number'),
                        t('validation.error.square'),
                    ]
                )}

                <TypographyMarginTop>
                    {t('cabinet.contentPage.platform.rider')}
                </TypographyMarginTop>
                {DefaultTextValidator(
                    platform.rider,
                    handleChange('rider'),
                    ['required'],
                    [t('validation.error.required')]
                )}

                {/* IMAGES */}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.platform.images')}
                </TypographyMarginTop>
                <Box {...getRootProps({ style })}>
                    <input {...getInputProps()} />
                    <Box>{t('cabinet.contentPage.platform.imagesDesc')}</Box>
                </Box>
                <Box>{files[0] && thumbs}</Box>

                {/* COMFORT SERVICES */}
                <Comfort sx={{ fontSize: '10px' }}>
                    <Grid flexWrap='wrap'>
                        <Grid item xs='auto' md='auto'>
                            <TitleH2>
                                {t('cabinet.contentPage.platform.comfort')}
                            </TitleH2>
                            <List sx={{ p: 0, fontSize: '10px' }}>
                                {comfortChecked.map(
                                    ({ value, id, checked }) => (
                                        <ListItem
                                            sx={{ p: 0, fontSize: '10px' }}
                                            key={id}
                                        >
                                            <FormControlLabel
                                                sx={{ fontSize: '10px' }}
                                                value={value}
                                                control={
                                                    <Checkbox
                                                        sx={{
                                                            fontSize: '10px',
                                                        }}
                                                    />
                                                }
                                                label=''
                                                checked={checked}
                                                onChange={() =>
                                                    handleChangeComfort(id)
                                                }
                                            />
                                            <Typography>
                                                {t(`dbComfortPlace.item${id}`)}
                                            </Typography>
                                        </ListItem>
                                    )
                                )}
                            </List>
                        </Grid>
                        <Grid item xs='auto' md='auto'>
                            <TitleH2>
                                {t('cabinet.contentPage.platform.service')}
                            </TitleH2>
                            <List sx={{ p: 0 }}>
                                {servicesChecked.map(
                                    ({ value, id, checked }) => (
                                        <ListItem key={id} sx={{ p: 0 }}>
                                            <FormControlLabel
                                                value={value}
                                                control={<Checkbox />}
                                                label=''
                                                checked={checked}
                                                onChange={() =>
                                                    handleChangeServices(id)
                                                }
                                            />
                                            <Typography>
                                                {t(`dbServicesPlace.item${id}`)}
                                            </Typography>
                                        </ListItem>
                                    )
                                )}
                            </List>
                        </Grid>
                    </Grid>
                </Comfort>

                {/* PRICES */}
                <TitleH2>{t('cabinet.contentPage.platform.positions')}</TitleH2>
                <ContentPageListItem sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ width: '80%' }}>
                        <FlexDiv>
                            <Box
                                sx={{
                                    width: { sm: '100%', md: '50%' },
                                    mr: '10px',
                                }}
                            >
                                <Typography>
                                    {t(
                                        'cabinet.contentPage.platform.namePositions'
                                    )}
                                </Typography>
                                <Box
                                    sx={{
                                        width: { sm: '100%', md: '50%' },
                                        mb: '30px',
                                    }}
                                >
                                    {DefaultTextValidator(
                                        product.name,
                                        handleChangeProducts('name'),
                                        ['isString'],
                                        [t('validation.error.text')]
                                    )}
                                </Box>
                            </Box>

                            <Box sx={{ width: { sm: '100%', md: '50%' } }}>
                                <Typography>
                                    {t(
                                        'cabinet.contentPage.platform.pricePositions'
                                    )}
                                </Typography>
                                <Box
                                    sx={{
                                        width: { sm: '100%', md: '50%' },
                                        mb: '30px',
                                    }}
                                >
                                    {DefaultTextValidator(
                                        product.price,
                                        handleChangeProducts('price'),
                                        ['isNumber'],
                                        [t('validation.error.number')]
                                    )}
                                </Box>
                            </Box>
                        </FlexDiv>

                        <Typography>
                            {t('cabinet.contentPage.mainInfo.timetable')}
                        </Typography>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.mon')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.mon,
                                    handleChangeProducts('mon'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.tue')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.tue,
                                    handleChangeProducts('tue'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.wed')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.wed,
                                    handleChangeProducts('wed'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.thu')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.thu,
                                    handleChangeProducts('thu'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.fri')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.fri,
                                    handleChangeProducts('fri'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.sat')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.sat,
                                    handleChangeProducts('sat'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                        <FlexDiv>
                            <TypographyTimetable>
                                {t('weekDays.sun')}
                            </TypographyTimetable>
                            <Box sx={{ width: '70%' }}>
                                {DefaultTextValidator(
                                    product.sun,
                                    handleChangeProducts('sun'),
                                    ['matchRegexp:^[0-2][0-9]-[0-2][0-9]$'],
                                    [t('validation.error.hours')]
                                )}
                            </Box>
                        </FlexDiv>
                    </Box>
                    <Icon
                        sx={{
                            cursor: 'pointer',
                            fontSize: { xs: 'large', md: '30px', xl: '40px' },
                        }}
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
                {platform.products.map((item: ProductsState) => (
                    <ContentPageListItem
                        sx={{ justifyContent: 'space-between' }}
                        key={item.id}
                    >
                        <Box sx={{ width: '80%' }}>
                            <FlexDiv sx={{ alignItems: 'flex-start' }}>
                                <Box
                                    sx={{
                                        width: { sm: '100%', md: '50%' },
                                        mr: '10px',
                                    }}
                                >
                                    <Typography>
                                        {t(
                                            'cabinet.contentPage.platform.namePositions'
                                        )}
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: { sm: '100%', md: '50%' },
                                            mb: '30px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                borderBottom: '1px solid black',
                                                width: '100%',
                                            }}
                                        >
                                            {item.name}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{ width: { sm: '100%', md: '50%' } }}>
                                    <Typography>
                                        {t(
                                            'cabinet.contentPage.platform.pricePositions'
                                        )}
                                    </Typography>
                                    <Box
                                        sx={{
                                            width: { sm: '100%', md: '50%' },
                                            mb: '30px',
                                        }}
                                    >
                                        <Typography
                                            sx={{
                                                borderBottom: '1px solid black',
                                                width: '100%',
                                            }}
                                        >
                                            {item.price}
                                        </Typography>
                                    </Box>
                                </Box>
                            </FlexDiv>

                            <Typography>
                                {t('cabinet.contentPage.mainInfo.timetable')}
                            </Typography>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.mon')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.mon}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.tue')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.tue}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.wed')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.wed}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.thu')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.thu}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.fri')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.fri}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.sat')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.sat}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                            <FlexDiv>
                                <TypographyTimetable>
                                    {t('weekDays.sun')}
                                </TypographyTimetable>
                                <Box sx={{ width: '70%' }}>
                                    <Typography
                                        sx={{
                                            borderBottom: '1px solid black',
                                        }}
                                    >
                                        {item.sun}
                                    </Typography>
                                </Box>
                            </FlexDiv>
                        </Box>
                        <RemoveCircleIcon
                            sx={{
                                cursor: 'pointer',
                                fontSize: {
                                    xs: 'large',
                                    md: '30px',
                                    xl: '40px',
                                },
                            }}
                            onClick={() => {
                                platform.products = platform.products.filter(
                                    (n: ProductsState) => n !== item
                                );
                                setPlatform({ ...platform });
                            }}
                        />
                    </ContentPageListItem>
                ))}

                <ButtonPrimary
                    type='submit'
                    sx={{ p: '10px 25px !important', mb: '20px' }}
                >
                    {t('cabinet.contentPage.mainInfo.saveButton')}
                </ButtonPrimary>
            </ValidatorForm>
        </Box>
    );
};
