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
    InputAdornment
} from '@mui/material';
import {
    dbServicesPlace,
    dbComfortPlace,
} from 'components/databases/dbCheckboxs';
import { TitleH2 } from 'style/otherStyles';

interface StatePlatform {
    name: string;
    square: number;
    rider: string;
}

export const ContentPagePlatform: React.FC = () => {
    const [platform, setPlatform] = React.useState<StatePlatform>({
        name: '',
        square: 0,
        rider: '',
    });

    const handleChange =
        (prop: keyof StatePlatform) =>
        (event: React.ChangeEvent<HTMLInputElement>) => {
            setPlatform({ ...platform, [prop]: event.target.value });
        };

    const [servicesChecked, setServicesChecked] = useState(
        new Array(dbServicesPlace.length).fill(false)
    );
    const [comfortChecked, setComfortChecked] = useState(
        new Array(dbComfortPlace.length).fill(false)
    );

    const handleChangeServices = (position: any) => {
        const updatedCheckedState = servicesChecked.map((item, index) =>
            index === position ? !item : item
        );
        setServicesChecked(updatedCheckedState);
    };

    const handleChangeComfort = (position: any) => {
        const updatedCheckedState = comfortChecked.map((item, index) =>
            index === position ? !item : item
        );
        setComfortChecked(updatedCheckedState);
    };

    const [products, setProducts] = React.useState({});

    return (
        <Box>
            <Typography>Название</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={platform.name}
                onChange={handleChange('name')}
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
            <Box sx={{ 
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
                backgroundColor: '#ebeff2'
            }}>
                <Grid item xs={12} md={6}>
                    <TitleH2>Удобства</TitleH2>
                    <List sx={{ p: 0 }}>
                        {dbComfortPlace.map(({ name, id }) => (
                            <ListItem sx={{ p: 0 }} key={id}>
                                <FormControlLabel
                                    value={name}
                                    control={<Checkbox />}
                                    label={name}
                                    checked={comfortChecked[id]}
                                    onChange={() => handleChangeComfort(id)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TitleH2>Сервис</TitleH2>
                    <List sx={{ p: 0 }}>
                        {dbServicesPlace.map(({ name, id }) => (
                            <ListItem key={id} sx={{ p: 0 }}>
                                <FormControlLabel
                                    value={name}
                                    control={<Checkbox />}
                                    label={name}
                                    checked={servicesChecked[id]}
                                    onChange={() => handleChangeServices(id)}
                                />
                            </ListItem>
                        ))}
                    </List>
                </Grid>
            </Box>

            {/* PRICES */}
            <Box>
                <TitleH2>Услуги</TitleH2>
            <TextField
                id="standard-multiline-flexible"
                multiline
                // value={email}
                // onChange={(event) => setEmail([event.target.value])}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            // onClick={() => {
                            //     setValue({
                            //         ...value,
                            //         email: value.email.concat([email]),
                            //     });
                            //     setEmail([]);
                            // }}
                        >
                            <Icon fontSize="small" sx={{ cursor: 'pointer' }}>
                                add_circle
                            </Icon>
                        </InputAdornment>
                    ),
                }}/>
            </Box>

        </Box>
    );
};
