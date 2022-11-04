import React from 'react';
import { createGlobalStyle } from 'styled-components';
import ToDoCotainer from './components/ToDoContainer';

const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function MyApp() {
  return (
   <>
    <GlobalStyle />
    <ToDoCotainer />
   </>
  );
}

export default MyApp;
