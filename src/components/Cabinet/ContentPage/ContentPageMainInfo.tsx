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
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { ContentPageButton, input } from 'style/otherStyles';
import { useActions } from 'hooks/useActions';

interface State {
    sphera: string;
    nameCompany: string;
    city: string;
    address: string;
    phone: string[][];
    subway: string;
    email: string;
    description: string;
    timetable: string;
    price: number;
}

export const ContentPageMainInfo: React.FC<State> = ({
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
    const [value, setValue] = React.useState<State>({
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
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue({ ...value, [prop]: event.target.value });
        };

    const { fetchAccountContentUpdate } = useActions();

    const sendUpdate = () => {
        fetchAccountContentUpdate(
            localStorage.token,
            value.city,
            value.nameCompany,
            value.phone,
            value.sphera,
            value.address,
            value.subway,
            value.description,
            value.timetable,
            value.price
        );
        window.location.reload();
    };

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
            {input(value.nameCompany, handleChange('nameCompany'))}
            <Typography sx={{ mt: '20px' }}>Город</Typography>
            {input(value.city, handleChange('city'))}
            <Typography sx={{ mt: '20px' }}>Адрес</Typography>
            {input(value.address, handleChange('address'))}
            <Typography sx={{ mt: '20px' }}>Телефоны</Typography>
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
            {value.phone && (
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
            )}

            <Typography>Метро</Typography>
            {input(value.subway, handleChange('subway'))}
            <Typography sx={{ mt: '20px' }}>Email</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                disabled
                value={value.email}
                onChange={handleChange('email')}
                variant="standard"
                sx={{ width: '100%' }}
            />
            <Typography sx={{ mt: '20px' }}>Описание</Typography>
            {input(value.description, handleChange('description'))}
            <Typography sx={{ mt: '20px' }}>Время работы</Typography>
            {input(value.timetable, handleChange('timetable'))}
            <Typography sx={{ mt: '20px' }}>Средняя цена за час</Typography>
            {input(value.price, handleChange('price'))}
            <ContentPageButton onClick={() => sendUpdate()} sx={{ mt: '20px' }}>
                Сохранить
            </ContentPageButton>
        </Box>
    );
};
