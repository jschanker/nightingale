import React, { useState } from "react";
import "./styles.css";

function Header() {
  const [toggle, setToggle] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-color">
      <a class="navbar-brand" href="#">
        <img
          src={require("./assets/logo.png").default}
          // className="nav-logo"
        />
      </a>
      {/* {toggle ? (
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-2"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          <span class="navbar-toggler-icon"></span>
        </button>
      ) : (
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-list-2"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          &
        </button>
      )} */}
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar-list-2"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        // onClick={() => {
        //   setToggle(!toggle);
        // }}
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent"> */}
      <div class="collapse navbar-collapse" id="navbar-list-2">
        <ul className="navbar-nav mr-auto">
          {/* <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li> */}
          {/* <li className="nav-item nav-logo">
            <img
              src={require("./assets/logo.png").default}
              // className="nav-logo"
            />
          </li> */}
          {/* <img classNameName="meraki" src={require("./assets/logo.png")} /> */}
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle header-title"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Our Initiatives
            </a>
            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Guaranteed Job Courses
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="#">
                Learn Online with Meraki
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="#">
                Code India Fellowships
              </a>
              {/* <div className="dropdown-divider"></div> */}
              <a className="dropdown-item" href="#">
                NG Labs
              </a>
            </div>
          </li>
        </ul>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              About
            </a>
            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Our Story
              </a>
              <a className="dropdown-item" href="#">
                Team
              </a>
              <a className="dropdown-item" href="#">
                Gallery
              </a>
              <a className="dropdown-item" href="#">
                Blog
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Get Involved
            </a>
            <div
              className="dropdown-menu dropdown-items"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#">
                Partner With Us
              </a>
              <a className="dropdown-item" href="#">
                Donate
              </a>
              <a className="dropdown-item" href="#">
                Career
              </a>
              <a className="dropdown-item" href="#">
                Volunteer
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Hire from NG
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Meraki
            </a>
          </li>
          <div className="divider language"></div>
          <li className="nav-item dropdown language">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              English
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Hindi
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
