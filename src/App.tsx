import { Main } from './components/MainPage/Main';
import GlobalStyles from './style/globalStyles';
import { AddAreaPage } from './components/AddAreaPage/AddArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPage } from './components/SearchPage/SearchPage';
import { Registration } from './components/Cabinet/Registration';
import { Login } from './components/Cabinet/Login';
import { Account } from './components/Cabinet/Account';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/addArea' element={<AddAreaPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
