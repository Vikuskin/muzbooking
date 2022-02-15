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
    Container,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { FlexDiv, AccountTitleH1 } from 'style/otherStyles';
import { ContentPagePlatform } from 'components/Cabinet/ContentPagePlatform';

interface State {
    sphera: string;
    name: string;
    city: string;
    address: string;
    phone: string[][];
    subway: string;
    email: string[][];
    description: string;
}

export const ContentPage = () => {
    const [value, setValue] = React.useState<State>({
        sphera: '',
        name: '',
        city: '',
        address: '',
        phone: [],
        subway: '',
        email: [],
        description: '',
    });
    const [phone, setPhone] = React.useState<Array<string>>(['']);
    const [email, setEmail] = React.useState<Array<string>>(['']);
    const [showPlatform, setShowPlatform] = React.useState<boolean>(false);

    const handleChange =
        (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setValue({ ...value, [prop]: event.target.value });
        };

    return (
        <Container maxWidth="xl" sx={{ p: '30px', textAlign: 'left' }}>
            {/* MAIN INFO */}
            <FlexDiv sx={{ alignItems: 'flex-start' }}>
                <Box sx={{ width: '40%' }}>
                    <AccountTitleH1>Основная информация</AccountTitleH1>
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
                        value={value.name}
                        onChange={handleChange('name')}
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
                        value={phone}
                        onChange={(event) => setPhone([event.target.value])}
                        variant="standard"
                        sx={{ width: '100%', mb: '30px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    onClick={() => {
                                        setValue({
                                            ...value,
                                            phone: value.phone.concat([phone]),
                                        });
                                        setPhone([]);
                                    }}
                                >
                                    <Icon
                                        fontSize="small"
                                        sx={{ cursor: 'pointer' }}
                                    >
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
                                                value.phone =
                                                    value.phone.filter(
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
                        value={email}
                        onChange={(event) => setEmail([event.target.value])}
                        variant="standard"
                        sx={{ width: '100%', mb: '30px' }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment
                                    position="end"
                                    onClick={() => {
                                        setValue({
                                            ...value,
                                            email: value.email.concat([email]),
                                        });
                                        setEmail([]);
                                    }}
                                >
                                    <Icon
                                        fontSize="small"
                                        sx={{ cursor: 'pointer' }}
                                    >
                                        add_circle
                                    </Icon>
                                </InputAdornment>
                            ),
                        }}
                    />
                    {value.email ? (
                        <List
                            sx={{
                                width: '100%',
                                maxWidth: 360,
                                bgcolor: 'background.paper',
                            }}
                            aria-label="contacts"
                        >
                            {value.email.map((item: string[], i: number) => (
                                // eslint-disable-next-line react/no-array-index-key
                                <ListItem disablePadding key={i}>
                                    <ListItemIcon>
                                        <LocalPostOfficeIcon />
                                    </ListItemIcon>
                                    <ListItemText>{item}</ListItemText>
                                    <ListItemIcon>
                                        <RemoveCircleIcon
                                            sx={{ cursor: 'pointer' }}
                                            onClick={() => {
                                                value.email =
                                                    value.email.filter(
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

                    <Typography>Описание</Typography>
                    <TextField
                        id="standard-multiline-flexible"
                        multiline
                        value={value.description}
                        onChange={handleChange('description')}
                        variant="standard"
                        sx={{ width: '100%', mb: '30px', height: '150px' }}
                    />
                </Box>
                <Box sx={{ width: '50%' }}>
                    <AccountTitleH1>Площадки</AccountTitleH1>
                    {showPlatform ? (
                        <ContentPagePlatform />
                    ) : (
                        <AddCircleIcon
                            sx={{ color: '#f89623', fontSize: '60px' }}
                            onClick={() => setShowPlatform(true)}
                        />
                    )}
                </Box>
            </FlexDiv>
        </Container>
    );
};
