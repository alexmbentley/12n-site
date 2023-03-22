import Nav from '@/components/Nav';
import '@/styles/globals.scss';
import { useCallback, useEffect } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import { Teko, Poppins } from 'next/font/google';

const teko = Teko({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

export default function App({ Component, pageProps }) {
  const options = {
    background: {
      color: {
        value: 'transparent',
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: 'push',
        },
        onHover: {
          enable: true,
          mode: 'repulse',
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: '#ffffff',
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      collisions: {
        enable: false,
      },
      move: {
        directions: 'none',
        enable: true,
        outModes: {
          default: 'bounce',
        },
        random: false,
        speed: {
          min: 3,
          max: 3,
        },
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 700,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const router = useRouter();

  const getPageTitle = () => {
    switch (router.pathname) {
      case '/features':
        return 'Features';
      case '/faqs':
        return 'FAQs';
      case '/testimonials':
        return 'Testimonials';
      case '/why':
        return 'Why join us?';
      default:
        return 'Home';
    }
  };

  useEffect(() => {
    document.title = `1st2Notify - ${getPageTitle()}`;
  }, [router.pathname]);
  return (
    <div className={`${poppins.variable} ${teko.variable}`}>
      <Head>
        <title>1st2Notify</title>
        <meta
          name="description"
          content="1st2Notify, Web3 and trading specialists"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/12n-logo.png" />
      </Head>
      <Nav />
      <Component {...pageProps} />
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={options}
      />
      <Footer />
    </div>
  );
}
