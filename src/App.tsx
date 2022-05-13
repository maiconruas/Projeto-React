/* eslint-disable prettier/prettier */
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import React from 'react';
import { Routes } from './routes';


const App: React.FC = () => {
  return (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
  );
};

export default App;
