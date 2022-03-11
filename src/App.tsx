import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'style/globalStyles';
import { Main } from 'components/Main/Main';
import { AddAreaPage } from 'components/AddArea/AddArea';
import { SearchPage } from 'components/Search/SearchPage';
import { Registration } from 'components/Cabinet/Registration';
import { Login } from 'components/Cabinet/Login';
import { Catalog } from 'components/Search/Catalog';
import { Orders } from 'components/Cabinet/Orders';
import { ContentPage } from 'components/Cabinet/ContentPage/ContentPage';
import { Calendar } from 'components/Cabinet/Calendar';

export const App = () => (
    <BrowserRouter>
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/addArea" element={<AddAreaPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<ContentPage />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/account/orders" element={<Orders />} />
            <Route path="/account/calendar" element={<Calendar />} />
        </Routes>
    </BrowserRouter>
);
