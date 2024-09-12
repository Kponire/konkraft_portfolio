// /app/components/Services.js
import React from 'react';
import styles from './Services.module.css';
import {
  BiCardChecklist,
  BiBarChart,
  BiBinoculars,
  BiBrightnessHigh,
  BiCalendarWeek,
  BiBriefcase
} from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services" className={styles.services}>
      <div className="container" data-aos="fade-up">
        <div className={styles.sectionTitle}>
          <h2>Services</h2>
          <p>
            With a cumulative wealth of experienced personnel and an array of plants, tools and equipment, these and many more have always been our assets. The company is well equipped to provide a full range of Oil and Gas and Agro Allied Industrial Engineering
            works and plant maintenance / rehabilitation services amongst which are the following:
          </p>
        </div>

        <div className="row">
          {serviceData.map((service, index) => (
            <div
              key={index}
              className={`col-md-6 d-flex align-items-stretch ${index > 1 ? 'mt-4 mt-md-0' : ''}`}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 100}
            >
              <div className={styles.iconBox}>
                <service.icon className={styles.icon} />
                <h4>
                  <a href="#">{service.title}</a>
                </h4>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const serviceData = [
  {
    title: "HVAC (heat ventilation and air-conditioning)",
    description: "KONKRAFT has extensive experience and knowledge concerning various type of HVAC systems,from single to multiple split systems to ducted air handlers installation.",
    icon: BiCardChecklist
  },
  {
    title: "Electronic Project Development (control and automation)",
    description: "Our potentials in the electronic world gives the ability to design and construct for every aspects of your needs either domestic or industrial aspects. Electronic control system, Automation system, Smart base system for diverse electronic projects for international standards.",
    icon: BiBarChart
  },
  {
    title: "Electrical Panel",
    description: "In every domestic and industrial setting of today's society, power balancing, management and control is important. At Konkraft Engineering, we have made deep research and study on this and we have created numerous solutions to organizations and environments suffering from various electrical paneling, hazards, power waste, and mismanagement. Our clients' pages say it all, giving us a chance to develop a proper system for you will be a win-win for both ends because customers' convenience is our priority.",
    icon: BiBinoculars
  },
  {
    title: "Solar Renewable Energy Project Development",
    description: "Renewable energy is the sole proprietor for modern-day power systems. The world needs clean and pure power generation of any form. Research so far has shown that solar power systems can serve such purpose. At Konkraft Engineering, trusting us with this kind of project will benefit you at a top-notch level. We are well-trained about every aspect of power generation using solar.",
    icon: BiBrightnessHigh
  },
  {
    title: "Seminars and trainings for technical staff on project management",
    description: "Project management is simply application of knowledge, skills, method, experience, tools, and techniques on activities involving unique project objectives. In the engineering industries, project implementation and maintenance is a core priority for all. Every step towards achieving a project must be accounted for by a qualified personnel. At Konkraft Engineering, we train technical staff on project management. We give them adequate mentorship within a short period of time.",
    icon: BiCalendarWeek
  },
  {
    title: "Industrial Management & IoT",
    description: "At Konkraft, we organize routines for industrial management of all sectors. With the help of IoT facilities installations, remote access and control of facilities can be made possible by us.",
    icon: BiBriefcase
  }
];

export default Services;
