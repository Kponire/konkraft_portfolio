import styles from './Services.module.css';

const CTA = () => {
  return (
    <section id="cta" className={styles.cta}>
      <div className="container">

        <div className="row" data-aos="zoom-in">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> It is the primary objective of Konkraft Engineering and Management Co. Ltd to meet all set out targets and client requirements. We shall endeavour to execute all jobs/contracts with the confine of contract vis-à-vis standards and specifications. We shall guarantee continuity of jobs or supply/services. Each staff is responsible in maintaining the quality Environment and safety standards as set by client and company.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <a className={`${cta-btn} align-middle`} href="#">Call To Action</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default CTA