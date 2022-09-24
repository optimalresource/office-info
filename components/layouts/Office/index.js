import { Icon } from "@iconify/react";
import Image from "next/image";
import React from "react";
import styles from "./Office.module.css";
// import { offices } from "data/offices";

const Office = ({
  offices = [],
  persons = [],
  personsTitle,
  addButtonTitle = "Add region",
  toggleAddModal = () => {},
}) => {
  return (
    <div className={styles.container}>
      {offices.length > 0 && (
        <>
          <div className={styles.topSection}>
            <div className="office_button">Offices</div>
          </div>
          <section className={styles.middleSection}>
            {offices.map((office, index) => {
              {
                return (
                  <div className={styles.card} key={index}>
                    <div className={styles.cardImage}>
                      <Image
                        src="/assets/images/rccglogo.png"
                        width={150}
                        height={150}
                        layout="intrinsic"
                        alt="card"
                      />
                    </div>
                    <div className={styles.cardInfo}>{office?.title}</div>
                  </div>
                );
              }
            })}
          </section>
        </>
      )}

      {/* {persons.length > 0 && ( */}
      <div className={styles.tableSection}>
        <div className={styles.officeHeader}>
          <div className={styles.officeTitle}>All Regions</div>
          <div className={styles.searchArea}>
            <Icon icon="akar-icons:search" />{" "}
            <input type="text" placeholder="search" />
          </div>
        </div>
      </div>

      {/* <section className={styles.middleSection}>
            {persons.map((person, index) => {
              {
                return (
                  person?.parentId === 1 && (
                    <div className={styles.card} key={index}>
                      <div className={styles.cardImage}>
                        <Image
                          src="/assets/images/rccglogo.png"
                          width={150}
                          height={150}
                          layout="intrinsic"
                          alt="card"
                        />
                      </div>
                      <div className={styles.cardInfo}>{person?.name}</div>
                    </div>
                  )
                );
              }
            })}
          </section> */}
      {/* )} */}
    </div>
  );
};

export default Office;
