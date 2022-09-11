import Image from "next/image";
import React from "react";
import styles from "./OfficeOfGO.module.css";
import { offices } from "data/offices";
function OfficeOfGO({}) {
  return (
    <div className={styles.container}>
      <div className={styles.topSection}>
        <div className="office_button">Directories</div>
      </div>
      <section className={styles.middleSection}>
        {offices.map((office, index) => {
          {
            return (
              office?.parentId === 1 && (
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
              )
            );
          }
        })}
      </section>
    </div>
  );
}

export default OfficeOfGO;
