import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Box,
    MenuItem,
    TextField,
    Typography,
    Icon,
    InputAdornment,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
} from '@mui/material';
import { Phone, RemoveCircle } from '@mui/icons-material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import {
    input,
    DefaultTextValidator,
    ButtonPrimary,
    TypographyMarginTop,
} from 'style/otherStyles';
import { useActions } from 'hooks/useActions';
import { ContentPageMainInfoProps } from 'types/Cabinet';

export const ContentPageMainInfo: React.FC<ContentPageMainInfoProps> = ({
    sphera,
    nameCompany,
    city,
    address,
    phone,
    subway,
    email,
    description,
    timetable,
    price,
}) => {
    const [info, setInfo] = React.useState<ContentPageMainInfoProps>({
        sphera,
        nameCompany,
        city,
        address,
        phone,
        subway,
        email,
        description,
        timetable,
        price,
    });
    const [phoneChange, setPhoneChange] = React.useState<Array<string>>(['']);

    const handleChange =
        (prop: keyof ContentPageMainInfoProps) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setInfo({ ...info, [prop]: event.target.value });
        };

    const { fetchAccountContentUpdate } = useActions();

    const handleSubmit = () => {
        fetchAccountContentUpdate(
            localStorage.token,
            info.city,
            info.nameCompany,
            info.phone,
            info.sphera,
            info.address,
            info.subway,
            info.description,
            info.timetable,
            info.price
        );
        window.location.reload();
    };
    const { t } = useTranslation();

    return (
        <Box>
            <ValidatorForm onSubmit={handleSubmit}>
                <Typography>{t('sphera.sphera')}</Typography>
                <TextValidator
                    id='standard-multiline-flexible'
                    multiline
                    select
                    name='sphera'
                    validators={['required']}
                    errorMessages={[t('validation.error.required')]}
                    value={info.sphera}
                    onChange={handleChange('sphera')}
                    variant='standard'
                    sx={{ width: '100%', mb: '20px' }}
                >
                    <MenuItem value='RECORD'>{t('sphera.record')}</MenuItem>
                    <MenuItem value='PHOTO'>{t('sphera.photo')}</MenuItem>
                    <MenuItem value='TEACHING'>{t('sphera.teaching')}</MenuItem>
                    <MenuItem value='DANCE'>{t('sphera.dance')}</MenuItem>
                </TextValidator>
                <Typography>
                    {t('cabinet.contentPage.mainInfo.nameCompany')}
                </Typography>
                {DefaultTextValidator(
                    info.nameCompany,
                    handleChange('nameCompany'),
                    ['required'],
                    [t('validation.error.required')]
                )}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.city')}
                </TypographyMarginTop>
                {DefaultTextValidator(
                    info.city,
                    handleChange('city'),
                    ['required'],
                    [t('validation.error.required')]
                )}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.address')}
                </TypographyMarginTop>
                {DefaultTextValidator(
                    info.address,
                    handleChange('address'),
                    ['required'],
                    [t('validation.error.required')]
                )}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.phone')}
                </TypographyMarginTop>
                <TextField
                    id='standard-multiline-flexible'
                    multiline
                    value={phoneChange}
                    onChange={(event) =>
                        setPhoneChange([
                            event.target.value
                                .replace(/\D/g, '')
                                .replace(/^[0-9]/, '+7'),
                        ])
                    }
                    variant='standard'
                    sx={{ width: '100%' }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment
                                position='end'
                                onClick={() => {
                                    if (phone[0].length !== 12) {
                                        alert(
                                            t(
                                                'cabinet.contentPage.mainInfo.alert.phone'
                                            )
                                        );
                                        return;
                                    }
                                    setInfo({
                                        ...info,
                                        phone: info.phone.concat([phoneChange]),
                                    });
                                    setPhoneChange([]);
                                }}
                            >
                                <Icon
                                    fontSize='small'
                                    sx={{ cursor: 'pointer' }}
                                >
                                    add_circle
                                </Icon>
                            </InputAdornment>
                        ),
                    }}
                />
                {info.phone && (
                    <List
                        sx={{
                            width: '100%',
                            maxWidth: 360,
                            bgcolor: 'background.paper',
                        }}
                        aria-label='contacts'
                    >
                        {info.phone.map((item: string[], i: number) => (
                            <ListItem disablePadding key={item[i]}>
                                <ListItemIcon>
                                    <Phone />
                                </ListItemIcon>
                                <ListItemText>{item}</ListItemText>
                                <ListItemIcon>
                                    <RemoveCircle
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            info.phone = info.phone.filter(
                                                (n: string[]) => n !== item
                                            );
                                            setInfo({ ...info });
                                        }}
                                    />
                                </ListItemIcon>
                            </ListItem>
                        ))}
                    </List>
                )}

                <Typography>
                    {t('cabinet.contentPage.mainInfo.subway')}
                </Typography>
                {DefaultTextValidator(
                    info.subway,
                    handleChange('subway'),
                    ['required'],
                    [t('validation.error.required')]
                )}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.email')}
                </TypographyMarginTop>
                <TextField
                    id='standard-multiline-flexible'
                    multiline
                    disabled
                    value={info.email}
                    onChange={handleChange('email')}
                    variant='standard'
                    sx={{ width: '100%' }}
                />
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.desc')}
                </TypographyMarginTop>
                {input(info.description, handleChange('description'))}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.timetable')}
                </TypographyMarginTop>
                {input(info.timetable, handleChange('timetable'))}
                <TypographyMarginTop>
                    {t('cabinet.contentPage.mainInfo.price')}
                </TypographyMarginTop>
                {input(info.price, handleChange('price'))}
                <ButtonPrimary
                    type='submit'
                    sx={{ mt: '20px', p: '10px 25px !important' }}
                >
                    {t('cabinet.contentPage.mainInfo.saveButton')}
                </ButtonPrimary>
            </ValidatorForm>
        </Box>
    );
};
