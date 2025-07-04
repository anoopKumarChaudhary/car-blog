import React from "react";

import styles from "../styles/Appbar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBandcamp } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import {
  AlignHorizontalDistributeCenter,
  Home,
  Info,
  Notebook,
  Phone,
  Search,
  Youtube,
} from "lucide-react";
import { Belgrano } from "next/font/google";

function Appbar() {
  return (
    <div className={styles.main}>
      <div className={styles.logo_container}>
        <img src="./logo.png" className={styles.logo}></img>
        <p className={styles.heading}>Sheer Driving Pleasure</p>
      </div>
      <ul className={styles.list}>
        <li className={styles.li}>
          <Link href="">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="">Blogs</Link>
        </li>{" "}
        <li className={styles.li}>
          <Link href="">About</Link>
        </li>
        <li className={styles.li}>
          <Link href="">Contact Us</Link>
        </li>
        <li>
          <button className={styles.btn}>Subscribe</button>
        </li>
      </ul>
      <ul className={styles.mobileList}>
        <li className={styles.li}>
          <Link href="">
            <Home className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="">
            <Youtube className={styles.icon} />
          </Link>
        </li>{" "}
        <li className={styles.li}>
          <Link href="">
            <Info className={styles.icon} />
          </Link>
        </li>
        <li className={styles.li}>
          <Link href="">
            <Phone className={styles.icon} />
          </Link>
        </li>
        <li>
          <button className={styles.btn}>Subscribe</button>
        </li>
      </ul>
    </div>
  );
}

export default Appbar;
