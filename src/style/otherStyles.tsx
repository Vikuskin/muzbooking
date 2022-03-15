import React from 'react';
import {
    ListItem,
    InputBase,
    styled,
    TextField,
    TableCell,
    Button,
    Typography,
} from '@mui/material';
import { TextValidator } from 'react-material-ui-form-validator';

export const InputTitle = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: 'none',
        padding: '20px 8px',
        overflow: 'hidden',
        fontSize: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const InputSearch = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        color: 'rgba(0, 0, 0, 0.6)',
        padding: '16px 39px 16px 9px',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
    },
});

export const InputDefault = styled(InputBase)({
    '& .MuiInputBase-input': {
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        color: 'rgba(0, 0, 0, 0.6)',
        padding: '8px 39px 8px 9px',
        fontWeight: 400,
        fontSize: '1rem',
        lineHeight: '1.4375em',
        letterSpacing: '0.00938em',
        marginBottom: '10px',
    },
});

export const TitleH1 = styled('h1')({
    textAlign: 'center',
    fontSize: '35px',
    fontWeight: 'bold',
    margin: 'auto',
    marginTop: '100px',
    marginBottom: '50px',
    lineHeight: 1,
    '@media (max-width: 1200px)': {
        fontSize: '30px',
        margin: '100px 25px 40px 25px',
    },
    '@media (max-width: 900px)': {
        fontSize: '25px',
        margin: '100px 40px 30px 40px',
    },
    '@media (max-width: 600px)': {
        fontSize: '20px',
        margin: '50px 20px 20px 20px',
    },
});

export const CustomButton = styled('button')({
    textTransform: 'uppercase',
    padding: '15px 29px 15px 29px',
    fontWeight: 'bold',
    fontSize: '30px',
    color: 'black',
    borderRadius: '10px',
    background: '#FFDBB8',
    lineHeight: '1',
    '@media (max-width: 1200px)': {
        fontWeight: 'normal',
        fontSize: '25px',
        marginLeft: 0,
    },
    '@media (max-width: 900px)': {
        fontSize: '18px',
    },
    '@media (max-width: 600px)': {
        fontSize: '15px',
        padding: '10px 15px 10px 15px',
        maxWidth: '150px',
        marginBottom: '5px',
        textTransform: 'lowercase',
    },
});

export const FlexDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

export const TitleH2 = styled('h2')({
    fontSize: '22px',
    fontWeight: 'normal',
    padding: '5px',
    margin: 'auto',
    '@media (max-width: 900px)': {
        fontSize: '17px',
    },
    '@media (max-width: 600px)': {
        fontSize: '15px',
    },
});

export const AccountTitleH1 = styled('h1')({
    textAlign: 'left',
    margin: 0,
    marginBottom: '23px',
    backgroundColor: '#f89623',
    color: 'white',
    padding: '20px',
    fontSize: '25px',
    '@media (max-width: 1200px)': {
        fontSize: '20px',
        minHeight: '80px'
    },
    '@media (max-width: 600px)': {
        fontSize: '18px',
    },
});

export const ContentPageListItem = styled(ListItem)({
    padding: '20px',
    border: '2px solid #e2e2e2',
    borderRadius: '4px',
    backgroundColor: '#ebeff2',
    marginBottom: '30px',
});

export const input = (
    value: unknown,
    onChange:
        | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined
) => (
    <TextField
        id="standard-multiline-flexible"
        multiline
        variant="standard"
        value={value}
        onChange={onChange}
        sx={{ width: '100%' }}
    />
);

export const DefaultTextValidator = (
    value: string,
    onChange:
        | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
        | undefined,
    validators: Array<string>,
    error: Array<string>
) => (
    <TextValidator
        name={value}
        value={value}
        onChange={onChange}
        validators={validators}
        errorMessages={error}
        multiline
        variant="standard"
        sx={{ width: '100%' }}
    />
);

export const TableCellCenter = styled(TableCell)({
    textAlign: 'center',
});

export const TableCellCalendar = styled(TableCellCenter)({
    fontSize: '15px',
    padding: '10px',
});

export const styleModal = {
    position: 'absolute' as 'absolute',
    top: '10%',
    bottom: '10%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    width: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    overflow: 'scroll',
    padding: '15px',
    '@media (max-width: 700px)': {
        width: '80%',
    },
    '@media (max-width: 500px)': {
        width: '90%',
        padding: '5px'
    },
};

export const FormModal = styled('div')({
    display: 'flex',
    flexGrow: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    maxWidth: '100%',
    padding: '20px',
    border: '2px solid #e2e2e2',
    borderRadius: '4px',
    backgroundColor: '#ebeff2',
    '@media (max-width: 700px)': {
        lineHeight: '1.1',
        padding: '5px'
    },
});

export const TextFieldModal = (value: string, label: string) => (
    <TextField
        id="filled-textarea"
        label={label}
        multiline
        variant="filled"
        value={value}
    />
);

export const ButtonPrimary = styled(Button)({
    backgroundColor: '#f79521',
    color: 'white',
    textTransform: 'uppercase',
    borderRadius: '5px',
    padding: '5px 25px',
    '@media (max-width: 700px)': {
        lineHeight: '1.1',
        padding: '5px 10px'
    },
});

export const TypographyMarginTop = styled(Typography)({
    marginTop: '20px'
})