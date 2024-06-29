import { createRoot } from 'react-dom/client';
import App from '~/App.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '~/theme';
import '/index.scss';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
// MUI Dialog
import { ConfirmProvider } from 'material-ui-confirm';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/configureStore';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <BrowserRouter>
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
    </BrowserRouter>
  </Provider>
);
