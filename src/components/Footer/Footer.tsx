import { Box } from "@mui/system"
import vkontakte from '../../image/vkontakte.png'
import facebook from '../../image/facebook.png'
import youtube from '../../image/youtube.png'
import instagram from '../../image/instagram.png'

export const Footer: React.FC = () => {
    return (
        <Box sx={{ backgroundColor: '#ccc', borderTop: '1px dashed black' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', padding: '40px 60px'}}>
            <Box sx={{ textAlign: 'left', fontSize: '20px' }}>
                <p style={{ fontWeight: 'bold', marginBottom: '5px' }}>MUSBOOKING</p>
                <p>© 2016 — 2022</p>
                <Box sx={{ fontSize: '15px', marginTop: '10px' }}>
                    <p>г. Москва, 109147, Воронцовская улица, 35 Б к.2</p>
                    <p><a href="mailto:feedback@musbooking.com">feedback@musbooking.com</a></p>
                    <a href="tel: +7 (925) 594-77-62">+7 (925) 594-77-62</a>
                </Box>
            </Box>
            <div>
                <a href='#'><img src={vkontakte} style={{ width: '40px', marginLeft: '10px' }}/></a>
                <a href='#'><img src={instagram} style={{ width: '40px', marginLeft: '10px' }}/></a>
                <a href='#'><img src={youtube} style={{ width: '40px', marginLeft: '10px' }}/></a>
                <a href='#'><img src={facebook} style={{ width: '40px', marginLeft: '10px' }}/></a>
            </div>
        </Box>
        </Box>
    )
}