import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyles from 'style/globalStyles';
import { Main } from 'components/MainPage/Main';
import { AddAreaPage } from 'components/AddAreaPage/AddArea';
import { SearchPage } from 'components/SearchPage/SearchPage';
import { Registration } from 'components/Cabinet/Registration';
import { Login } from 'components/Cabinet/Login';
import { Account } from 'components/Cabinet/Account';
import { Catalog } from 'components/SearchPage/Catalog';

export const App = () => (
    <BrowserRouter>
        <GlobalStyles />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/addArea" element={<AddAreaPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/catalog" element={<Catalog />} />
        </Routes>
    </BrowserRouter>
);
