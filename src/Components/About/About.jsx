import styles from "./About.module.css";

import Clock from "../../assets/About/clock.svg?react";
import Lightning from "../../assets/About/lightning.svg?react";
import Pinpoint from "../../assets/About/pinpoint.svg?react";
import Target from "../../assets/About/target.svg?react";
import DKnife from "../../assets/About/DKnife.png";
// import DKnife

function About() {
  return (
    <div id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutTitle}>
          <h1>CRAFTING PRECISION</h1>
          <h1>IN EVERY POLYGON</h1>
        </div>
        <div className={styles.textContainer}>
          <div className={styles.firstP}>
            <p className={styles.aboutText}>
              I have been 3D Modeling since July of 2021, specializing in
              high-quality weapon modeling with optimized topology. My expertise
              covers everything from swords and knives to complex firearms and
              vehicles.
            </p>
          </div>
          <div className={styles.secondP}>
            <p className={styles.aboutText}>
              Efficiency is at the core of my workflow. Most standard models are
              delivered within 1-2 hours, ensuring your game development process
              remains seamless and fast-paced.
            </p>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div className={styles.card}>
            <Clock />
            <h3>4+</h3>
            <p>Years Experience</p>
          </div>
          <div className={styles.card}>
            <Lightning />
            <h3>1-2h</h3>
            <p>Avg Turnaround</p>
          </div>
          <div className={styles.card}>
            <Target />
            <h3>Topology</h3>
            <p>Focus</p>
          </div>
          <div className={styles.card}>
            <Pinpoint />
            <h3>GMT+12</h3>
            <p>Timezone</p>
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img src={DKnife} alt="" />
        <div className={styles.imageText}>
          <p>
            "Quality good topology weapons such as guns and swords/knives are my
            specialty."
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
