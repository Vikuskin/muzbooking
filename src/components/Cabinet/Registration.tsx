import { Box } from "@mui/system";
import { Button, Typography } from "@mui/material";
import logo from '../../image/logoRegistration.svg';
import { InputDefault } from "../../style/otherStyles";

export const Registration: React.FC = () => {
    return (
        <Box sx={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#eee',
            position: 'relative',
            display: 'grid',
            justifyItems:'center',
            alignItems:'center',
        }}>
            <Box sx={{
                backgroundColor: '#fff',
                maxWidth: { xs: '80%', sm: '55%', md: '55%', lg: '55%', xl: '55%'},
                padding: '40px 30px',
                textAlign: 'left'
            }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'left'
                }}>
                    <img style={{ width: '35px', marginRight: '10px', marginBottom: '10px' }} src={logo} alt='Logo'/>
                    <Typography sx={{ fontWeight: 'bold' }}>Регистрация</Typography>
                </Box>
                <Typography sx={{ mb: '20px', lineHeight: 1 }}>Создание учетной записи партнера</Typography>
                
                
                <Box sx={{
                    display: 'flex',
                    flexWrap: { xs: 'wrap',sm: 'wrap', md: 'wrap', lg: 'nowrap', xl: 'nowrap' },
                }}>
                    <Box sx={{
                        width: { sm: '100%', md: '100%', lg: '267px', xl: '267px'},
                        mr: '15px'
                    }}>
                        <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>Основная информация</Typography>
                        <Typography sx={{ lineHeight: 1 }}>Название компании</Typography>
                        <InputDefault/>
                        <Typography sx={{ lineHeight: 1 }}>Основная сфера деятельности</Typography>
                        <InputDefault/>
                        <Typography sx={{ lineHeight: 1 }}>Город</Typography>
                        <InputDefault/>
                        <Typography sx={{ lineHeight: 1 }}>Сайт / Публичная страница</Typography>
                        <InputDefault/>
                    </Box>
                    <Box sx={{
                        width: { sm: '100%', md: '100%', lg: '267px', xl: '267px'},
                    }}>
                        <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>Контактная информация</Typography>
                        <Typography sx={{ lineHeight: 1 }}>Ф. И. О.</Typography>
                        <InputDefault/>
                        <Typography sx={{ lineHeight: 1 }}>Email</Typography>
                        <InputDefault/>
                        <Typography sx={{ lineHeight: 1 }}>Номер телефона</Typography>
                        <InputDefault/>
                    </Box> 
                </Box>
                <Button sx={{
                        textTransform: 'uppercase',
                        padding: '5px 20px',
                        fontSize: '15px',
                        lineHeight: '36px',
                        color: '#000000',
                        borderRadius: '4px',
                        background: '#FFDBB8',
                        mt: '20px',
                        mb: '20px',
                        width: { xs: '100%', sm: '267px', md: '267px', lg: '267px', xl: '267px'},
                        maxWidth: '267px'
                }}>зарегестрироваться</Button>
            </Box>
        </Box>
    )
}