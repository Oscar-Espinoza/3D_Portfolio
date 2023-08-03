import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { isDesktop } from "react-device-detect";

const Stars = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className=" -z-10">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: {
            enable: true,
            zIndex: 1,
          },
          particles: {
            number: {
              value: isDesktop ? 30 : 10,
              density: {
                enable: false,
                value_area: isDesktop ? 1200 : 400,
              },
            },
            color: {
              value: "#ffffffcc",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 1,
              random: false,
              color: "#ffffffcc",
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: isDesktop ? 4 : 2,
              random: true,
              size_min: 1,
            },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              out_mode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200,
              },
            },
          },
          interactivity: {
            events: {
              onhover: {
                enable: false,
                mode: ["grab"],
              },
              onclick: {
                enable: false,
                mode: "bubble",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
          background: {
            color: "rgba(45, 40, 73)",
            opacity: 0.2,
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
          },
        }}
      />
    </div>
  );
};
export default Stars;
