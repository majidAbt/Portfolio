import Particles from "react-tsparticles";
import AnimatedText from "../components/AnimatedText";
import { loadFull } from "tsparticles";

import styles from "./About.module.css";
function Landing() {
  const name = "Hi,\u00A0I\u00A0am\u00A0Majid";
  const desc =
    "I’m a Front-End Developer located in Poland. I have a serious passion for UI effects, animations and creating intuitive, dynamic userexperiences. Well-organised person, problem solver, independentemployee with high attention to detail. Fan of MMA, outdooractivities, TV series and English literature. A family person and father of two fractious boys, Interested in the entire fronten dspectrum and working on ambitious projects with positive people.";
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };
  return (
    <div className="h-full text-primaryText grid xl:grid-cols-3 gap-2">
      <div className="flex-col self-center justify-center relative col-span-2">
        <AnimatedText text={name} />
        <p className={`text-textPrimary ${styles.paragraph}`}>
          {desc}
          <p className="mt-2 text-primary cursor-pointer">
            For more information click here!
          </p>
        </p>
      </div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {},
          fpsLimit: 100,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
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
              value: "#ffffff",
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 2,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                area: 800,

              },

              value: 20,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default Landing;
