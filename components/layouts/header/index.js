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
  return <div className={styles.container}>This is just the header.</div>;
}

export default Header;
