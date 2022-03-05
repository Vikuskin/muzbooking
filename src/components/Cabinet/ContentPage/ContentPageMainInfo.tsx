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

    const sendUpdate = () => {
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

    return (
        <Box>
            <Typography>Сфера</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                select
                value={info.sphera}
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
            {input(info.nameCompany, handleChange('nameCompany'))}
            <Typography sx={{ mt: '20px' }}>Город</Typography>
            {input(info.city, handleChange('city'))}
            <Typography sx={{ mt: '20px' }}>Адрес</Typography>
            {input(info.address, handleChange('address'))}
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
                                setInfo({
                                    ...info,
                                    phone: info.phone.concat([phoneChange]),
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
            {info.phone && (
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 360,
                        bgcolor: 'background.paper',
                    }}
                    aria-label="contacts"
                >
                    {info.phone.map((item: string[], i: number) => (
                        <ListItem disablePadding key={item[i]}>
                            <ListItemIcon>
                                <PhoneIcon />
                            </ListItemIcon>
                            <ListItemText>{item}</ListItemText>
                            <ListItemIcon>
                                <RemoveCircleIcon
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

            <Typography>Метро</Typography>
            {input(info.subway, handleChange('subway'))}
            <Typography sx={{ mt: '20px' }}>Email</Typography>
            <TextField
                id="standard-multiline-flexible"
                multiline
                disabled
                value={info.email}
                onChange={handleChange('email')}
                variant="standard"
                sx={{ width: '100%' }}
            />
            <Typography sx={{ mt: '20px' }}>Описание</Typography>
            {input(info.description, handleChange('description'))}
            <Typography sx={{ mt: '20px' }}>Время работы</Typography>
            {input(info.timetable, handleChange('timetable'))}
            <Typography sx={{ mt: '20px' }}>Средняя цена за час</Typography>
            {input(info.price, handleChange('price'))}
            <ContentPageButton onClick={() => sendUpdate()} sx={{ mt: '20px' }}>
                Сохранить
            </ContentPageButton>
        </Box>
    );
};
