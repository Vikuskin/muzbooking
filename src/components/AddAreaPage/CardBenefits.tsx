import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardProps {
    img: string,
    description: string
}

export const CardBenefits: React.FC<CardProps> = props => {
    return (
        <Card sx={{ 
            width: '275px',
            height: { xs: '250px', md: '270px' },
            fontSize: '20px', 
            backgroundColor: '#FFEAC2',
            margin: 'auto',
            mb: '10px',
            borderRadius: '25px',
            padding: '28px 22px 20px',
            textAlign: 'center',
            verticalAlign: 'baseline'
        }}>
            <CardContent sx={{
                p: 0,
            }}>
                <img src={props.img} style={{ maxWidth: '200px', maxHeight: '80px' }}/>
                <Typography variant="h5" component="div" sx={{ 
                    marginTop: '25px',
                    fontSize: { xs: '15px', sm: '15px', md: '18px', lg: '18px' },
                    lineHeight: '22px',
                }}>
                {props.description}
                </Typography>
            </CardContent>
        </Card>
    )
}