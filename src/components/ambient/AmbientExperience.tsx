"use client";

import FireworksCanvas from "./FireworksCanvas";
import RegionalDancers from "./RegionalDancers";
import styles from "./AmbientExperience.module.css";

export default function AmbientExperience() {
  return (
    <div className={styles.ambientRoot} aria-hidden="true">
      <FireworksCanvas />
      <RegionalDancers />
    </div>
  );
}
