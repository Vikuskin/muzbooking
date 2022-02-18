/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
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
    styled,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { CustomButton } from 'style/otherStyles';
import { useActions } from 'hooks/useActions';

const Button = styled(CustomButton)({
    fontWeight: 'normal',
    textTransform: 'lowercase',
    padding: '10px 20px',
    fontSize: '20px',
});

interface State {
    sphera: string;
    nameCompany: string;
    city: string;
    address: string;
    phone: string[][];
    subway: string;
    email: string;
    description: string;
}

export const ContentPageMainInfo: React.FC<any> = ({ data }) => {
    const [value, setValue] = React.useState<State>({
        sphera: data.sphera,
        nameCompany: data.nameCompany,
        city: data.city,
        address: data.address,
        phone: data.phone,
        subway: data.subway,
        email: data.email,
        description: data.description,
    });
    const [phoneChange, setPhoneChange] = React.useState<Array<string>>(['']);

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue({ ...value, [prop]: event.target.value });
        };

    const { fetchAccountContentUpdate } = useActions();

    const sendUpdate = async () => {
        const res = await fetchAccountContentUpdate(
            localStorage.token,
            value.city,
            value.nameCompany,
            value.phone,
            value.sphera,
            value.address,
            value.subway,
            value.description
        );
        if (res) {
            alert(res);
        }
    };
    console.log(value.phone)
    console.log(phoneChange)
    return (
        <Box>
            <Typography>Сфера</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                select
                value={value.sphera}
                onChange={handleChange('sphera')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            >
                <MenuItem value="RECORD">Студии звукозаписи</MenuItem>
                <MenuItem value="PHOTO">Фотостудии</MenuItem>
                <MenuItem value="TEACHING">Школы и педагоги</MenuItem>
                <MenuItem value="DANCE">Танцевальные залы</MenuItem>
            </TextField>
            <Typography>Название</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={value.nameCompany}
                onChange={handleChange('nameCompany')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Город</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={value.city}
                onChange={handleChange('city')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Адрес</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={value.address}
                onChange={handleChange('address')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Телефоны</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={phoneChange}
                onChange={(event) => setPhoneChange([event.target.value])}
                variant="standard"
                sx={{ width: '100%' }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            position="end"
                            onClick={() => {
                                setValue({
                                    ...value,
                                    phone: value.phone.concat([phoneChange]),
                                });
                                setPhoneChange([]);
                            }}
                        >
                            <Icon fontSize="small" sx={{ cursor: 'pointer' }}>
                                add_circle
                            </Icon>
                        </InputAdornment>
                    ),
                }}
            />
            {value.phone ? (
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                    aria-label="contacts"
                >
                    {value.phone.map((item: string[], i: number) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <ListItem disablePadding key={i}>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText>{item}</ListItemText>
                            <ListItemIcon>
                                <RemoveCircleIcon
                                    sx={{ cursor: 'pointer' }}
                                    onClick={() => {
                                        value.phone = value.phone.filter(
                                            (n: any) => n !== item
                                        );
                                        setValue({ ...value });
                                    }}
                                />
                            </ListItemIcon>
                        </ListItem>
                    ))}
                </List>
            ) : (
                // eslint-disable-next-line react/jsx-no-useless-fragment
                <></>
            )}

            <Typography>Метро</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={value.subway}
                onChange={handleChange('subway')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Email</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                disabled
                value={value.email}
                onChange={handleChange('email')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Typography>Описание</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                value={value.description}
                onChange={handleChange('description')}
                variant="standard"
                sx={{ width: '100%', mb: '30px' }}
            />
            <Button onClick={() => sendUpdate()}>Сохранить</Button>
        </Box>
    );
};
