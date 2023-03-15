import Nav from '@/components/Nav';
import '@/styles/globals.scss';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <Component {...pageProps} />
    </>
  );
}
