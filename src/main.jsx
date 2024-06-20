import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '~/theme';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// MUI Dialog
import { ConfirmProvider } from 'material-ui-confirm';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssVarsProvider theme={theme}>
      <ConfirmProvider
        defaultOptions={{
          allowClose: false,
          dialogProps: {
            maxWidth: 'sm',
          },
          confirmationButtonProps: {
            color: 'secondary',
            variant: 'outlined',
          },
          cancellationButtonProps: {
            color: 'inherit',
          },
          buttonOrder: ['confirm', 'cancel'],
        }}
      >
        <CssBaseline />
        <App />
        <ToastContainer />
      </ConfirmProvider>
    </CssVarsProvider>
  </React.StrictMode>
);
