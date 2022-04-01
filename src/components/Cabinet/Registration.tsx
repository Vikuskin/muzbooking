import React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Typography,
    Box,
    TextField,
    MenuItem,
    List,
    ListItemIcon,
    Icon,
    InputAdornment,
    ListItem,
    ListItemText,
} from '@mui/material';
import { Phone, RemoveCircle } from '@mui/icons-material';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import logo from 'image/logoRegistration.svg';
import { FlexDiv, DefaultTextValidator, OverlayForm } from 'style/otherStyles';
import {
    RegistrationWindow,
    FormColumn,
    Button,
} from 'style/cabinet/registration';
import { useActions } from 'hooks/useActions';
import { RegistrationState } from 'types/Cabinet';

export const Registration: React.FC = () => {
    const [registration, setRegistration] = React.useState<RegistrationState>({
        email: '',
        password: '',
        phone: [],
        nameCompany: '',
        city: '',
        sphera: '',
        address: '',
        subway: '',
    });
    const [phone, setPhone] = React.useState<Array<string>>([]);
    const handleChange =
        (prop: keyof RegistrationState) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setRegistration({ ...registration, [prop]: event.target.value });
        };

    const { fetchRegistration } = useActions();
    const { t } = useTranslation();

    const handleSubmit = async () => {
        if (!registration.phone[0]) {
            alert('Добавьте номер телефона');
            return;
        }
        const res = await fetchRegistration(
            registration.city,
            registration.email,
            registration.nameCompany,
            registration.password,
            registration.phone,
            registration.sphera,
            registration.address,
            registration.subway
        );
        if (res) {
            alert(res);
        } else {
            alert(t('cabinet.registration.alert'));
        }
    };
    return (
        <OverlayForm>
            <RegistrationWindow>
                <ValidatorForm onSubmit={handleSubmit}>
                    <FlexDiv sx={{ justifyContent: 'flex-start' }}>
                        <img
                            style={{
                                width: '35px',
                                marginRight: '10px',
                                marginBottom: '10px',
                            }}
                            src={logo}
                            alt='Logo'
                        />
                        <Typography sx={{ fontWeight: 'bold' }}>
                            {t('cabinet.registration.title')}
                        </Typography>
                    </FlexDiv>
                    <Typography sx={{ mb: '20px', lineHeight: 1 }}>
                        {t('cabinet.registration.desc')}
                    </Typography>

                    <Box
                        sx={{
                            display: 'flex',
                            flexWrap: {
                                xs: 'wrap',
                                lg: 'nowrap',
                            },
                        }}
                    >
                        <FormColumn sx={{ mr: { xs: '0', sm: '15px' } }}>
                            <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>
                                {t('cabinet.registration.contactInfo')}
                            </Typography>

                            <Typography>
                                {t('cabinet.contentPage.mainInfo.nameCompany')}
                            </Typography>
                            {DefaultTextValidator(
                                registration.nameCompany,
                                handleChange('nameCompany'),
                                ['required'],
                                [t('validation.error.required')]
                            )}

                            <Typography sx={{ mt: '20px' }}>
                                {t('cabinet.contentPage.mainInfo.city')}
                            </Typography>
                            {DefaultTextValidator(
                                registration.city,
                                handleChange('city'),
                                ['required'],
                                [t('validation.error.required')]
                            )}

                            <Typography sx={{ mt: '20px' }}>
                                {t('cabinet.contentPage.mainInfo.address')}
                            </Typography>
                            {DefaultTextValidator(
                                registration.address,
                                handleChange('address'),
                                ['required'],
                                [t('validation.error.required')]
                            )}

                            <Typography sx={{ mt: '20px' }}>
                                {t('cabinet.login.password')}
                            </Typography>
                            {DefaultTextValidator(
                                registration.password,
                                handleChange('password'),
                                [
                                    'required',
                                    'minStringLength:6',
                                    'matchRegexp:^.*(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*?]).*$',
                                ],
                                [
                                    t('validation.error.required'),
                                    t('validation.error.smallPassword'),
                                    t('validation.error.simplePassword'),
                                ]
                            )}

                            <Typography sx={{ mt: '20px' }}>
                                {t('cabinet.contentPage.mainInfo.phone')}
                            </Typography>
                            <TextField
                                type='number'
                                id='standard-multiline-flexible'
                                multiline
                                value={phone}
                                onChange={(event) =>
                                    setPhone([
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
                                                setRegistration({
                                                    ...registration,
                                                    phone: registration.phone.concat(
                                                        [phone]
                                                    ),
                                                });
                                                setPhone([]);
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
                            {registration.phone && (
                                <List
                                    sx={{
                                        width: '100%',
                                        maxWidth: 360,
                                        bgcolor: 'background.paper',
                                    }}
                                    aria-label='contacts'
                                >
                                    {registration.phone.map(
                                        (item: string[], i: number) => (
                                            <ListItem
                                                disablePadding
                                                key={item[i]}
                                            >
                                                <ListItemIcon>
                                                    <Phone />
                                                </ListItemIcon>
                                                <ListItemText>
                                                    {item}
                                                </ListItemText>
                                                <ListItemIcon>
                                                    <RemoveCircle
                                                        sx={{
                                                            cursor: 'pointer',
                                                        }}
                                                        onClick={() => {
                                                            registration.phone =
                                                                registration.phone.filter(
                                                                    (
                                                                        n: string[]
                                                                    ) =>
                                                                        n !==
                                                                        item
                                                                );
                                                            setRegistration({
                                                                ...registration,
                                                            });
                                                        }}
                                                    />
                                                </ListItemIcon>
                                            </ListItem>
                                        )
                                    )}
                                </List>
                            )}
                        </FormColumn>
                        <FormColumn>
                            <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>
                                {t('cabinet.contentPage.title1')}
                            </Typography>
                            <Typography>{t('sphera.sphera')}</Typography>
                            <TextValidator
                                name='sphera'
                                id='standard-multiline-flexible'
                                multiline
                                select
                                value={registration.sphera}
                                onChange={handleChange('sphera')}
                                variant='standard'
                                validators={['required']}
                                errorMessages={[t('validation.error.required')]}
                                sx={{ width: '100%' }}
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
                            </TextValidator>

                            <Typography sx={{ mt: '20px' }}>
                                {t('cabinet.contentPage.mainInfo.subway')}
                            </Typography>
                            {DefaultTextValidator(
                                registration.subway,
                                handleChange('subway'),
                                ['required'],
                                [t('validation.error.required')]
                            )}

                            <Typography sx={{ mt: '20px' }}>Email</Typography>
                            {DefaultTextValidator(
                                registration.email,
                                handleChange('email'),
                                ['required', 'isEmail'],
                                [
                                    t('validation.error.required'),
                                    t('validation.error.email'),
                                ]
                            )}
                        </FormColumn>
                    </Box>
                    <Button type='submit'>
                        {t('cabinet.registration.button')}
                    </Button>
                </ValidatorForm>
            </RegistrationWindow>
        </OverlayForm>
    );
};
