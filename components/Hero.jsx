// /app/components/Hero.js
import Link from 'next/link';
import styles from './Hero.module.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="hero" className={`d-flex justify-content-center align-items-center ${styles.hero}`}>
      <div id="heroCarousel" className={`container carousel carousel-fade ${styles.carousel}`} data-bs-ride="carousel" data-bs-interval="5000">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <div className={`carousel-container ${styles.carouselContainer}`}>
            <h2 className="animate__animated animate__fadeInDown">WELCOME TO <span>KONKRAFT ENGINEERING</span></h2>
            <p className="animate__animated animate__fadeInUp">
              The Konkraft Engineering and Management company has provided multi-engineering<br />
              (Electrical/Electronic, HVAC, Mechanic) discipline services to domestic and industrial clients.
            </p>
            <Link href="#about">
              <a className={`btn-get-started animate__animated animate__fadeInUp ${styles.btnGetStarted}`}>Read More</a>
            </Link>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <div className={`carousel-container ${styles.carouselContainer}`}>
            <h2 className="animate__animated animate__fadeInDown">INSIGHT</h2>
            <p className="animate__animated animate__zoomIn">
              This profile gives an insight into the unique background of the company. Its operating philosophy, the professionals behind it, and the varied services offered in this new innovation.
            </p>
            <Link href="#about">
              <a className={`btn-get-started animate__animated animate__fadeInUp ${styles.btnGetStarted}`}>Read More</a>
            </Link>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <div className={`carousel-container ${styles.carouselContainer}`}>
            <h2 className="animate__animated animate__fadeInDown">CORPORATE OBJECTIVE</h2>
            <p className="animate__animated animate__slideInLeft">
              Konkraft Engineering evolved so that not only should projects be delivered on time, but also quality financial implications as well as concepts of the projects should be of equal priority.
            </p>
            <Link href="#about">
              <a className={`btn-get-started animate__animated animate__fadeInUp ${styles.btnGetStarted}`}>Read More</a>
            </Link>
          </div>
        </div>

        {/* Carousel Controls */}
        <a className="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <FaChevronLeft className="carousel-control-prev-icon" />
        </a>
        <a className="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <FaChevronRight className="carousel-control-next-icon" />
        </a>
      </div>

      {/* SVG Waves */}
      <svg className={styles.heroWaves} xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className={styles.wave1}>
          <use xlinkHref="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)" />
        </g>
        <g className={styles.wave2}>
          <use xlinkHref="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)" />
        </g>
        <g className={styles.wave3}>
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
    </section>
  );
};

export default Hero;
