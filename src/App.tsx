import React from 'react';
import { Main } from './components/Main/Main';
import Header from './components/Header/Header';
import GlobalStyles from './style/globalStyles';
import { Footer } from './components/Footer/Footer'

function App() {
  return (
    <>
      <GlobalStyles />
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
