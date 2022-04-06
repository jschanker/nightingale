import React, { useState, useEffect } from "react";
import "./style.css";
import { Link, useHistory } from "react-router-dom";
import Slider from "./Slider";
import PartnerSlider from "./PartnerSlider";
import SupporterSlider from "./SupporterSlider";
import { FiExternalLink } from "react-icons/fi";

function Home() {
  const history = useHistory();
  return (
    <div className="navgurukul-homepage">
      <div className="home-page-bg text-white home-page-ng ">
        <div class="rgba-black-strong">
          <div className="container">
            <div class="row ">
              <div class="col-lg-12 homepage-hero-data mt-5">
                <h2 class="  home-page-hero-section-data mb-3">
                  {" "}
                  The Gurukul for the New Age India and its New Generation{" "}
                </h2>
                <p className="mt-0 section-para home-page-hero-section-data-p mb-3">
                  {" "}
                  We are a non-profit dedicated to bring affordable tech
                  education to underprivileged girls in India
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
      <section className="media-scroll-section py-5 d-flex flex-column justify-content-center">
        <h3 className="align-self-center mb-3">In the Media</h3>
        <hr className="align-self-center heading-hr" />
        <Slider />
      </section>

      <section className="my-5 d-flex flex-column align-items-center our-initiatives">
        <h3 className="text-center mb-3">Our Initiatives</h3>
        <hr className="heading-hr" />
        <div class="container mt-0">
          <div class="row">
            <div class="col-lg-6 initiative-card-parent col-md-12 mb-4 mb-md-2">
              <div class="bg-image1 initiative-card card  shadow-1-strong">
                <Link to="/job-course">
                  <div className="Initiatives-bg-color">
                    <div
                      class="card-body text-white  "
                      title="Guaranteed Job Courses"
                    >
                      <h3 class="card-title mb-3   card-main-text  card-heading ">
                        {" "}
                        Guaranteed Job Courses{" "}
                      </h3>
                      <p class="card-text section-para   card-dic">
                        Fully-funded courses in software engineering and design
                        with guaranteed jobs
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div className="col-lg-6 initiative-card-parent mb-md-2">
              <div className="bg-image2 initiative-card card  shadow-1-strong">
                <a href="https://www.merakilearn.org/" target="_blank">
                  <div className="Initiatives-bg-color">
                    <div className="card-body text-white">
                      <div
                        className="d-flex align-items-end"
                        title="Learn Online with Meraki"
                      >
                        <h3 class="card-title mb-3  card-main-text text-center card-heading ">
                          Learn Online with Meraki{" "}
                        </h3>
                        <FiExternalLink className="ml-3 external-link-icon" />
                      </div>
                      <p class="card-text  section-para  card-dic ">
                        Get started with programming in Python, English and
                        Typing
                      </p>
                    </div>
                  </div>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
        <div class="container mt-4">
          <div class="row">
            <div class="col-lg-6 initiative-card-parent col-md-12 mb-4 mb-md-2">
              <div class="bg-image3 initiative-card card shadow-1-strong">
                <Link to="/cif">
                  <div className="Initiatives-bg-color">
                    <div
                      class="card-body text-white"
                      title="Code India Fellowships"
                    >
                      <h3 class="card-title mb-3   card-main-text card-heading">
                        {" "}
                        Code India Fellowships
                      </h3>
                      <p class="card-text section-para  card-dic">
                        Nurture programming skills in the next generation of
                        India’s youth with your expertise
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>

            <div class="col-lg-6 initiative-card-parent mb-md-2">
              <div class="bg-image4 initiative-card card shadow-1-strong">
                <Link to="/nglabs">
                  <div className="Initiatives-bg-color">
                    <div class="card-body text-white" title="NG Labs">
                      <h3 class="card-title mb-3   card-main-text card-heading">
                        {" "}
                        NG Labs{" "}
                      </h3>
                      <p class="card-text section-para  card-dic">
                        Experiments in non-profit space for otherwise for-profit
                        solutions such as non-profit Uber
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container consult text-left text-md-center w-50 mt-5">
        <p className="section-para ">
          <span className="fw-bold">Techalms Consulting:</span> A talent group
          ready to fly in, solve your problems and leave by leaving happy faces
          at the clientplace{" "}
        </p>

        <p className="text-secondary text-center mb-0"> Coming soon.........</p>
      </section>

      <section className="our-partners text-center  d-flex flex-column">
        <h3 className="align-self-center mb-3 ">Our Partners</h3>
        <hr className="align-self-center heading-hr" />
        <PartnerSlider />

        <div class="d-flex flex-column align-items-center justify-content-center align-items-center ">
          <h3 className=" mb-4"> Bring a change! </h3>
          <button
            class="btn regular-btn our-partner-btn section-para text-white partner "
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://forms.gle/NfXdR1dg4zpSyYvZ9", "_blank");
            }}
          >
            Partner with us
          </button>
        </div>
      </section>

      <section className="d-flex home-page-supporters flex-column align-items-center justify-content-center mb-5 mt-0 ">
        <h3 className=" mb-3">Our Supporters</h3>
        <hr className="heading-hr" />
        <div class="container ">
          <SupporterSlider />
        </div>
      </section>
    </div>
  );
}

export default Home;
