import React from "react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";

function AboutPage() {
  return (
    <main className="about-page">
      <div className="page-content">
        <section className="page-section d-flex flex-column mb-0">
          <h3 className="section-head mb-3">Our Story</h3>
          <hr className="heading-hr mb-3 align-self-center" />
          <div>
            <img src="https://nightingale1.s3.ap-south-1.amazonaws.com/images/section-bg.png" className="backgroundImg" />
          </div>
          <div className="about-page-content d-flex flex-column justify-content-center align-items-center">
            <p className="w-50 section-para">
              Started in 2016, Navgurukul runs one-year residential course for
              students from underserved and diverse communities. Students after
              pursuing our course are awarded Certificate in Software
              Programming. The{" "}
              <span
                className="text-primary mou-pdf"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(
                    "https://nightingale1.s3.ap-south-1.amazonaws.com/pdf/mou_dgt_diploma-in-software-programming.pdf",
                    "_blank"
                  );
                }}
              >
                MOU certificate
              </span>{" "}
              is issued by DGT, Government of India .
            </p>
            <p className="w-50 mt-3 section-para mb-0">
              In last five years, more than 250 students from marginalised areas
              have got jobs as Software Programs and have donated back more than
              28 Lacs in donation. We have diversified to add School of Design
              We have also started initiatives to conduct experiments for
              popular products in a non-profit space.
            </p>
          </div>
        </section>
        <section className="page-section d-flex flex-column mt-0">
          <h3 className="section-head mb-3">Vision</h3>
          <hr className="heading-hr mb-3 align-self-center" />
          <div className="about-content d-flex flex-column justify-content-center mb-0 align-items-center">
            <p className="w-50 section-para mb-0">
              We envision a world where everyone has access to an affordable
              world class education that enables them to live up to their
              highest potential
            </p>
          </div>
        </section>
        <section className="page-section d-flex flex-column mt-0">
          <h3 className="section-head mb-3">Our Values</h3>
          <hr className="heading-hr mb-3 align-self-center" />
          <div className="about-content d-flex flex-column justify-content-center align-items-center">
            <p className="w-50 section-para mb-0">
              In order to follow through on our commitments, achieve our
              mission, and realise our vision, we’ve created a set of values
              made easy to remember through our acronym VELOCITY.
            </p>
            <p className="w-50 mt-3 section-para mb-0 d-flex flex-column">
              Let’s break it down: <span>V - Velocity</span>
              <span> E - Entrepreneurial Mindset</span>{" "}
              <span> L - Love for customers</span>{" "}
              <span> O - Out of the box thinking</span>{" "}
              <span> C - Collaboration</span> <span>I - Impact</span>
              <span> T - Trust</span> <span>Y - You</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
