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
import { Calendar } from 'components/Cabinet/Calendar/Calendar';
import { path } from 'enum';

export const App = () => (
    <BrowserRouter>
        <GlobalStyles />
        <Routes>
            <Route path='/' element={<Main />} />
            <Route path={path.AddArea} element={<AddAreaPage />} />
            <Route path={path.Search} element={<SearchPage />} />
            <Route path={path.Content} element={<ContentPage />} />
            <Route path={path.Registration} element={<Registration />} />
            <Route path={path.Login} element={<Login />} />
            <Route path={path.Catalog} element={<Catalog />} />
            <Route path={path.Orders} element={<Orders />} />
            <Route path={path.Calendar} element={<Calendar />} />
        </Routes>
    </BrowserRouter>
);
