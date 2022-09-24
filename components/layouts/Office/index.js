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
            <h2>Offices</h2>{" "}
            <div className="office_button">
              <Icon icon="akar-icons:plus" />
              Add Region
            </div>
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

        <table>
          <thead>
            <tr>
              <th>S/N</th>
              <th>Region</th>
              <th>Pastor in Charge</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {AllGigs.map((gig, index) => { */}
            {/* return ( */}
            <tr>
              <td>1</td>
              <td>Region name</td>
              <td>Pastor name</td>
              <td>
                <button className="transparentButton">
                  <Icon icon="akar-icons:eye-open" /> More Info
                </button>
              </td>
            </tr>
            {/* ); */}
            {/* })} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Office;
