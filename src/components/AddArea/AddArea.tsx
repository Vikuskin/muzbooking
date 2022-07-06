import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import partners from 'image/AddAreaPage/partners.png';
import { dbCardBenefits } from 'components/databases/dbCardBenefits';
import { Slider } from 'components/AddArea/Slider';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { CardBenefits } from 'components/AddArea/CardBenefits';
import { Benefits } from 'components/AddArea/Benefits';
import { TitleH1, TitleH2, FlexDiv } from 'style/otherStyles';
import {
    MainContent,
    TitleH1MainContent,
    List,
    ButtonDiv,
    ButtonMainContent,
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
            <Benefits />

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
