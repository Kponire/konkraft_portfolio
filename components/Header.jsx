"use client"
import Link from 'next/link';
import styles from './Header.module.css';

const Header = () => {

useEffect(() => {
    const handleScroll = () => {
        const navbarlinks = document.querySelectorAll('#navbar .scrollto');
        let position = window.scrollY + 200;
        
        navbarlinks.forEach(navbarlink => {
        if (!navbarlink.hash) return;
        let section = document.querySelector(navbarlink.hash);
        if (!section) return;

        if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add(styles.active);
        } else {
            navbarlink.classList.remove(styles.active);
        }
        });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('load', handleScroll);
    };
}, []);

  return (
    <header id="header" className={`fixed-top d-flex align-items-center ${styles.header}`}>
      <div className="container d-flex align-items-center justify-content-between">
        <div className={`d-flex ${styles.justify}`}>
          <div className={`${styles.logo}`}>
            <img src="/assets/img/check profile 1.png" alt="Konkraft Logo" className="img-fluid" />
          </div>
          <div>
            <h1 className={styles.logoText}>KONKRAFT ENGINEERING <br /> & MANAGEMENT COMPANY LTD.</h1>
          </div>
        </div>

        <nav id="navbar" className={`navbar ${styles.navbar}`}>
          <ul>
            <li><Link href="#hero"><a className={`${styles.navLink} scrollto`}>Home</a></Link></li>
            <li><Link href="#about"><a className={`${styles.navLink} scrollto`}>About</a></Link></li>
            <li><Link href="#services"><a className={`${styles.navLink} scrollto`}>Services</a></Link></li>
            <li><Link href="#portfolio"><a className={`${styles.navLink} scrollto`}>Portfolio</a></Link></li>
            <li><Link href="#team"><a className={`${styles.navLink} scrollto`}>Team</a></Link></li>
            <li><Link href="#contact"><a className={`${styles.navLink} scrollto`}>Contact</a></Link></li>
          </ul>
          <i className={`bi bi-list ${styles.mobileNavToggle}`}></i>
        </nav>
      </div>
    </header>
  )
}

export default Header