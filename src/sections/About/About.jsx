import "./About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSkype,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRight,
  faCode,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import TextReveal from "../../components/ui/TextReveal/TextReveal";
import Reveal from "../../components/ui/TextReveal/Reveal/Reveal";

export default function About({ brand }) {
  const socilaLinks = [
    {
      id: 1,
      name: "facobook",
      href: "https://www.facebook.com/profile.php?id=100083757555513",
      icon: faFacebook,
    },
    {
      id: 2,
      name: "Skype",
      href: "https://join.skype.com/invite/tDzcszJavPHE",
      icon: faSkype,
    },
    {
      id: 3,
      name: "Whatsapp",
      href: "https://wa.me/1975513724",
      icon: faWhatsapp,
    },
  ];

  const skils = [
    {
      id: 1,
      name: "JavaScript",
    },
    {
      id: 2,
      name: "TypeScript",
    },
    {
      id: 3,
      name: "React",
    },
    {
      id: 4,
      name: "Node",
    },
    {
      id: 5,
      name: "Next.js",
    },
    {
      id: 6,
      name: "CSS",
    },
    {
      id: 7,
      name: "Tailwind",
    },
    {
      id: 8,
      name: "Git",
    },
  ];

  const lerningSkils = [
    {
      id: 1,
      name: "Python",
    },
    {
      id: 2,
      name: "C++",
    },
    {
      id: 3,
      name: "mongoDB",
    },
    {
      id: 4,
      name: "React native",
    },
  ];

  return (
    <section
      id="about"
      className="w-full h-auto flex items-start justify-center"
    >
      <div className="wrapper pb-28 pt-20 max-xl:ml-28 max-xl:pr-10">
        <div className="flex items-center justify-center mb-5 gap-5 max-sm:justify-start">
          <h1 className="text-7xl font-bold max-sm:text-4xl">
            <TextReveal>
              About
              <span className={brand.color + " " + "text-9xl max-sm:text-6xl"}>
                .
              </span>
            </TextReveal>
          </h1>
          <div className="header-line"></div>
        </div>
        <div className="about">
          <Reveal className="left-content">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              I'm a skilled front-end developer with eight months of immersive
              experience crafting digital wonders using Next.js, React.js, and
              Tailwind CSS. My journey through these technologies has been
              enlightening, resulting in seamless interfaces and dynamic web
              apps.
            </motion.p>
            <br />
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
            >
              What sets me apart is my unyielding commitment to growth. I thrive
              on mastering new concepts, eagerly expanding my skill set to push
              boundaries. With unquenchable curiosity, I see each coding
              challenge as a chance to refine my craft.
            </motion.p>
            <br />
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              In summary, I bring technical prowess and a fervor for learning.
              I'm excited to continue exploring front-end development's evolving
              landscape.
            </motion.p>
            <ul className="flex items-center text-xl mt-5">
              <h4 className={brand.color}>
                My links
                <FontAwesomeIcon icon={faArrowRight} className="pl-2" />
              </h4>
              {socilaLinks.map((link) => {
                return (
                  <li key={link.id} className="ml-4">
                    <a target="_blank" href={link.href}>
                      <FontAwesomeIcon
                        icon={link.icon}
                        className={brand.hover}
                      />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
          <div className="right-content">
            <div className="w-full">
              <h3 className="text-2xl font-bold">
                <FontAwesomeIcon
                  icon={faCode}
                  className={brand.color + " " + "mr-4"}
                />
                Use at work
              </h3>
              <Reveal>
                <ul className="w-full mt-5">
                  {skils.map(({ id, name }) => {
                    return (
                      <motion.li
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 * id }}
                        key={id}
                        className="w-auto h-7 flex items-center justify-center bg-light px-3 rounded-2xl"
                      >
                        <p className="text-xl">{name}</p>
                      </motion.li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
            <div className="w-full mt-10">
              <h3 className="text-2xl font-bold">
                <FontAwesomeIcon
                  icon={faSmile}
                  className={brand.color + " " + "mr-4"}
                />
                Use for fun
              </h3>
              <Reveal>
                <ul className="w-full mt-5">
                  {lerningSkils.map(({ id, name }) => {
                    return (
                      <motion.li
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.2, delay: 0.2 * id }}
                        key={id}
                        className="w-auto h-7 flex items-center justify-center bg-light px-3 rounded-2xl"
                      >
                        <p className="text-xl">{name}</p>
                      </motion.li>
                    );
                  })}
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
