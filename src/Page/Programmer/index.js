import React, { useState } from "react";
import "./style.css";
import "../../Global.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import icon1 from "./assets/icon1.png";
import icon2 from "./assets/icon2.png";
import video from "./assets/video.mp4";
import subVideo1 from "./assets/subVideo1.mp4";
import subVideo2 from "./assets/subVideo2.mp4";
import subVideo3 from "./assets/subVideo3.mp4";

function Programmer() {
  const [state, setState] = useState("");
  return (
    <div className="programmers d-flex flex-column justify-content-center">
      <div className="hero-P container my-2 my-sm-5">
        <div className="row d-flex justify-content-between flex-md-column-reverse flex-lg-row flex-md-row">
          <div className="col left-P d-flex flex-column align-items-start">
            <h3 className="section-head">
              Navgurukul One-Year Software Engineering Course
            </h3>
            <div className="input d-flex flex-column justify-content-center align-items-start text-left p-1 w-90">
              <p className="my-2">
                Study in an immersive environment at one of our campuses in
                Pune, Bengaluru or Dharamshala (for boys) with peer learning and
                mentors helping you at each turn.
              </p>
              <p className="my-2">
                To be a part of the Gurukul, all it takes is some determination
                and potential.
              </p>

              <button
                className="btn btn-primary text-white w-100 my-1 fs-sm-1.2  regular-btn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.merakilearn.org/admission", "_blank");
                }}
              >
                Take Test
              </button>

            </div>
          </div>
          <div className="programmers-main-video col d-flex justify-content-center">
            <video
              src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/NEW+student+experience.mp4"
              width="500px"
              height="300px"
              className="programmers-main-video"
              controls
              alt="Experiance at Navgurukul"
            ></video>
          </div>
        </div>
      </div>
      <section className="new_programme d-flex flex-column align-items-center">
        <h3 className="mb-3">Who this Programme is for?</h3>
        <hr className="heading-hr" />
        <div className="container text-start mb-0 d-flex justify-content-center align-items-center">
          <div className="col-12 col-md-8">
            <ul className="mb-0 ">
              <li>
                Youth from underprivileged or low income communities who can’t
                afford expensive college education
              </li>
              <li>
                Students with college degrees who haven’t been able to get a
                good job because of lack of social or economic means.
              </li>
              <li>
                Many of our current students are ones whose parents have humble
                backgrounds and working as a huosehelp, auto-drivers etc.
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="programme_phases  d-flex flex-column align-items-center">
        <h3 className="mb-3">Programme Phases</h3>
        <hr className="heading-hr" />
        <div className="container text-start mb-0 mt-0 px-md-3 px-0 ">
          <div className="phases_card_container d-flex justify-content-between">
            <div className="card  col-12 col-md-4 my-3 my-md-0 text-center py-4 px-2 mx-0 mx-md-3">
              <h4 className="mb-3">Foundational Bootcamp</h4>
              <p className="mb-3">
                Building blocks of learning habits for logical and English
                skillss
              </p>
              <span className="text-secondary">Duration: 1 to 2 months</span>
            </div>
            <div className="card  col-12 col-md-4 my-3 my-md-0 text-center py-4 px-2 mx-0 mx-md-3">
              <h4 className="mb-3">Coding Camp</h4>
              <p className="mb-3">
                Learn coding skills along with English and leadership skills
              </p>
              <span className="text-secondary">Duration: 5 to 6 months</span>
            </div>
            <div className="card  col-12 col-md-4 my-3 my-md-0 text-center py-4 px-2 mx-0 mx-md-3">
              <h4 className="mb-3"> Interview Camp</h4>
              <p className="mb-3">
                Work on interview skills and get a overview of office style work
              </p>
              <span className="text-secondary">Duration: 1 to 2 months</span>
            </div>
          </div>
        </div>
      </section>
      <section className="new_programme_skills  d-flex flex-column align-items-center">
        <h3 className="mb-3">What Skills Do We Teach?</h3>
        <hr className="heading-hr" />
        <div className="container d-flex justify-content-center text-start mb-0">
          <div className="col-12 col-md-8">
            <ul className="mb-0">
              <li className="mb-3 points">
                <span className="fw-bold">Front end development :</span> Web and
                mobile development in Javascript, React.js and Android
              </li>
              <li className="mb-3 points">
                <span className="fw-bold">Back end development :</span> Python,
                Node.js, Javascript
              </li>
              <li className="mb-3 points">
                <span className="fw-bold">Hands-on projects :</span> Clone
                projects for products such as Whatsapp and Facebook
              </li>
              <li className="mb-0 points">
                <span className="fw-bold">Soft Skills :</span> English speaking,
                team work, emotional intelligence and leadership skills
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="our_campus  d-flex flex-column align-items-center">
        <h3 className="mb-3">Our Campuses</h3>
        <hr className="heading-hr" />

        <div className="container text-start mb-0  w-100">
          {" "}
          <p className="mt-0 mb-3 pb-0 pb-md-3 text-center">
            Three campuses at Pune, Bengaluru and Dharamsala (for boys) each
          </p>
          <div className="row">
            <div className="col-12 col-md-6 pl-0">
              <p className="fw-bold">Facilities</p>
              <ul className="mb-0">
                <li className="mb-3 points">
                  Equipped with shared dorms, fully functional kitchen and other
                  amenities of daily use
                </li>
                <li className="mb-3 points">
                  Classrooms and large residential spaces
                </li>
                <li className="mb-3 points">
                  Provision of laptop, internet, mentors, english classes,
                  mental health counselling
                </li>
                <li className="mb-0 points">
                  <span className="fw-bold">
                    All expenses are paid by Navgurukul and free for the student
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 pl-0">
              <p className="fw-bold">Lifestyle and Culture</p>
              <ul className="mb-0">
                <li className="mb-3 points">
                  Self responsibility to take care of activities with discipline
                </li>
                <li className="mb-3 points">
                  Day is divided into learning schedules for various courses
                </li>
                <li className="mb-3 points">
                  Evening includes free and leisure time
                </li>
                <li className="mb-3 points">
                  Our culture is driven by empathy and inclusivity. We believe
                  in compassionate approach to making a safe space for students
                  to learn in
                </li>
                <li className="mb-0 points">
                  We constantly work towards diversity without discrimination
                  based no caste, class, gender and life experiences
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="programme_admissions  d-flex flex-column align-items-center">
        <h3 className="mb-3">Admissions</h3>
        <hr className="heading-hr" />
        <p>Tests can be taken by online or offline means</p>

        <div className="container text-start mb-1 mt-3 d-flex flex-column align-items-center justify-content-center text-start pl-0">
          <div className="col-12 col-md-8">
            <p className="fw-bold mb-3">Admission Criteria</p>
            <ul className="mb-3 pl-4 pb-3">
              <li>Anyone above 16 years of age</li>
              <li>
                Give and pass the test and interview based on 10th level maths
              </li>
              <li>
                No prior education level expectation: Our students have been
                school and college dropouts, 10th or 12th pass as well as degree
                holders such as BSc, BTech
              </li>
              <li>Some level of English is good to have</li>
              <li>
                All students are from low income families of less than 15,000
                INR in urban areas and 10,000 INR in rural areas
              </li>
            </ul>
            <div className="pb-3">
              <p className="fw-bold mb-3">Admission Process</p>
              <p className="mb-3">
                <span className="fw-bold">Maths Test :</span> Questions from 8th
                to 10th grade on ratios and proportions, unitary method,
                percentages and algebra. This test is 1.5 hrs long.
              </p>
              <p className="mb-3">
                <span className="fw-bold">English Interview :</span> As a second
                step, we will call you within 2 days for the English interview.
                The topics are general and you talk to a person for 10 to 15
                minutes. We assess your fluency level, grammar and confidence.
                It does not need to be perfect.
              </p>
              <p className="mb-3">
                <span className="fw-bold">Algebra Interview :</span> A 40 to 50
                minutes of telephonic interview to test knowledge of basic
                algebra (linear equations).
              </p>
              <p className="mb-3">
                <span className="fw-bold">Culture Fit Interview :</span> 30
                minutes telephonic interview to understand the applicants
                motivations and see if they would enjoy Navgurukul community and
                learning culture.
              </p>
            </div>
            <p className="fw-bold mb-3">How to Prepare for the test?</p>
            <ul className="mb-0 pl-4">
              <li>
                Revise basic algebra problems from 8th to 10th level mathematics
              </li>
              <li>
                There will be both easy and medium level questions For English,
              </li>
              <li>
                just speak as much as possible to the best of your ability
              </li>
            </ul>
          </div>
        </div>
      </section>
      <div className="test-p mb-2 mb-sm-5 d-flex flex-column align-items-center">
        <h3 className="mb-3">Conduct a Test in Your Locality</h3>
        <hr className="heading-hr" />
        <div className="container w-100 mb-3 d-flex align-items-center justify-content-center">
          <div className="row d-flex flex-md-row flex-column justify-content-center w-100">
            <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
              <div
                className="card p-3 d-flex flex-column mh-10 bg-bg-card-1 justify-content-top align-items-center text-left text-sm-center w-100 rounded border-0 "
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.merakilearn.org/admission", "_blank");
                }}
              >
                <h4 className="fw-bold my-1 section-head text-center">
                  Online Tests
                </h4>
                <p className="my-1 section-para">
                  Anyone with a smartphone or access to Laptop/Computer can give
                  the test online by registering their phone number
                </p>
              </div>
            </div>
            <div className="col-12 col-md-6 my-2 d-flex justify-content-center">
              <div className="card p-3 d-flex flex-column mh-10 justify-content-top bg-bg-card-2 align-items-center text-left text-sm-center w-100 rounded border-0 second-card">
                <h4 className="fw-bold my-1 section-head text-center">
                  Offline Tests
                </h4>
                <p className="my-1 section-para">
                  If you are proctoring the exam, we will send you the test
                  papers. Upon completion, you can simply send the photos of the
                  answer and student information sheet to us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="students my-2 my-sm-5  d-flex flex-column align-items-center">
        <h3 className="mb-3">Hear From Our Students</h3>
        <hr className="heading-hr" />
        <div className="container w-100  d-flex justify-content-center">
          <div className="row d-flex flex-md-row flex-column justify-content-center w-100 student-video-parent">
            <div className="col-12 video-container col-md-4 mt-3 d-flex align-items-center flex-column">
              <video
                src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/WhatsApp+Video+2022-02-19+at+18.39.06.mp4"
                alt="Priyanka's Journey at Navgurukul"
                width="340"
                height="195"
                controls
              ></video>
              <p className="mt-3 text-center fw-bold">
                Priyanka's Journey at Navgurukul
              </p>
            </div>
            <div className="col-12 video-container col-md-4 mt-3 d-flex align-items-center flex-column">
              <video
                src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/Neha-+Sarjapur+Campus.mp4"
                alt="Pooja's learning experience during COVID"
                width="340"
                height="195"
                controls
              ></video>
              <p className="mt-3 text-center fw-bold">
                Pooja's learning experience during COVID
              </p>
            </div>
            <div className="col-12 video-container col-md-4 mt-3 d-flex align-items-center flex-column">
              <video
                src="https://nightingale1.s3.ap-south-1.amazonaws.com/Videos/NEW+student+experience.mp4"
                alt="Soni's multiculural experience in Navgurukul"
                width="340"
                height="195"
                controls
              ></video>
              <p className="mt-3 text-center fw-bold">
                Soni's multiculural experience in Navgurukul
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="next-step mt-2 mt-sm-5 d-flex flex-column align-items-center">
        <h3 className="mb-3">Ready for the Next Step?</h3>
        <div className="input d-flex flex-column justify-content-center align-items-center mt-3 text-left w-100  ">
          <button
            className="btn btn-primary text-white align-self-center w-100 my-1 regular-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.merakilearn.org/admission", "_blank");
            }}
          >
            Take Test
          </button>
        </div>
      </div>
    </div>
  );
}

export default Programmer;
