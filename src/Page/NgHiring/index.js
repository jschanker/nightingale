import React, { useState, useEffect } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";
import user from "./assets/user-icon.png";

function Popup(props) {
  return (
    <div className="description-popup">
      <p className="fw-bold mt-3">{props.Name}</p>
      <p className="mt-0">{props.Content}</p>
    </div>
  );
}

function NgHiring() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/alumni.json`,
    }).then((res) => {
      setTeam(res.data);
    });
  }, []);
  const [team, setTeam] = useState([]);
  return (
    <main className="ng-hiring-page">
      <div className="page-content">
        <section className="container hiring-page-section d-flex flex-column w-100 mb-6">
          <h3 className="section-head mt-3 mt-md-5 mb-3">Hire from Us</h3>
          <hr className="heading-hr align-self-center mb-3" />
          <div className="mt-3">
            <img src={backgroundImg} className="backgroundImg" />
          </div>
          <div className="mt-4 mb-2 d-flex w-100 justify-content-center hiring-page-content">
            <p className="section-para w-70">
              Our Software Engineering and Graphic Design graduates are skilled
              to be productive from Day 1. Take a look at these{" "}
              <b className="fw-bold"> diamond in the roughs</b> who are polished
              gems now.
            </p>
          </div>
          <a
            href="./assets/placement.pdf"
            download="Placement Brief -Navgurukul"
          >
            <button
              type="button"
              class="btn mb-4 f-Nuni fw-bold py-2 regular-btn align-self-center"
            >
              Download Placement Brief
            </button>
          </a>
          <div className="hiring-page-content d-flex justify-content-center ">
            <p className="section-para">
              Contact us directly at{" "}
              <a href="mailto:tnp@navgurukul.org" className="link">
                tnp@navgurukul.org
              </a>{" "}
              for hiring or freelancing projects.
            </p>
          </div>
        </section>
        <section className="hiring-page-section mb-5 d-flex flex-column">
          <h3 className="hiring-section-title section-head mt-3 mb-3">
            Meet Our Recent Graduates
          </h3>
          <hr className="heading-hr align-self-center mb-3" />
          <div className="container hiring-page-card-container px-0 d-flex">
            {Object.keys(team).length ? (
              Object.keys(team).map((item) => {
                {
                  return (
                    <Tippy
                      animation="fade"
                      duration={[500, 0]}
                      placement={
                        window.screen.availWidth < 650 ? "bottom" : "right"
                      }
                      content={
                        <Popup
                          Name={team[item].Name}
                          Content={team[item].Content}
                        />
                      }
                    >
                      <div className="Card-content flex flex-column col-6 col-md-4">
                        <div className="card card-details">
                          <img
                            className="card-img-top team-info-card-img img-card-hover"
                            src={team[item].Photo ? team[item].Photo : user}
                          />
                          <p className="team-info-card-title">
                            {team[item].Name}
                          </p>
                          <p className="section-para">
                            {team[item]["Area of expertise/skills"]}
                          </p>
                        </div>
                      </div>
                    </Tippy>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}

export default NgHiring;
