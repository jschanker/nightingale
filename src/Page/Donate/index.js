import React from "react";
import "./styles.css";
import middleImg from "./assets/midImg.png";

function Donate() {
  return (
    <main className="donate-page d-flex flex-column justify-content-center align-items-center">
      <div className="page-content d-flex flex-column justify-content-center align-items-center">
        <section className="container donate-page-section mt-4 d-flex flex-column align-items-center">
          <h3 className="section-head mt-5 mb-3">Donate to NavGurukul</h3>
          <hr className="heading-hr" />
          <div className="d-flex account-details justify-content-center align-items-center">
            <div className="d-flex flex-column text-left fw-bold">
              <span>UPI ID</span>
              <span>Name</span>
              <span>Account Number</span>
              <span>IFSC Code</span>
            </div>
            <div className=" d-flex section-para flex-column text-left pl-2 pl-md-4 ">
              <span>navgurukulf@kotak</span>
              <span>Navgurukul Foundation for Social Welfare</span>
              <span>0512251778</span>
              <span>KKBK0004260</span>
            </div>
          </div>
          <hr className="w-30 partition-line mb-0" style={{ color: "#cdcdcd" }}></hr>

          <div className="donatation-payment mt-md-3 pt-3 mt-0 d-flex justify-content-center align-items-center w-100">
            <p className="w-100 fw-bold">
              You can also directly pay (2% charge but quick) using our payment
              gateway
            </p>
          </div>
          <button
            type="button"
            class="donate-page-button regular-btn"
            onClick={(e) => {
              e.preventDefault();
              window.open("https://www.instamojo.com/@navgurukul/", "_blank");
            }}
          >
            Donate to Navgurukul
          </button>
          <div className="donate-content d-flex justify-content-center align-items-center w-100">
            <p className="w-75 mt-3 mt-md-5 pt-3">
              You may also pledge a <b> monthly donation </b> to us. Any pledged
              amount is a huge support for us. Just having you by our side fills
              us with gratitude & an energy to do better.
            </p>
          </div>
          <div className="container  donate-button-container">
            <div className="row">
              <div class="col-md col-sm-12 px-0 pxmd-3">
                <button
                  type="button"
                  class="btn btn-primary donate-button dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://app.lotuspay.com/merchant/plan/AL0092PDFN2KYC",
                      "_blank"
                    );
                  }}
                >
                  ₹ 100 / month
                </button>
                <button
                  type="button"
                  class="btn btn-primary donate-button dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://app.lotuspay.com/merchant/plan/AL00681BQGXHMI",
                      "_blank"
                    );
                  }}
                >
                  ₹ 500 per month
                </button>
                <button
                  type="button"
                  class="btn btn-primary donate-button dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://app.lotuspay.com/merchant/plan/AL0074EBKKW2EI",
                      "_blank"
                    );
                  }}
                >
                  ₹ 1000 per month
                </button>
                <button
                  type="button"
                  class="btn btn-primary  donate-button dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://app.lotuspay.com/merchant/plan/AL0022DKW1KZGD",
                      "_blank"
                    );
                  }}
                >
                  ₹ 2500 per month
                </button>
                <button
                  type="button"
                  class="btn btn-primary  donate-button dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://app.lotuspay.com/merchant/plan/AL0042NG8XJV3P",
                      "_blank"
                    );
                  }}
                >
                  ₹ 5000 per month
                </button>
                <button
                  type="button"
                  class="btn btn-primary  donate-button dashed-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://app.lotuspay.com/merchant/plan/AL0012PAC9ZPYV",
                      "_blank"
                    );
                  }}
                >
                  ₹ 10000 per month
                </button>
              </div>
            </div>
          </div>
          <div className="about-donation w-100 d-flex flex-column justify-content-center align-items-center">
            <p className="w-50 mb-0">
              Any amount donated to NavGurukul will be eligible/ not eligible
              for tax exemption under 80CCC.
            </p>
          </div>
        </section>
        {/* <section className="d-flex flex-column donate-page-section donate-page-image-section">
          <h3 className="mt-5 mb-3 section-head">
            Your Donations Create Impact
          </h3>
          <hr className="heading-hr align-self-center" />
          <img className="middleImg" src={middleImg}></img>
          <div className="donation-impact-data d-flex justify-content-around my-5">
            <span>
              <span className="section-head">160+</span>
              <p className="">Software Development Jobs</p>
            </span>
            <span>
              <span className="section-head">4000+</span>
              <p className="">Online Students</p>
            </span>
          </div>
          <div className="donation-impact-data donation-impact-data-2 d-flex justify-content-around mt-5 ">
            <span>
              <span className="section-head">5</span>
              <p className="">States across India</p>
            </span>
          </div>
          
        </section> */}
        <section className="container donate-page-section csr-queries ">
          <h3 className="section-head mb-3">
            Are you a corporation and taken an interest in what we do?
          </h3>
          {/* <button type="button" class="btn btn-primary button-colour"> */}
          <button
            type="button"
            class=" donate-page-button regular-btn mt-0 contact-button mb-3"
            onClick={(e) => {
              e.preventDefault();
              window.open(
                "https://docs.google.com/forms/d/e/1FAIpQLSdehRy3gDHgkj4bC-0AehiCNrk1_WgP39Zm7-l0YXowREupdw/viewform",
                "_blank"
              );
            }}
          >
            Contact Us for CSR Enquiries
          </button>
        </section>
      </div>
    </main>
  );
}

export default Donate;
