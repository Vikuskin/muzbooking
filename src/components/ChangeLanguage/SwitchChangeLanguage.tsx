import React from 'react';
import { useTranslation } from 'react-i18next';
import { Switch, Typography } from '@mui/material';
import { FlexDiv } from 'style/otherStyles';

export const SwitchChangeLanguage = () => {
    const { i18n } = useTranslation();
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        if (i18n.language === 'ru') {
            i18n.changeLanguage('en');
            return;
        }
        i18n.changeLanguage('ru');
    };
    return (
        <FlexDiv sx={{ justifyContent: 'center' }}>
            <Typography sx={{ mr: '-5px' }}>EN</Typography>
            <Switch
                checked={checked}
                onChange={handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            <Typography sx={{ ml: '-5px' }}>РУ</Typography>
        </FlexDiv>
    );
};
