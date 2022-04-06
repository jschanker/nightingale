import React, { useState, useEffect } from "react";
import "./styles.css";
import axios from "axios";
import Tippy from "@tippyjs/react";
import user from "./assets/user-icon.png";
import LinkedIn from "../Components/LinkedIn";
import Twitter from "../Components/Twitter";

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

function TeamPage() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/ng_team.json`,
    }).then((res) => {
      setTeam(res.data);
    });
  }, []);
  const [team, setTeam] = useState([]);
  const [members, setMembers] = useState({
    teamMembers: true,
    volunteers: false,
  });

  return (
    <main className="team-page">
      <div className="team-content">
        <section className="team-section d-flex flex-column justify-content-center align-items-center">
          <h3 className="section-head mb-3">Our Team</h3>
          <hr className="heading-hr " />
          <div className="team-page-content w-50">
            <p className="section-para">
              We are a collective of full timers and volunteers that form the
              backbone aiming to bring affordable education to underprivileged
              girl students across India.
            </p>
          </div>
          <div className="container ">
            <div className="row">
              <div class="col-md team-button-container d-flex justify-content-center align-items-center col-sm-12">
                <button
                  type="button"
                  class="btn section-para regular-btn my-2 mx-3 career-button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://www.notion.so/navgurukul/NG-Job-Board-cc0fc74362214e4a8d31a061ad9559ba",
                      "_blank"
                    );
                  }}
                >
                  Careers at Navgurukul
                </button>
                <button
                  type="button"
                  class="btn section-para btn-primary mx-3 my-2 dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://docs.google.com/forms/d/e/1FAIpQLScHvysncnhJkSMtpdpGl_uPhJWlE81hp6l5m2mvuE1hoxX-dQ/viewform",
                      "_blank"
                    );
                  }}
                >
                  Volunteer with us
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="team-section w-100 mt-4 d-flex flex-column justify center align-items-center">
          {/* <h3 className="section-head">Core Members</h3>
          <hr className="mt-2" /> */}
          <div className="all-members-btns d-flex justify-content-center align-items-center w-100">
            <span
              onClick={() => {
                setMembers({ volunteers: false, teamMembers: true });
              }}
              className={
                members.teamMembers
                  ? "section-head core-team-members members-selector"
                  : "section-para core-team-members members-selector"
              }
              style={
                members.teamMembers
                  ? {
                      borderBottom: "3px solid #f05f40",
                      fontWeight: "bold",
                    }
                  : {}
              }
            >
              Core Team
            </span>
            <span
              onClick={() => {
                setMembers({ teamMembers: false, volunteers: true });
              }}
              className={
                members.volunteers
                  ? "section-head core-team-members members-selector"
                  : "section-para core-team-members members-selector"
              }
              style={
                members.volunteers
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Our Supporters
            </span>
          </div>
          {/* <h4>We will be adding our volunteers soon...</h4> */}
          <div className="container px-0 team-info-cards-container justify-content-md-start">
            {Object.keys(shuffleObject(team)).length ? (
              Object.keys(shuffleObject(team)).map((item) => {
                const condition = members.teamMembers
                  ? "teamMembers"
                  : "volunteers";
                if (
                  (condition === "volunteers" &&
                    team[item].Association === "Volunteer") ||
                  (condition === "teamMembers" &&
                    team[item].Association !== "Volunteer")
                ) {
                  if (
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
                              (team[item].Content.length &&
                                team[item].Content) ||
                              "Awaiting content from team member"
                            }
                            linkedin={team[item].Linkedin}
                            twitter={team[item].Twitter}
                          />
                        }
                      >
                        <div className="Card-content flex flex-column col-6 col-md-3">
                          <div className="card card-details">
                            <img
                              className="card-img-top team-info-card-img img-card-hover"
                              src={team[item].Photo}
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

export default TeamPage;
