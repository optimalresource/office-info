import { Icon } from "@iconify/react";
import React from "react";
import styles from "./Sidebar.module.css";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const path = router.asPath;
  return (
    <div className={styles.container}>
      <div className={styles.linkGroup}>
        <ul className={styles.links}>
          <li
            className={path === "/" ? styles.active : ""}
            onClick={() => router.push("/")}
          >
            <Icon icon="bx:church" className={styles.icon} /> Office of the GO
          </li>
          <li
            className={path === "/national-headquarters" ? styles.active : ""}
            onClick={() => router.push("/national-headquarters")}
          >
            <Icon icon="mdi:church" className={styles.icon} /> National
            Headquarters
          </li>
          <li
            className={
              path === "/International-headquarters" ? styles.active : ""
            }
            onClick={() => router.push("/International-headquarters")}
          >
            <Icon icon="icon-park-twotone:church-one" className={styles.icon} />{" "}
            International Headquarters
          </li>
          <li
            className={path === "/International-office" ? styles.active : ""}
            onClick={() => router.push("/International-office")}
          >
            <Icon icon="healthicons:church" className={styles.icon} />{" "}
            International Office
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
