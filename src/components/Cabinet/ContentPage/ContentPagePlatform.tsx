/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { useDropzone } from 'react-dropzone';
import {
    TitleH2,
    DefaultTextValidator,
    TypographyMarginTop,
    ButtonPrimary,
} from 'style/otherStyles';
import {
    baseStyle,
    activeStyle,
    acceptStyle,
    rejectStyle,
} from 'style/cabinet/contentPage/contentPagePlatform';
import { ComfortServices } from 'components/Cabinet/ContentPage/ComfortServices';
import { AddPosition } from 'components/Cabinet/ContentPage/AddPosition';
import { Positions } from 'components/Cabinet/ContentPage/Positions';
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

    const [servicesChecked, setServicesChecked] = useState(services);
    const [comfortChecked, setComfortChecked] = useState(comfort);
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

    const addProduct = (product: ProductsState) => {
        setPlatform({
            ...platform,
            products: [...platform.products, product],
        });
    };

    const removeProduct = (item: ProductsState) => {
        platform.products = platform.products.filter(
            (n: ProductsState) => n !== item
        );
        setPlatform({ ...platform });
    };

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

                {/* COMFORT AND SERVICES */}
                <ComfortServices
                    servicesChecked={servicesChecked}
                    comfortChecked={comfortChecked}
                    handleChangeServices={handleChangeServices}
                    handleChangeComfort={handleChangeComfort}
                />

                {/* POSITIONS AND PRICES */}
                <TitleH2>{t('cabinet.contentPage.platform.positions')}</TitleH2>
                <AddPosition addProduct={addProduct} />
                <Positions
                    products={platform.products}
                    removeProduct={removeProduct}
                />

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
