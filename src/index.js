import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { store } from 'redux/store';
import { App } from '../src/components/App/App';
console.log(store)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 
  <Provider store={store}>
     <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
        <App />
      </ThemeProvider>
</Provider>
    
  </React.StrictMode>
);
