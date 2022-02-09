import React from 'react';
import { Main } from './components/MainPage/Main';
import Header from './components/Header/Header';
import GlobalStyles from './style/globalStyles';
import { Footer } from './components/Footer/Footer';
import { AddArea } from './components/AddAreaPage/AddArea';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/addArea' element={<AddArea/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
