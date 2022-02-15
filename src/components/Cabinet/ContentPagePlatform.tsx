import React, { useState } from 'react';
import {
    FormGroup,
    FormControlLabel,
    Checkbox,
    Box,
    TextField,
    Typography,
} from '@mui/material';

interface StatePlatform {
    name: string;
    square: number;
    rider: string;
    features: any;
}

export const ContentPagePlatform: React.FC = () => {
    const [platform, setPlatform] = React.useState<StatePlatform>({
        name: '',
        square: 0,
        rider: '',
        features: {
            teaCoffee: false,
            coffeeMachine: false,
            waterCooler: false,
            snackMachine: false,
            cafe: false,

            smokingArea: false,
            nearSubway: false,
            freeParking: false,
            conditioner: false,
            toilet: false,
            lounge: false,
            wifi: false,
        },
    });
    const [checked, setChecked] = useState(true);
    const handleChange =
        (prop: keyof StatePlatform) =>
        (
            event:
                | React.ChangeEvent<HTMLInputElement>
                | React.ChangeEvent<HTMLInputElement>
        ) => {
            if (prop === 'name' || prop === 'square' || prop === 'rider') {
                setPlatform({ ...platform, [prop]: event.target.value });
            }
        };
    function changeCheckbox() {
        setChecked(!checked);
    }
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
            {/* features */}
            <Box>
                <FormGroup>
                    <Typography>Сервис</Typography>
                    <FormControlLabel
                        value={platform.features.teaCoffee}
                        control={<Checkbox />}
                        onChange={() => changeCheckbox()}
                        label="Label"
                    />
                </FormGroup>
            </Box>
            {/* service: {
                teaCoffee: false,
                coffeeMachine: false,
                waterCooler: false,
                snackMachine: false,
                cafe: false
            },
            comfort: {
                smokingArea: false,
                nearSubway: false,
                freeParking: false,
                conditioner: false,
                toilet: false,
                lounge: false,
                wifi: false
            } */}
        </Box>
    );
};
