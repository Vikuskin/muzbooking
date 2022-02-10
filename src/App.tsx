import React from 'react';
import { Main } from './components/MainPage/Main';
import Header from './components/Header/Header';
import GlobalStyles from './style/globalStyles';
import { Footer } from './components/Footer/Footer';
import { AddAreaPage } from './components/AddAreaPage/AddArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SearchPage } from './components/SearchPage/SearchPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/addArea' element={<AddAreaPage/>}/>
        <Route path='/search' element={<SearchPage/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
