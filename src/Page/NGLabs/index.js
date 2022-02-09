import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Vector from "./assets/Vector";
import "./style.css";
import "../../Global.css";
import svgbackground from "./assets/bg.svg";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import Timeline from "./assets/Timeline.png";

function NgLabs() {
  return (
    <div className="ng-labs d-flex flex-column justify-content-center">
      <div className="main mt-7 mb-2">
        <div className="container ">
          <div className="row">
            <div className="col-md d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <h3 className="mb-3">
                Nurturing High-Impact Projects in the Non-Profit Space
              </h3>
              <p className="mb-3">
                We aim to work on various experiments and scale the ones that
                become successful. NavGurukul labs will seed open source
                projects that we believe can directly or indirectly contribute
                to the improvement of education system in India
              </p>
              <button className="btn btn-primary text-white regular-btn">
                Seek Incubation Support
              </button>
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
        <h3 className="mb-3">Current Projects</h3>
        <hr className="heading-hr mb-3" />
        <div className="container w-50 my-3 mb-5">
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center my-3">
              <a href="https://www.merakilearn.org/">
                <div className="card p-4 d-flex flex-column justify-content-center align-items-center text-center mb-1 rounded border-white">
                  <img src={icon1} alt="" />
                  <h4 className="mt-3 fw-bold">Meraki</h4>
                  <p>
                    Some outrageous impact of the project
                  </p>
                </div>
              </a>
            </div>
            <div className="col d-flex justify-content-center align-items-center my-3">
              <a href="#">
                <div className="card p-4 d-flex flex-column justify-content-center align-items-center text-center mb-1 rounded border-white">
                  <img src={icon2} alt="" />
                  <h4 className="mt-3 fw-bold">Conscious Ad Network</h4>
                  <p>
                    Some outrageous impact of the project
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="timeline my-4 d-flex flex-column justify-content-center align-items-center mb-1">
        <h3 className="">Project Timeline (Next 12 months)</h3>
        <hr className="heading-hr" />
        <div className="container w-75 my-5 mb-2 d-flex flex-column justify-content-center align-items-center">
          <img src={Timeline} alt="" className="mb-5" />
        </div>
      </div> */}
      <div className="idea d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-4">Have an Idea in Works?</h3>

        <button className="btn btn-primary text-white regular-btn">
          Seek Incubation Support
        </button>
      </div>
    </div>
  );
}

export default NgLabs;
