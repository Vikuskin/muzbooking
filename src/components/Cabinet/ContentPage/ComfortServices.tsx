import React from 'react';
import {
    FormControlLabel,
    Checkbox,
    Typography,
    List,
    Grid,
    ListItem,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import { TitleH2 } from 'style/otherStyles';
import { Comfort } from 'style/cabinet/contentPage/contentPagePlatform';
import { ComfortServicesProps } from 'types/Cabinet';

export const ComfortServices: React.FC<ComfortServicesProps> = ({
    servicesChecked,
    comfortChecked,
    handleChangeServices,
    handleChangeComfort,
}) => {
    const { t } = useTranslation();

    return (
        <Comfort sx={{ fontSize: '10px' }}>
            <Grid flexWrap='wrap'>
                <Grid item xs='auto' md='auto'>
                    <TitleH2>
                        {t('cabinet.contentPage.platform.comfort')}
                    </TitleH2>
                    <List sx={{ p: 0, fontSize: '10px' }}>
                        {comfortChecked.map(({ value, id, checked }) => (
                            <ListItem sx={{ p: 0, fontSize: '10px' }} key={id}>
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
                                    onChange={() => handleChangeComfort(id)}
                                />
                                <Typography>
                                    {t(`dbComfortPlace.item${id}`)}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs='auto' md='auto'>
                    <TitleH2>
                        {t('cabinet.contentPage.platform.service')}
                    </TitleH2>
                    <List sx={{ p: 0 }}>
                        {servicesChecked.map(({ value, id, checked }) => (
                            <ListItem key={id} sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={value}
                                    control={<Checkbox />}
                                    label=''
                                    checked={checked}
                                    onChange={() => handleChangeServices(id)}
                                />
                                <Typography>
                                    {t(`dbServicesPlace.item${id}`)}
                                </Typography>
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </Comfort>
    );
};
