import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Projects.css";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightFromBracket,
  faMultiply,
} from "@fortawesome/free-solid-svg-icons";
// import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Projects({ brand }) {
  const [modal, setModal] = useState(false);
  const [overflow, setOverflow] = useState(false);
  const [modalIndex, setModalIndex] = useState(null);

  const data = [
    {
      id: 1,
      img: "/assets/quax.png",
      name: "Quax React",
      skills: "Next js - React js - Tailwind - Framer motion",
      details: {
        short:
          "An optimized themeforest template. ",
        long: "Quax Raect is an optimized themeforest template. It container 3 homepage and 10+ inner pages. Quax react is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
      },
      links: {
        git: "https://themeforest.net/user/loyalcoders/portfolio",
        live: "https://quax-psi.vercel.app/",
      },
    },
    {
      id: 2,
      img: "/assets/kinder-world.png",
      name: "Kinder World",
      skills: "Next js - React js - Tailwind - Framer motion",
      details: {
        short:
          "An optimized themeforest template. ",
        long: "Kinder World is an optimized themeforest template. It container 3 homepage and 10+ inner pages. Kinder World react is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
      },
      links: {
        git: "https://themeforest.net/user/loyalcoders/portfolio",
        live: "https://kinder-world-react.vercel.app/",
      },
    },
    {
      id: 2,
      img: "/assets/adminify.png",
      name: "Adminify React Dashboard",
      skills: "Next js - React js - Tailwind - Framer motion",
      details: {
        short:
          "An optimized themeforest template. ",
        long: "Adminify React is an optimized themeforest template. It container 3 homepage and 90+ inner pages. Adminify React is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
      },
      links: {
        git: "https://themeforest.net/user/loyalcoders/portfolio",
        live: "https://adminify-react.vercel.app/",
      },
    },
    {
      id: 2,
      img: "/assets/moviestar.png",
      name: "Moviestar React",
      skills: "Next js - React js - Tailwind - Framer motion",
      details: {
        short:
          "An optimized themeforest template. ",
        long: "Moviestar React is an optimized themeforest template. It container 3 homepage and 90+ inner pages. Moviestar React is built with latest version of next js and tailwind css. It also have some cool looking animation with which is made possible by framer motion.",
      },
      links: {
        git: "https://themeforest.net/user/loyalcoders/portfolio",
        live: "https://moviestar-react.vercel.app/home-2",
      },
    },
    {
      id: 2,
      img: "https://github.com/Toufiq005/space-tourism-website-react/raw/main/screenshot.png",
      name: "Space",
      skills: "Node - React js - React routes - Tailwind",
      details: {
        short:
          "A multipage space tourism website. ",
        long: "A multipage space tourism website. ",
      },
      links: {
        git: "https://github.com/Toufiq005/space-tourism-website-react",
        live: "https://nasa-space-website-react.netlify.app/",
      },
    },
    // {
    //   id: 3,
    //   img: "https://github.com/Toufiq005/easy-bank-landing-page-fem/raw/master/screenshot.jpg",
    //   name: "Easy Bank",
    //   skills: "React - Tailwind - Css flex/grid - Git",
    //   details: {
    //     short:
    //       "A Lading page building challenge on Frontend Mentor.",
    //     long: "This is a solution to the Easybank landing page challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    //   },
    //   links: {
    //     git: "https://github.com/Toufiq005/easy-bank-landing-page-fem",
    //     live: "https://celadon-croissant-8f63f7.netlify.app/",
    //   },
    // },
    {
      id: 4,
      name: "Go Remote",
      img: "https://github.com/Toufiq005/go-remote-fem/raw/main/screenshot.jpg",
      skills: "React - Tailwind - Git",
      details: {
        short:
          "Make remote work. ",
        long: "Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.",
      },
      links: {
        git: "https://github.com/Toufiq005/go-remote-fem",
        live: "https://toufiq005.github.io/go-remote-fem/",
      },
    },
  ];

  const toggleModal = (a) => {
    setModal(!modal);
    if (overflow === false) {
      document.body.style.overflow = "hidden";
      setOverflow(true);
    } else {
      document.body.style.overflow = "unset";
      setOverflow(false);
    }
    setModalIndex(a);
  };

  return (
    <>
      <section
        id="projects"
        className="w-full h-auto flex items-start justify-center"
      >
        <div className="wrapper py-28 max-xl:ml-28">
          <div className="flex items-center justify-center gap-5 mb-5 max-sm:justify-start">
            <div className="header-line"></div>
            <h1 className="text-7xl font-bold max-sm:text-4xl">
              Projects
              <span className={brand.color + " " + "text-9xl max-sm:text-6xl"}>
                .
              </span>
            </h1>
          </div>
          <div className="projects w-full">
            {data.map(({ id, name, img, skills, details, links }, index) => {
              return (
                <div key={id} className="w-full my-7">
                  <div className="img-container flex items-center justify-center rounded-lg">
                    <motion.img
                      onClick={() => toggleModal(index)}
                      whileHover={{ rotate: 2, scale: 1.04 }}
                      src={img}
                      alt="project img"
                      className="rounded-lg relative top-12 max-sm:top-4"
                    />
                  </div>
                  <div className="flex items-center justify-between my-4">
                    <h2 className="text-2xl font-semibold">{name}</h2>
                    <div className="line-two mr-3 max-sm:hidden"></div>
                    <div className="text-2xl flex gap-2 mr-4 max-xl:mr-7">
                      <a href={links.git} target="_blank">
                        <FontAwesomeIcon
                          icon={faGithub}
                          className={"text-gray-300" + " " + brand.hover}
                        />
                      </a>
                      <a href={links.live} target="_blank">
                        <FontAwesomeIcon
                          icon={faArrowRightFromBracket}
                          className={"text-gray-300" + " " + brand.hover}
                        />
                      </a>
                    </div>
                  </div>
                  <h3 className={brand.color}>{skills}</h3>
                  <p className="mt-3 max-sm:mr-5">
                    {details.short}
                    <span>
                      <button
                        onClick={() => toggleModal(index)}
                        className={brand.color + " " + " hover:underline"}
                      >
                        Learn more &gt;
                      </button>
                    </span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        {modal ? (
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:.3}} className="project-modal fixed top-0 w-full h-full overflow-x-hidden overflow-y-scroll pb-20 flex z-40 items-start justify-center bg-opaque">
              <div
                className="w-full h-full fixed top-0"
                onClick={() => toggleModal(null)}
              ></div>
              <button
                onClick={() => toggleModal(null)}
                className="fixed top-7 right-10 text-2xl"
              >
                <FontAwesomeIcon icon={faMultiply} />
              </button>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity:1 }}
                transition={{ duration: .2, delay: .3 }}
                className="project-modal-content bg-light relative top-20 mb-20 rounded-xl"
              >
                <img
                  src={data[modalIndex].img}
                  alt="project img"
                  className="rounded-tl-xl rounded-tr-xl"
                />
                <h1 className="text-3xl font-bold mt-10 ml-5 mb-3">
                  {data[modalIndex].name}
                </h1>
                <h2 className={brand.color + " " + "ml-5"}>
                  {data[modalIndex].skills}
                </h2>
                <p className="m-5">{data[modalIndex].details.long}</p>
                <h3 className="ml-5 text-xl font-bold">
                  Project Links
                  <span className={brand.color + " " + "text-2xl"}>.</span>
                </h3>
                <div
                  className={
                    "flex items-center justify-start m-5 gap-5" +
                    " " +
                    brand.color
                  }
                >
                  <a
                    href={data[modalIndex].links.git}
                    target="_blank"
                    className="flex gap-2"
                  >
                    <span>
                      <FontAwesomeIcon icon={faGithub} />
                    </span>
                    <h4 className="hover:underline">source code</h4>
                  </a>
                  <a
                    href={data[modalIndex].links.live}
                    target="_blank"
                    className="flex gap-2"
                  >
                    <span>
                      <FontAwesomeIcon icon={faArrowRightFromBracket} />
                    </span>
                    <h4 className="hover:underline">live project</h4>
                  </a>
                </div>
              </motion.div>
            </motion.div>
        ) : null}
    </>
  );
}
