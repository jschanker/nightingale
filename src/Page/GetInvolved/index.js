import React from "react";
import "./styles.css";
import Header from "../Header";
import img1 from "../GetInvolved/assets/Rectangle-1.png";
import img2 from "../GetInvolved/assets/Rectangle-2.png";
import img3 from "../GetInvolved/assets/Rectangle-3.png";
import img4 from "../GetInvolved/assets/Rectangle-4.png";
import Footer from "../Footer";

function GetInvolved() {
  return (
    <>
      <main className="home">
        <div className="page-content">
          <section className="page-section first-page-section">
            <p className="page-subtitle">Get Involved</p>
            <p className="page-subtitle">
              ksjdfdslfsdfmlskfmlkesdlmfksmldkflsdkflksdlfklsdmkfdsmlkf <br />
              sklfjslkjqlkdjqklsjdklqsjdkqsdjklqdjklqsdjklqsjdqlkjd
            </p>
          </section>
          <div className="container">
            <div className="row row-card">
              <div className="col-sm">
                <div className="card">
                  <div className="img-container">
                    <img className="card-img" src={img1} />
                  </div>
                  <div className="content">
                    <p>Sponsors</p>
                    <p>
                      Your Sponsor can lead us <br /> to future India Education
                    </p>
                    <p>Know More</p>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <div className="img-container">
                    <img
                      className="card-img"
                      // src="https://iso.500px.com/wp-content/uploads/2019/10/ON-THE-LI-RIVER-BY-TOBIAS-HAGG-1500x1000.jpeg"
                      // src={require("../GetInvolved/assets/Rectangle-2.png")}
                      src={img2}
                    />
                  </div>
                  <div className="content">
                    <p>Partners</p>
                    <p>
                      Your Partners can lead us <br /> to future India Education
                    </p>
                    <p>Know More</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-card">
              <div className="col-sm">
                <div className="card">
                  <div className="img-container">
                    <img
                      className="card-img"
                      // src="https://iso.500px.com/wp-content/uploads/2019/10/ON-THE-LI-RIVER-BY-TOBIAS-HAGG-1500x1000.jpeg"
                      // src={require("../GetInvolved/assets/Rectangle-3.png")}
                      src={img3}
                    />
                  </div>
                  <div className="content">
                    <p>Volunteer</p>
                    <p>
                      Your Volunteer can lead us <br /> to future India
                      Education
                    </p>
                    <p>Know More</p>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <div className="card">
                  <div className="img-container">
                    <img
                      className="card-img"
                      // src="https://iso.500px.com/wp-content/uploads/2019/10/ON-THE-LI-RIVER-BY-TOBIAS-HAGG-1500x1000.jpeg"
                      // src={require("../GetInvolved/assets/Rectangle-4.png")}
                      src={img4}
                    />
                  </div>
                  <div className="content">
                    <p>Jobs</p>
                    <p>Got placed with us and jobs</p>
                    <p>Know More</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="page-section first-page-section">
            <p className="page-subtitle">Go Back</p>
          </section>
        </div>
      </main>
    </>
  );
}

export default GetInvolved;
