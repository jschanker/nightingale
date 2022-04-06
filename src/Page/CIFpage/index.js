import React from "react";
import "./style.css";
import "../../Global.css";
import code from "./assets/code.svg";
import chat from "./assets/chat.svg";
import form from "./assets/form.svg";
import greaterThan from "./assets/greater-than.svg";

function CifPage() {
  return (
    <div className="CifPage d-flex flex-column justify-content-center">
      <div className="hero w-100 text-white d-flex justify-content-center align-items-center float-left">
        <div className="data d-flex flex-column align-items-center text-center">
          <h2 className="mb-2">Code India Fellowships</h2>
          <p className="w-75 mb-3">
            Nurture Programming skills in the next generation of India's youth
            with your expertise
          </p>
          <button
            className="btn btn-primary py-2 px-8 regular-btn fw-bold"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSfPvhoUHeHBl_UxZhn2kVurMNhdfYvG8KBUdl3GyXEvCEYh5A/viewform",
                "_blank"
              );
            }}
          >
            Apply to CIF
          </button>
        </div>
      </div>
      <div className="cif text-center d-flex flex-column align-items-center justify-content-center ">
        <h3 className="mb-3">What’s Code India Fellowship</h3>
        <hr className="heading-hr mt-0" />
        <div className="container w-50 ">
          <p className="text-start">
            We are proud to announce the Code India Fellowship, an incredible
            opportunity for the most passionate individuals of our country to
            help take programming and coding to the remotest parts of India.
          </p>
          <p className="text-start">
            Aspiring to impart the knowledge, skills and a certain strength of
            character to the young minds of tomorrow, the Code India Fellowship
            is designed specifically to help better our future while
            simultaneously giving our fellows a chance to recognize the current
            realities of what life is like on the other side.
          </p>
          <p className="text-start">
            The Code India Fellows will be placed in different organisations in
            different parts of the country like Delhi, Bangalore, Jammu,
            Dharamshala, etc, for the duration of a year, to teach coding and
            programming to the local children, with an emphasized focus on young
            girls. Tasked with the responsibility of overseeing the growth and
            educational journey of young children, our fellows have the explicit
            satisfaction of helping students, across the country, take their
            first steps into a brighter future.
          </p>
        </div>
      </div>
      <div className="offer text-center d-flex flex-column align-items-center justify-content-center ">
        <h3 className="mb-3">What We Offer</h3>
        <hr className="heading-hr" />
        <div className="container w-50 text-start">
          <div className="row m-1 d-flex ">
            <div className="col-sm-6 px-4 mb-3 position-relative">
              <span className="fw-bold">Stipend: </span>INR 25,000 per month
            </div>
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Free boarding and lodging
            </div>
          </div>
          <div className="row m-1 d-flex">
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Training to become equipeed with in-house education practices of
              the programme
            </div>
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Opportunities to better understand tenets of civic professionalism
              and social responsibility
            </div>
          </div>
          <div className="row m-1 d-flex">
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Chance to learn skills of self-reliance, willpower, patience,
              creativity and leadership
            </div>
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Opportunity to foster the growth of the children that come from
              some of the most disadvantaged communities in India
            </div>
          </div>
        </div>
      </div>
      <div className="looking text-center d-flex flex-column align-items-center justify-content-center ">
        <h3 className="mb-3">Who We Are Looking For</h3>
        <hr className="heading-hr" />
        <div className="container f-Nuni text-start mb-1 w-50">
          <div className="row m-1 d-flex">
            <div className="col-sm-6 px-4 mb-3 position-relative">
              People motivated to bring a positive change in the lives of
              children that did not have the same opportunities as us
            </div>
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Professional experience in programming (frontend, backend or both)
            </div>
          </div>
          <div className="row m-1 d-flex">
            <div className="col-sm-6 px-4 mb-3 position-relative">
              Aptitude for critical thinking and problem solving
            </div>
          </div>
          <span className="text-gray">
            We encourage women to apply. This is a spectacular opportunity for
            freshers and recent graduates who are passionate to work in the
            field of social work.
          </span>
        </div>
      </div>
      <div className="description text-center d-flex flex-column align-items-center justify-content-center ">
        <h3 className="mb-3">Role Description</h3>
        <hr className="heading-hr" />
        <div className="container text-start mb-1 w-50">
          <div className="sub-section">
            <span className="mb-3 d-block fw-bold">Teaching</span>
            <ul className="ml-3 pl-2 pl-md-3">
              <li>
                Support young children by teaching programming or coding through
                application of innovative teaching techniques
              </li>
              <li>
                Help with curriculum design involving its structure, forms of
                delivery, method of assessment and approach to teaching
              </li>
              <li>
                Mentor the students in their study and help them with learning
                problems
              </li>
              <li>Formulate methods for evaluating teaching outcomes</li>
            </ul>
          </div>
          <div className="sub-section">
            <span className="mb-3 fw-bold d-block">
              Managing people and resources
            </span>
            <ul className="ml-3 pl-2 pl-md-3">
              <li>Manage your teaching and administrative activities</li>
              <li>
                Prioritise the tasks as per the agreed objectives to ensure they
                are completed on time
              </li>
              <li>
                Appreciating the individual needs of students, their
                circumstances and tailoring the support according to it
              </li>
            </ul>
          </div>
          <div className="sub-section">
            <span className="mb-3 fw-bold d-block">
              Academic administration
            </span>
            <ul className="ml-3 pl-2 pl-md-3">
              <li>
                Undertaking various administrative responsibilities as required,
                including assessment of progress, student attendance, teaching
                quality, student experience, etc
              </li>
              <li>
                Participating in regular interactions with other CIF fellows and
                be a part of the peer-to-peer learning process
              </li>
            </ul>
          </div>
          <div className="sub-section mb-0">
            <span className="mb-3 fw-bold d-block">
              Documentation and reporting
            </span>
            To document your journey as a fellow and prepare a report at the end
            of the Fellowship
          </div>
        </div>
      </div>
      <div className="application text-center d-flex flex-column align-items-center justify-content-center  mx-3 mx-md-0">
        <h3 className="mb-3">Application Process</h3>
        <hr className="heading-hr" />
        <div className="container text-center w-50">
          <div className="row my-2 d-flex flex-column flex-md-row align-items-center justify-content-around">
            <div className="d-flex fw-600 align-items-center mb-3  justify-content-center">
              <img src={form} alt="" className="mr-0.5" />
              Fill the Application form
            </div>
            <div className="sign position-relative mb-3  justify-content-center">
              <img src={greaterThan} alt="" className="mr-0.5" />
            </div>
            <div className="d-flex fw-600 align-items-center mb-3  justify-content-center">
              <img src={code} alt="" className="mr-0.5" />
              Basic coding test
            </div>
            <div className="sign position-relative mb-3  justify-content-center">
              <img src={greaterThan} alt="" className="mr-0.5" />
            </div>
            <div className="d-flex fw-600 align-items-center mb-3  justify-content-center">
              <img src={chat} alt="" className="mr-0.5" />
              In-person/Online conversation
            </div>
          </div>
        </div>
        <span className="w-40 mb-3 section-para">
          Are you ready to nurture programming skills in the next generation of
          India’s youth with your expertise
        </span>
        <button
          className="btn btn-primary text-white mb-1 py-2 px-8 regular-btn fw-bold"
          onClick={(e) => {
            e.preventDefault();
            window.open(
              "https://docs.google.com/forms/d/e/1FAIpQLSfPvhoUHeHBl_UxZhn2kVurMNhdfYvG8KBUdl3GyXEvCEYh5A/viewform",
              "_blank"
            );
          }}
        >
          Apply to CIF
        </button>
      </div>
      <div className="questions text-center d-flex flex-column align-items-center justify-content-center ">
        <h3 className="mb-3">Have Questions?</h3>
        <hr className="heading-hr" />
        <p>Connect with us anytime for more information</p>
        <div className="contact row flex-column flex-sm-row w-40 my-2 fw-600 text-primary">
          <div className="email col text-decoration-none">
            <span className="text-black">Via email: </span>
            <a href="mailto:cif@navgurukul.org" className="text-primary">
              cif@navgurukul.org
            </a>{" "}
          </div>
          <div className="phone col">
            <span className="text-black text-decoration-none">Via phone: </span>
            +91 8891300300
          </div>
        </div>
      </div>
    </div>
  );
}

export default CifPage;
