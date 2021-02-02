import React from 'react';

import Layout from '../components/Layout';

// import { Link } from 'gatsby';
import Sidebar from '../components/Sidebar';
import config, { skills } from '../../config';
const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div className="container-fluid p-0">
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="about"
      >
        <div className="w-100">
          <h2 className="mb-0">
            {config.firstName}
            <span className="text-primary"> {config.lastName}</span>
          </h2>
          <div className="subheading mb-5">
            Address: {config.address} <br />
            Phone: {config.phone} <br />
            <a href={`mailto:${config.email}`}>{config.email}</a>
          </div>

          <p className="lead mb-5">
            Enthusiastic software engineer with 2+ years experience
            participating in the complete product development lifecycle of
            successfully launched applications. Working at{' '}
            {config.currentCompany} I'm delivering mission-critical technology
            and business solutions to Fortune 500 companies and some of the most
            recognized brands on the planet. In previous roles, reduced downtime
            by 10%; identified and resolved a process bottleneck that reduced
            coding efficiency by up to 20%.
          </p>
          <div className="social-icons">
            {config.socialLinks.map(social => {
              const { icon, url } = social;
              return (
                <a key={url} href={url}>
                  <i className={`fab ${icon}`}></i>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex justify-content-center"
        id="experience"
      >
        <div className="w-100">
          <h2 className="mb-5">Experience</h2>

          {config.experience.map(experience => {
            const { title, description, company, from, to } = experience;
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{title}</h3>
                  <div className="subheading mb-3">{company}</div>
                  <p>{description}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {from} to {to}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="education"
      >
        <div className="w-100">
          <h2 className="mb-5">Education</h2>

          {config.education.map(education => {
            const { degree, description, school, from, to, score } = education;
            return (
              <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="resume-content">
                  <h3 className="mb-0">{school}</h3>
                  <div className="subheading mb-3">{degree}</div>
                  <div>{description}</div>
                  <p>{score}</p>
                </div>
                <div className="resume-date text-md-right">
                  <span className="text-primary">
                    {from} to {to}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="skills"
      >
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>

          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>
          <ul className="list-inline dev-icons">
            {config.skills.map(skill => {
              return (
                <li className="list-inline-item">
                  <i className={skill}></i>
                </li>
              );
            })}
          </ul>

          <div className="subheading mb-3">Workflow</div>
          <ul className="fa-ul mb-0">
            {config.workflows.map(workflow => {
              return (
                <li>
                  <i className="fa-li fa fa-check"></i>
                  {workflow}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <hr className="m-0" />

      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="interests"
      >
        <div className="w-100">
          <h2 className="mb-5">Interests</h2>
          <p>
            Apart from being a software engineer, I enjoy most of my time being
            outdoors. I used to play table tenis.
          </p>
          <p className="mb-0">
            Book reading, Searching for new ideas, Looking for content about
            artificial intelligence is my side interests
          </p>
        </div>
      </section>

      <hr className="m-0" />
    </div>
  </Layout>
);

export default IndexPage;
