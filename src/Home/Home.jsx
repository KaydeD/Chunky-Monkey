import styles from "./Home.module.css";

import Navbar from "../Components/Navbar/Navbar";
import Header from "../Components/Header/Header";
import About from "../Components/About/About";
import Work from "../Components/Work/Work";
import Payment from "../Components/Payment/Payment";
import Footer from "../Components/Footer/Footer";


export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <Navbar />
      <Header />
      <About />
      <Work />
      <Payment />
      <Footer />
    </div>
  );
}
