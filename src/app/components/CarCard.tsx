"use client";

import React from "react";
import { motion } from "framer-motion";
import styles from "../styles/CarCard.module.css";
import { SendHorizonal } from "lucide-react";

interface Data {
  url: string;
  name: string;
  content: string;
}

const CarCard: React.FC<Data> = ({ url, name, content }) => {
  return (
    <div style={{ backgroundImage: `url(${url})` }} className={styles.main}>
      <motion.h1
        className={styles.head}
        initial={{ x: -120, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 12,
          delay: 0.4,
        }}
        // viewport={{ once: true }}
      >
        {name}
      </motion.h1>

      <motion.h2
        className={styles.content}
        initial={{ x: 200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 90,
          damping: 12,
          delay: 0.4,
        }}
        // viewport={{ once: true }}
      >
        {content}
      </motion.h2>

      <div className={styles.btndiv}>
        <motion.button
          className={styles.btn}
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 90,
            damping: 12,
            delay: 0.6,
          }}
          // viewport={{ once: true }}
        >
          Subscribe
          <span style={{ marginLeft: "8px" }}>
            <SendHorizonal />
          </span>
        </motion.button>
      </div>
    </div>
  );
};

// Optional: custom props comparison (shallow)
function areEqual(prev: Data, next: Data) {
  return (
    prev.url === next.url &&
    prev.name === next.name &&
    prev.content === next.content
  );
}

export default React.memo(CarCard, areEqual);
