"use client";

import React from "react";
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
      <h1 className={styles.head}>{name}</h1>

      <h2 className={styles.content}>{content}</h2>

      <div className={styles.btndiv}>
        <button className={styles.btn}>
          Subscribe
          <span style={{ marginLeft: "8px" }}>
            <SendHorizonal />
          </span>
        </button>
      </div>
    </div>
  );
};

// Optional: shallow prop comparison to avoid unnecessary re-renders
function areEqual(prev: Data, next: Data) {
  return (
    prev.url === next.url &&
    prev.name === next.name &&
    prev.content === next.content
  );
}

export default React.memo(CarCard, areEqual);
