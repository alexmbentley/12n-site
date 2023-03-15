import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
// import { loadFull } from 'tsparticles';
import { useCallback, useMemo } from 'react';

const ParticlesComponent = () => {
  const options = useMemo(() => {
    return {};
  }, []);

  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    //loadFull(engine) if I ever need to use full version
  }, []);

  return <Particles init={particlesInit} options={options} />;
};

export default ParticlesComponent;
