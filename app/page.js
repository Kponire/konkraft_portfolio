import Image from "next/image";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <>
    <div id="topbar" className={`fixed-top d-flex align-items-center ${styles.topbar}`}>
      <div className="container d-flex align-items-center justify-content-center justify-content-md-between">
        <div className={`contact-info d-flex align-items-center ${styles.contactInfo}`}>
          <i className="bi bi-envelope-fill"></i>
          <a href="mailto:konkraft_eng@yahoo.com">konkraft_eng@yahoo.com</a>
          <i className={`bi bi-phone-fill ${styles.phoneIcon}`}></i>
          <a href="tel:+2348033445968">08033445968</a>
        </div>
        <div className={`cta d-none d-md-block ${styles.cta}`}>
          <button className={styles.clickButton}>Get Started</button>
        </div>
      </div>
    </div>    
    </>
  );
}
