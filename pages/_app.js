import Head from 'next/head';
import { App, ConfigProvider, theme } from 'antd';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>RAVE</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://stijndv.com/fonts/Eudoxus-Sans.css"
      />
    </Head>
    <ConfigProvider theme={theme.darkAlgorithm}>
      <App>
        <Component {...pageProps} />
      </App>
    </ConfigProvider>
  </>
);

export default MyApp;
