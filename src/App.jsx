import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './redux/store';
import AppRouter from './router';
import Spinner from './components/spinner/Fallback-spinner';
import { ThemeContext } from './styles/ThemeColors';
import './components/ripple-button';

const App = () => {
  return (
    <Provider store={store()}>
      <Suspense fallback={<Spinner />}>
        <ThemeContext>
          <AppRouter />
          <ToastContainer newestOnTop />
        </ThemeContext>
      </Suspense>
    </Provider>
  );
};

export default App;
