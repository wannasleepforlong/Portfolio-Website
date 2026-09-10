import React from "react";
import Particles from "react-tsparticles";

function Particle({ theme = "warm" }) {
  const particleColors =
    theme === "night"
      ? ["#c770f0", "#8a49a8", "#ffffff"]
      : ["#0e8072", "#c56a3d", "#17313a"];

  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          color: {
            value: particleColors,
          },
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1.2,
          },
          opacity: {
            value: theme === "night" ? 0.25 : 0.35,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.05,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
