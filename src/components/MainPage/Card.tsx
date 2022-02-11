import { Box, Button, Typography } from '@mui/material';
import * as React from 'react';
import { CustomButton } from '../../style/otherStyles';
import { Link } from 'react-router-dom'
import { useActions } from '../../hooks/useActions'
import { useTypedSelector } from '../../hooks/useTypedSelector'

interface CardProps {
    title: string,
    img: string,
    icon: string,
    description: string,
    id: string
}

export const Cards: React.FC<CardProps> = props => {

    const [style, setStyle] = React.useState<string>('front-card');
    const services: string = useTypedSelector(state => state.services.services);
    console.log(services);
    const {chooseServices} = useActions()

    const flipCard = () => {
        if (style === 'front-card') {
            setStyle('back-card')
        } else {
            setStyle('front-card')
        }
    }

    return (
        <Box onClick={() => flipCard()} sx={{
            margin: '10px',
            transform: 'rotateY(360deg)',
            transition: 'all ease-in-out .5s',
            boxShadow: '0 4px 30px rgba(0,0,0,.25)',
            cursor: 'pointer',
            width: { xs: '200px', sm: 300, md: 350 }, 
            height: { xs: '220px', sm: 320, md: 380 },
            borderRadius: '60px'
        }}>
            {style === 'front-card' ? 
            <Box sx={{
                backgroundImage: `url(${props.img})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                display: 'flex',
                alignItems: 'end',
                width: '100%',
                height: '100%',
                transform: 'rotateY(360deg)',
                overflow:'hidden',
                borderRadius: '60px'
            }}>
                <Box sx={{
                    textAlign: 'center',
                    color: 'black',
                    backgroundColor: 'white',
                    opacity: 0.6,
                    padding: '20px 5px',
                    margin: 0,
                    width: '100%',
                    minHeight: {xs: '50px', md: '100px'},
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
               <Box sx={{ fontSize: { xs: '15px', sm: '20px', md: '25px' }, margin: { xs: '0 10px' } }}>
                  {props.title.toUpperCase()} 
               </Box>
                </Box>
           </Box> :
           <Box sx={{ 
                backgroundColor: '#fff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                transform: 'rotateY(360deg)',
                padding: '10px',
                width: '100%',
                height: '100%',
                borderRadius: '60px'
            }}>
                <img src={props.icon}/>
                <Typography>{props.description}</Typography>
                <Link to='/search'>
                <CustomButton style={{ maxWidth: '250px', marginLeft: 0, fontWeight: 'normal', fontSize: '20px', lineHeight: '1', padding: '10px 20px' }}
                onClick={() => chooseServices(props.id)}    
                >
                    Найти площадку
                </CustomButton>
                </Link>
            </Box>
        }
        </Box>
  );
}