import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import benefitsItem1 from 'image/AddAreaPage/benefits1.png.webp';
import benefitsItem2 from 'image/AddAreaPage/benefits2.png.webp';
import benefitsItem3 from 'image/AddAreaPage/benefits3.png.webp';
import benefitsMid1 from 'image/AddAreaPage/benefitsMid1.png.webp';
import benefitsMid2 from 'image/AddAreaPage/benefitsMid2.png.webp';
import benefitsMid3 from 'image/AddAreaPage/benefitsMid3.png';
import partners from 'image/AddAreaPage/partners.png';
import { dbCardBenefits } from 'components/databases/dbCardBenefits';
import { Slider } from 'components/AddArea/Slider';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { CardBenefits } from 'components/AddArea/CardBenefits';
import { TitleH1, TitleH2, FlexDiv } from 'style/otherStyles';
import {
    MainContent,
    TitleH1MainContent,
    List,
    ButtonDiv,
    ButtonMainContent,
    WrapDiv,
    BenefitsStrip,
    TitleH1BenefitsMid,
    BenefitsMid1,
} from 'style/addArea/addArea';
import { CardBeneftsDB } from 'types/Databases';
import { path } from 'enum';

export const AddAreaPage: React.FC = () => {
    const { t } = useTranslation();

    return (
        <>
            <Header />
            <MainContent>
                <TitleH1MainContent>
                    {t('addArea.main.title1')}
                </TitleH1MainContent>
                <List>
                    <li>
                        {t('addArea.main.desc1')}
                        <TitleH2 sx={{ padding: '0 0 10px 20px' }}>
                            {t('addArea.main.subtitle1')}
                        </TitleH2>
                    </li>
                    <li>
                        {t('addArea.main.desc2')}
                        <TitleH2 sx={{ padding: '0 0 10px 20px' }}>
                            {t('addArea.main.subtitle2')}
                        </TitleH2>
                    </li>
                </List>

                <ButtonDiv>
                    <Link to={path.Registration}>
                        <ButtonMainContent>
                            {t('addArea.main.button1')}
                        </ButtonMainContent>
                    </Link>
                    <Link to={path.Login}>
                        <ButtonMainContent>
                            {t('addArea.main.button2')}
                        </ButtonMainContent>
                    </Link>
                </ButtonDiv>
            </MainContent>

            {/* benefits */}
            <Box sx={{ m: '0 30px 20px 30px' }}>
                <TitleH1 sx={{ mb: '0!important' }}>
                    {t('addArea.benefits.title1')}
                </TitleH1>
                <TitleH2>{t('addArea.benefits.title2')}</TitleH2>
            </Box>
            <WrapDiv
                sx={{
                    justifyContent: 'space-evenly',
                    m: 4,
                }}
            >
                <Box>
                    <img
                        src={benefitsItem1}
                        alt='Benefits'
                        style={{ maxHeight: '200px' }}
                    />
                    <TitleH2>{t('addArea.benefits.subtitle1')}</TitleH2>
                </Box>
                <Box>
                    <img
                        src={benefitsItem2}
                        alt='Benefits'
                        style={{ maxHeight: '200px' }}
                    />
                    <TitleH2>{t('addArea.benefits.subtitle2')}</TitleH2>
                </Box>
                <Box>
                    <img
                        src={benefitsItem3}
                        alt='Benefits'
                        style={{ maxHeight: '200px' }}
                    />
                    <TitleH2>{t('addArea.benefits.subtitle3')}</TitleH2>
                </Box>
            </WrapDiv>
            <BenefitsStrip>
                <TitleH2>
                    <p style={{ fontWeight: 'bold' }}>2 200</p>
                    <p>{t('addArea.benefits.stripDesc1')}</p>
                </TitleH2>
                <TitleH2>
                    <p style={{ fontWeight: 'bold' }}>15 000</p>
                    <p>{t('addArea.benefits.stripDesc2')}</p>
                </TitleH2>
                <TitleH2>
                    <p style={{ fontWeight: 'bold' }}>75 000</p>
                    <p>{t('addArea.benefits.stripDesc3')}</p>
                </TitleH2>
                <TitleH2>
                    <p style={{ fontWeight: 'bold' }}>
                        230 {t('addArea.benefits.stripDesc4Mln')}
                    </p>
                    <p>{t('addArea.benefits.stripDesc4')}</p>
                </TitleH2>
            </BenefitsStrip>

            {/* benefits MIDDLE */}
            <WrapDiv sx={{ pb: 4 }}>
                <Typography sx={{ maxWidth: '600px' }}>
                    <img src={benefitsMid1} alt='' />
                </Typography>
                <Box
                    sx={{
                        pr: 4,
                        maxWidth: { sm: '320px', md: '600px' },
                        pl: 4,
                        margin: 'auto',
                    }}
                >
                    <TitleH1BenefitsMid
                        sx={{ margin: '0 0 20px 0 !important' }}
                    >
                        {t('addArea.benefits.middle.title1')}
                    </TitleH1BenefitsMid>
                    <TitleH2 sx={{ fontSize: '20px' }}>
                        {t('addArea.benefits.middle.subtitle1')}
                    </TitleH2>
                </Box>
            </WrapDiv>
            <WrapDiv
                sx={{
                    justifyContent: {
                        xs: 'center',
                        sm: 'right',
                    },
                    flexWrap: { xs: 'wrap-reverse', sm: 'nowrap' },
                    pb: 4,
                }}
            >
                <BenefitsMid1>
                    <TitleH1BenefitsMid
                        sx={{ margin: '0 0 20px 0 !important' }}
                    >
                        {t('addArea.benefits.middle.title2')}
                    </TitleH1BenefitsMid>
                    <TitleH2 sx={{ fontSize: '20px' }}>
                        {t('addArea.benefits.middle.subtitle2.1')}
                        <br />
                        {t('addArea.benefits.middle.subtitle2.2')}
                        <br />
                        {t('addArea.benefits.middle.subtitle2.3')}
                        <br />
                        {t('addArea.benefits.middle.subtitle2.4')}
                    </TitleH2>
                </BenefitsMid1>
                <Typography sx={{ maxWidth: '600px' }}>
                    <img src={benefitsMid2} alt='' />
                </Typography>
            </WrapDiv>
            <WrapDiv
                sx={{
                    justifyContent: 'center',
                    pr: 4,
                    pl: 4,
                }}
            >
                <Typography sx={{ maxWidth: '600px' }}>
                    <img
                        style={{ maxHeight: '350px' }}
                        src={benefitsMid3}
                        alt=''
                    />
                </Typography>
                <Box
                    sx={{
                        maxWidth: { sm: '270px', md: '500px' },
                        margin: 'auto',
                    }}
                >
                    <TitleH1BenefitsMid
                        sx={{ margin: '0 0 20px 0 !important' }}
                    >
                        {t('addArea.benefits.middle.title3')}
                    </TitleH1BenefitsMid>
                    <TitleH2 sx={{ fontSize: '20px' }}>
                        {t('addArea.benefits.middle.subtitle3.1')}
                        <br />
                        {t('addArea.benefits.middle.subtitle3.2')}
                        <br />
                        {t('addArea.benefits.middle.subtitle3.3')}
                        <br />
                        {t('addArea.benefits.middle.subtitle3.4')}
                        <br />
                        {t('addArea.benefits.middle.subtitle3.5')}
                    </TitleH2>
                </Box>
            </WrapDiv>

            {/* benefits cards */}
            <TitleH1>{t('addArea.benefits.cards.title')}</TitleH1>
            <FlexDiv
                sx={{
                    flexWrap: 'wrap',
                    ml: { xs: 2, sm: 5, md: 8, lg: 20 },
                    mr: { xs: 2, sm: 5, md: 8, lg: 20 },
                }}
            >
                {dbCardBenefits.map((card: CardBeneftsDB, i: number) => (
                    <CardBenefits
                        key={card.id}
                        img={card.img}
                        description={t(`dbCardBenefits.item${i}`)}
                    />
                ))}
            </FlexDiv>

            {/* partners */}
            <TitleH1>{t('addArea.benefits.partners.title')}</TitleH1>
            <img src={partners} style={{ width: '100%' }} alt='Partners' />

            {/* slider */}
            <TitleH1>{t('addArea.benefits.reviews.title')}</TitleH1>
            <Slider />
            <Footer />
        </>
    );
};
