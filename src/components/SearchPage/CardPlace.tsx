import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import addressIcon from '../../image/SearchPage/address.svg';
import subwayIcon from '../../image/SearchPage/subway.svg';
import timetableIcon from '../../image/SearchPage/timetable.svg';

interface CardProps {
    id: number,
    img: string[],
    title: string,
    address: string,
    subway: string,
    timetable: string,
    price: number
}

export const CardPlace: React.FC<CardProps> = props => {
    return (
        <Card sx={{ 
            width: '100%',
            fontSize: '20px', 
            margin: 'auto',
            mb: '10px',
            borderRadius: '10px',
            padding: '20px',
            textAlign: 'left',
            verticalAlign: 'baseline',
            boxShadow: '0px 0px 10px rgba(0,0,0,.25)'
        }}>
            <Box>
                <Typography sx={{ fontWeight: 'bold' }}>{props.title}</Typography>
                <Typography sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    mb: '10px'
                }}>{props.img.map((img, i) => <img style={{ width: '32%' }} src={img} key={i}/>)}</Typography>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '10px'
                }}> 
                    <img src={addressIcon}/>
                    <Typography sx={{ ml: '5px' }}>{props.address}</Typography> 
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '10px'
                }}> 
                   <img src={subwayIcon}/>
                   <Typography sx={{ ml: '5px' }}>{props.subway}</Typography>
                </Box>

                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mb: '10px'
                }}> 
                   <img src={timetableIcon}/>
                   <Typography sx={{ ml: '5px' }}>{props.timetable}</Typography>
                </Box>
                
                <Typography sx={{ textAlign: 'right', fontWeight: 'bold', fontSize: '25px' }}>{props.price} ₽/ч</Typography>
            </Box>
        </Card>
    )
}