import "./TextReveal.css";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

export default function TextReveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [animation, setAnimation] = useState(true);

  return (
    <div ref={ref} style={{ overflow: animation ? "hidden" : "unset" }}>
      {inView && (
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        onAnimationComplete={() => setAnimation(false)}
      >
        {children}
        </motion.div>
      )}
      {/* <motion.div
        initial={{ width: "100%" }}
        animate={{ width: "0px" }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="bg-white h-28 relative -top-20"
        ></motion.div> */}
    </div>
  );
}
