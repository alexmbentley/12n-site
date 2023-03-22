import Head from 'next/head';
import Main from '@/components/Main.jsx';
import Script from 'next/script';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = '1st2Notify - Home';
  }, []);

  return (
    <div>
      <Head>
        <title>1st2Notify</title>
        <meta
          name="description"
          content="1st2Notify, Web3 and trading specialists"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/12n-logo.png" />
      </Head>
      <Main />
    </div>
  );
}
