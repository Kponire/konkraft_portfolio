// /app/components/WhyUs.js
import React, { useEffect } from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import styles from './WhyUs.module.css';

const WhyUs = () => {
  useEffect(() => {
    const elements = document.querySelectorAll('.txt-rotate');
    elements.forEach((el) => {
      const toRotate = el.getAttribute('data-rotate');
      const period = el.getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(el, JSON.parse(toRotate), period);
      }
    });

    // Inject CSS for text rotation effect
    const css = document.createElement('style');
    css.type = 'text/css';
    css.innerHTML = '.txt-rotate > .wrap { border-right: 0.08em solid #666 }';
    document.body.appendChild(css);

    return () => {
      // Clean up injected CSS on unmount
      document.body.removeChild(css);
    };
  }, []);

  return (
    <section id="why-us" className={styles.whyUs}>
      <div className="container-fluid">
        <div className="row">
          {/* Video Section */}
          <div className={`col-lg-5 align-items-stretch position-relative ${styles.videoBox}`} data-aos="fade-right">
            <ReactPlayer
              controls
              loop
              url="konk-video/analog.mp4"
              width="100%"
              height="100%"
              className={styles.videoPlayer}
            />
          </div>

          {/* Accordion Section */}
          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch" data-aos="fade-left">
            <div className={styles.content}>
              <h3><big>Previous Jobs Executed</big></h3>
              <p>
                <strong>
                  An indication of our impact in the Electrical Engineering field can be seen in the array of projects handled below in our short period of existence to our various clients. Total commitment, financial discipline, and high-quality service have also become our trademark.
                </strong>
              </p>
            </div>

            {/* Accordion List */}
            <Accordion defaultActiveKey="0" className={styles.accordionList}>
              {accordionData.map((item, index) => (
                <Card key={index}>
                  <Accordion.Toggle as={Card.Header} eventKey={index.toString()} className={styles.accordionToggle}>
                    <span>{`0${index + 1}`}</span> {item.title} 
                    <FaChevronDown className="icon-show" />
                    <FaChevronUp className="icon-close" />
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey={index.toString()}>
                    <Card.Body>{item.content}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              ))}
            </Accordion>

            {/* Rotating Text Section */}
            <section className={styles.nerdyPen}>
              <h9 className={styles.nerdyPenText}>
                And many more like:
                <span
                  className="txt-rotate"
                  data-period="2000"
                  data-rotate='["Ajaokuta Steel Company, Ajaokuta (Sub-Contractor INDEV Limited).", "Innoson Technical & Ind. Ltd Enugu.", "Robicon Aluminum Extrusion Co. Ltd.", "NIPEN (CFAO BIC Biro).", "Lilygate Hotel!"]'
                ></span>
              </h9>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

const accordionData = [
  {
    title: "Bamikki Techical",
    content: "Electrical Management, maintenance and installation for Christ Embassy Hall AHU system in the entire building. Design, construction and installation of various electrical and control panels."
  },
  {
    title: "CBN Ado-Ekiti (Beacon Electric Ltd.)",
    content: "Project supervision of Design and construction of Electrical Service of Buildings. Installation of 2.5MVA 33/11kV Transformer 2015."
  },
  {
    title: "Nigerian Bottling Company Ltd.(Cardan Engineering Coy Ltd.)",
    content: "Design, construction and installation of various control panels for NBC power plant LPFO control system."
  },
  {
    title: "United Cement Co. Ltd Calabar. (Sub-Contractor JMBG Global Service)",
    content: "H.V. + L.V. Electrical Rehabilitation Project work at Old Calabar Cement sold by BPE. Rehabilitation of three 11kV sub-stations, Remote Control Units, Auto-Tripping Unit, MCC, and Control Panel for C. Mill & P. Plant."
  },
  {
    title: "Robicon Aluminum Extrusion Co. Ltd",
    content: "Rehabilitation and Maintenance of PLC Control System. Installation to Start-up Programmable Billet Oven System Controller."
  }
];

function TxtRotate(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
}

TxtRotate.prototype.tick = function() {
  const i = this.loopNum % this.toRotate.length;
  const fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  const that = this;
  let delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(() => {
    that.tick();
  }, delta);
};

export default WhyUs;
