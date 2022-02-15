import React from 'react';
import { Typography, Box, styled } from '@mui/material';
import logo from 'image/logoRegistration.svg';
import { InputDefault, FlexDiv } from 'style/otherStyles';

const Background = styled('div')({
    width: '100%',
    minHeight: '100vh',
    backgroundColor: '#eee',
    position: 'relative',
    display: 'grid',
    justifyItems: 'center',
    alignItems: 'center',
});

const RegistrationWindow = styled('div')({
    backgroundColor: '#fff',
    maxWidth: '55%',
    padding: '40px 30px',
    textAlign: 'left',
    '@media (max-width: 599px)': {
        maxWidth: '80%',
    },
});

const FormColumn = styled('div')({
    width: '267px',
    '@media (max-width: 599px)': {
        width: '100%',
    },
});

const FormLabel = styled('p')({
    lineHeight: 1,
    fontSize: '1rem',
});

const Button = styled('button')({
    textTransform: 'uppercase',
    padding: '5px',
    fontSize: '15px',
    lineHeight: '36px',
    color: '#000000',
    borderRadius: '4px',
    background: '#FFDBB8',
    marginTop: '20px',
    marginBottom: '20px',
    width: '267px',
    '@media (max-width: 899px)': {
        width: '100%',
        maxWidth: '267px',
    },
});

export const Registration: React.FC = () => (
    <Background>
        <RegistrationWindow>
            <FlexDiv sx={{ justifyContent: 'flex-start' }}>
                <img
                    style={{
                        width: '35px',
                        marginRight: '10px',
                        marginBottom: '10px',
                    }}
                    src={logo}
                    alt="Logo"
                />
                <Typography sx={{ fontWeight: 'bold' }}>Регистрация</Typography>
            </FlexDiv>
            <Typography sx={{ mb: '20px', lineHeight: 1 }}>
                Создание учетной записи партнера
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
                        Основная информация
                    </Typography>
                    <FormLabel>Название компании</FormLabel>
                    <InputDefault />
                    <FormLabel>Основная сфера деятельности</FormLabel>
                    <InputDefault />
                    <FormLabel>Город</FormLabel>
                    <InputDefault />
                    <FormLabel>Сайт / Публичная страница</FormLabel>
                    <InputDefault />
                </FormColumn>
                <FormColumn>
                    <Typography sx={{ fontWeight: 'bold', mb: '10px' }}>
                        Контактная информация
                    </Typography>
                    <FormLabel>Ф. И. О.</FormLabel>
                    <InputDefault />
                    <FormLabel>Email</FormLabel>
                    <InputDefault />
                    <FormLabel>Номер телефона</FormLabel>
                    <InputDefault />
                </FormColumn>
            </Box>
            <Button>зарегестрироваться</Button>
        </RegistrationWindow>
    </Background>
);
