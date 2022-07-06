import { styled, Typography } from '@mui/material';

export const baseStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    transition: 'border .3s ease-in-out',
    marginBottom: '30px',
};
export const activeStyle = {
    borderColor: '#2196f3',
};
export const acceptStyle = {
    borderColor: '#00e676',
};
export const rejectStyle = {
    borderColor: '#ff1744',
};
export const Comfort = styled('div')({
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
    backgroundColor: '#ebeff2',
    marginBottom: '30px',
});
export const TypographyTimetable = styled(Typography)({
    minWidth: '110px',
});
