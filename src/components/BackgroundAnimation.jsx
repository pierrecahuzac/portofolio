import { useEffect, useMemo, useState } from "react";
import { initParticlesEngine, Particles } from "@tsparticles/react";
import "../assets/styles/BackgroundAnimation.scss";
import { loadSlim, } from "@tsparticles/slim";
const BackgroundAnimation = () => {
  const [init, setInit] = useState(false);
  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#223a55",
        },
      },
      fpsLimit: 120,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance:100,
          enable: true,
          opacity: .1,
          width: 4.2,
        },
        collisions: {
          enable: true,
        },
        move: {
          directions: "true",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: true,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      // await loadAll(engine);
      // await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles
      className="bg"
      id="tsparticles"
      init={init}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default BackgroundAnimation;
