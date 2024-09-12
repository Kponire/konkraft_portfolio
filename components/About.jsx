// /app/components/About.js
import Link from 'next/link';
import styles from './About.module.css';
import { RiCheckDoubleLine } from 'react-icons/ri';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h2>About Us</h2>
          <p>
            The success story of KONKRAFT Engineering and Management Co. Ltd. to date can only be measured in terms of quality service rendered to a varied clientele, based on our commitment to
            executing projects in total conformity to agreed specification and time program.
          </p>
        </div>

        <div className={`row ${styles.content}`}>
          <div className="col-lg-6">
            <p>
              With a cumulative wealth of experienced personnel and an array of plants, tools, and equipment, these and many more have always been our assets.
            </p>
            <ul className={styles.list}>
              <li><RiCheckDoubleLine className={styles.icon} /> Heat Ventilation Air-Conditioning (HVAC)</li>
              <li><RiCheckDoubleLine className={styles.icon} /> Electronic Project Development (control and automation)</li>
              <li><RiCheckDoubleLine className={styles.icon} /> Electrical Panel</li>
              <li><RiCheckDoubleLine className={styles.icon} /> Solar Renewable Energy Project Development</li>
              <li><RiCheckDoubleLine className={styles.icon} /> Seminars and trainings for technical staff on project management</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              The company is well equipped to provide a full range of Oil and Gas and Agro Allied Industrial Engineering works and plant maintenance / rehabilitation services amongst which are the following
            </p>
            <Link href="#">
              <a className={`btn-learn-more animate__animated animate__fadeInUp ${styles.btnLearnMore}`}>Learn More</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
