// /app/components/IconBoxes.js
import styles from './IconBoxes.module.css';
import { FaBusinessTime, FaHotel, FaHome, FaLayerGroup } from 'react-icons/fa';

const IconBoxes = () => (
  <section id="icon-boxes" className={`icon-boxes ${styles.iconBoxes}`}>
    <div className={`${styles.anime} ${styles.tada}`} id="tad">
      <div className="container">
        <div className="row">
          <div className={`col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0`} data-aos="fade-up" data-aos-delay="100">
            <div className={styles.iconBox}>
              <div className={styles.iconContainer}><FaBusinessTime className={styles.icon} /></div>
              <h4 className={styles.title}><b className={styles.AD}>Industrial factories</b></h4>
              <p className={styles.description}>
                Power balancing.<br /> Maintenance & servicing of motor controls.<br /> HVAC<br /> Design & Construction of systems.
              </p>
            </div>
          </div>
          {/* Repeat similar structure for other icon boxes */}
          <div className={`col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0`} data-aos="fade-up" data-aos-delay="300">
            <div className={styles.iconBox}>
              <div className={styles.iconContainer}><FaHotel className={styles.icon} /></div>
              <h4 className={styles.title}><b className={styles.AD}>Hotels</b></h4>
              <p className={styles.description}>
                Installation & services of HVAC.<br /> Installation of various electrical and control panels.
              </p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0`} data-aos="fade-up" data-aos-delay="500">
            <div className={styles.iconBox}>
              <div className={styles.iconContainer}><FaHome className={styles.icon} /></div>
              <h4 className={styles.title}><b className={styles.AD}>Residential complexes</b></h4>
              <p className={styles.description}>
                Design & construction of electrical plans.<br /> Construction & installation of electrical panels.<br /> Renewable energy installation.
              </p>
            </div>
          </div>
          <div className={`col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 ${styles.fadeUp}`} data-aos="fade-up" data-aos-delay="700">
            <div className={styles.iconBox}>
              <div className={styles.iconContainer}><FaLayerGroup className={styles.icon} /></div>
              <h4 className={styles.title}><b className={styles.AD}>Utility companies.</b></h4>
              <p className={styles.description}>
                We are available for technical cooperation of utility organization of any sector.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default IconBoxes;
