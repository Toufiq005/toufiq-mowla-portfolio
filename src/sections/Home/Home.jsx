import "./Home.css";
import { motion } from "framer-motion";
import TextReveal from "../../components/ui/TextReveal/TextReveal";
import Reveal from "../../components/ui/TextReveal/Reveal/Reveal";

export default function Home({ brand }) {
  const title = "Hey, I'm Toufiq".split("");

  return (
    <header
      id="home"
      className="w-full flex justify-center items-center min-h-screen"
    >
      <div className="wrapper py-48 max-xl:ml-28">
        <h1 className="text-8xl font-bold mb-7 max-sm:text-6xl">
          <Reveal>
            {title.map((props, i) => {
              return (
                <motion.span
                  whileHover={{ color: `${brand.hex}`, top: -10 }}
                  key={i}
                  className="cursor-pointer duration-75 relative"
                >
                  {props}
                </motion.span>
              );
            })}
            <span className={brand.color}>.</span>
          </Reveal>
        </h1>
        <h2 className="text-4xl font-light max-sm:text-3xl">
          <Reveal>
            I'm a{" "}
            <motion.span
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.4 }}
              className={brand.color + " " + "font-medium"}
            >
              Front-End Developer
            </motion.span>
          </Reveal>
        </h2>
        <p className="text-xl font-extralight w-2/3 mt-7">
          <TextReveal>
            I bring 8 months of experience as a front-end developer with
            expertise in Next.js, React.js, and Tailwind CSS. I am committed to
            ongoing learning and embracing fresh challenges to elevate my skills
            and user experiences.
          </TextReveal>
        </p>
        <TextReveal>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className={
              "flex items-center justify-center w-40 h-14 text-dark rounded-md mt-7 text-xl duration-300" +
              " " +
              brand.bg
            }
          >
            Contact Me
          </motion.a>
        </TextReveal>
      </div>
    </header>
  );
}
