import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { Icon } from "@iconify/react";
import { motion, useTransform, useScroll } from "framer-motion";
import ClickAwayListener from "components/utils/ClickAwayListener";
import { useMediaQuery } from "react-responsive";
import { mediaQueries } from "components/utils/Responsive";

export function Header() {
  return (
    <div className={styles.container}>
      <Image
        src="/assets/images/svgs/full_logo.svg"
        width={150}
        height={30}
        alt="logo"
      />
      <button className="buttonPrimary">Login</button>
    </div>
  );
}

export default Header;
