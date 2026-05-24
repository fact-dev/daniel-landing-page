import { css } from '@linaria/core';
import './App.css';
import { App as AntdApp, ConfigProvider } from 'antd';
import Presentation from './components/presentation';
import { AntDTheme } from './lib/config/theme';

const styles = {
  app: css`
    height: 100%;
    padding: 2rem 2rem 8rem;
    background: linear-gradient(to bottom, #f4f4f6, #b5d2c8);
  `,
};

const App = () => {
  return (
    <AntdApp>
      <head>
        <title>Inglês com o TioDan</title>
        <meta
          name="description"
          content="Aprenda inglês de forma rápida e eficaz com nosso curso online. Aulas interativas, professores experientes e flexibilidade para estudar no seu ritmo. Inscreva-se agora!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <ConfigProvider theme={AntDTheme}>
        <div className={styles.app}>
          <Presentation />
        </div>
      </ConfigProvider>
    </AntdApp>
  );
};

export default App;
