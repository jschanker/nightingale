import axios from "axios";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Vector from "./assets/Vector";
import "./style.css";
import "../../Global.css";
import svgbackground from "./assets/bg.svg";

function NgLabs() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/projects.json`,
    }).then((res) => {
      setProjects(res.data);
    });
  }, []);
  const [projects, setProjects] = useState([]);
  return (
    <div className="ng-labs d-flex flex-column justify-content-center">
      <div className="main mt-7 mb-2">
        <div className="container px-0 ">
          <div className="row">
            <div className="col-md d-flex flex-column pl-3 pl-md-0  justify-content-center align-items-center align-items-md-start">
              <h3 className="mb-3">
                Nurturing High-Impact Projects in the Non-Profit Space
              </h3>
              <p className="mb-3">
                We aim to work on various experiments and scale the ones that
                become successful. NavGurukul labs will seed open source
                projects that we believe can directly or indirectly contribute
                to the improvement of education system in India
              </p>

              <p className="fw-bold">
                Incubator applications opening up soon...
              </p>
            </div>
            <div className="col-md col-sm-12 col-img">
              <div className="right position-relative">
                <img src={svgbackground} alt="" />
                <Vector />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="projects d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-3">Active Projects</h3>
        <hr className="heading-hr" />
        <div className="container px-0 w-100">
          <div className="row">
            {Object.keys(projects).length ? (
              Object.keys(projects).map((item) => {
                if (projects[item].Status === "Active") {
                  // console.log(projects[item]);
                  return (
                    <div className="col-md-3 px-0 d-flex justify-content-center">
                      <div
                        className="card w-100"
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(projects[item]["Deployed URL"]);
                        }}
                      >
                        <div className="image-container">
                          <img
                            src={projects[item].Thumbnail}
                            alt={projects[item].Workstream.substring(
                              0,
                              projects[item].Workstream.indexOf(" ")
                            )}
                          />
                        </div>
                        <hr className="card_partion_line" />
                        <div className="p-3">
                          <p className="fw-bold mb-2">
                            {projects[item].Workstream}
                          </p>
                          <p className="description mb-2">
                            {projects[item]["Value prop"]}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NgLabs;
