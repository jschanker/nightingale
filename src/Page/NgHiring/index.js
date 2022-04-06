import React, { useState, useEffect } from "react";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "./styles.css";
import backgroundImg from "./assets/section-bg.png";
import user from "./assets/user-icon.png";
import LinkedIn from "../Components/LinkedIn";
import Twitter from "../Components/Twitter";
import pdf from "./assets/placement.pdf";

function shuffleObject(obj) {
  let newObj = {};
  var keys = Object.keys(obj);
  keys.sort(function (a, b) {
    return Math.random() - 0.5;
  });
  keys.forEach(function (k) {
    newObj[k] = obj[k];
  });
  return newObj;
}

function Popup(props) {
  return (
    <div className="description-popup">
      <div className="d-flex align-items-center">
        <p className="fw-bold mt-3 mr-3">{props.Name}</p>
        {props.linkedin ? (
          <a href={props.linkedin} target="_blank" className="mr-3">
            <LinkedIn />
          </a>
        ) : (
          <></>
        )}
        {props.twitter ? (
          <a href={props.twitter} target="_blank">
            <Twitter />
          </a>
        ) : (
          <></>
        )}
      </div>
      <p
        className="mt-0"
        style={
          props.Content === "Awaiting content from team member"
            ? { color: "grey" }
            : {}
        }
      >
        {props.Content}
      </p>
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
            href="https://nightingale1.s3.ap-south-1.amazonaws.com/pdf/placement.pdf"
            download="Placement Brief - Navgurukul"
            target="_blank"
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
            {Object.keys(shuffleObject(team)).length ? (
              Object.keys(shuffleObject(team)).map((item) => {
                {if (
                  team[item].Photo &&
                  team[item].Name &&
                  team[item].Content.length &&
                  team[item].Content &&
                  team[item].Designation
                )
                  return (
                    <Tippy
                      animation="fade"
                      interactive="true"
                      duration={[500, 0]}
                      placement={
                        window.screen.availWidth < 650 ? "bottom" : "right"
                      }
                      content={
                        <Popup
                          Name={team[item].Name || "Awaiting Member's Name"}
                          Content={
                            (team[item].Content.length && team[item].Content) ||
                            "Awaiting content from team member"
                          }
                          linkedin={team[item].LinkedIn}
                          twitter={team[item].Twitter}
                        />
                      }
                    >
                      <div className="Card-content flex flex-column col-6 col-md-3">
                        <div className="card card-details">
                          <img
                            className="card-img-top team-info-card-img img-card-hover"
                            src={team[item].Photo ? team[item].Photo : user}
                            alt={team[item].Name.substring(
                              0,
                              team[item].Name.indexOf(" ")
                            )}
                          />
                          <p
                            style={team[item].Name ? {} : { color: "grey" }}
                            className="team-info-card-title"
                          >
                            {team[item].Name
                              ? team[item].Name
                              : "Awaiting Member's Name"}
                          </p>
                          <p
                            style={
                              team[item].Designation ? {} : { color: "grey" }
                            }
                            className="section-para"
                          >
                            {team[item].Designation ||
                              "Awaiting description from team member"}
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
