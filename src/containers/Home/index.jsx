import React from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';
import StyledApp from './index.style';

function App() {
  const { t } = useTranslation();
  return (
    <StyledApp>
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('learnReact')}
        </a>
      </header>
    </StyledApp>
  );
}

export default App;
