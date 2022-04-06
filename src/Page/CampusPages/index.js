import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import campusImg1 from "./assets/campus_1.png";
import campusImg2 from "./assets/campus_2.png";
import Campus_data from "./data";
import Modal from "./components/Modal";
import { BsArrowsAngleExpand } from "react-icons/bs";

function CampusPages() {
  const [clickedImg, setClickedImg] = useState(null);
  const [campus, setCampus] = useState("Pune Campus");
  const [data, setData] = useState(Campus_data[campus]);
  const handleClick = (item) => {
    setClickedImg(item);
  };
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/campuses.json`,
    }).then((res) => {
      setData(
        Object.keys(res.data).reduce((prev, next) => {
          return { ...prev, [res.data[next].Name]: res.data[next] };
        }, {})
      );
    });
  }, [campus]);

  return (
    <div className="campus-page d-flex flex-column justify-content-center">
      <div className="campus-description mb-3 d-flex flex-column justify-content-center align-items-center">
        <h3 className="mb-3 mt-5">Our Campuses</h3>
        <hr className="heading-hr mt-0" />
        <div className="container d-flex justify-content-center align-items-center mt-2">
          <div className="d-flex col-12 col-md-6 justify-content-around mb-3 pb-0 pb-md-3">
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Pune Campus");
              }}
              style={
                campus === "Pune Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Pune
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Bangalore Campus");
              }}
              style={
                campus === "Bangalore Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Bengaluru
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Sarjapur Campus");
              }}
              style={
                campus === "Sarjapur Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Sarjapur
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Tripura Campus");
              }}
              style={
                campus === "Tripura Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Tripura
            </span>
            <span
              className="campus-btn"
              name="campuses"
              onClick={(e) => {
                setCampus("Dharmshala Campus");
              }}
              style={
                campus === "Dharmshala Campus"
                  ? { borderBottom: "3px solid #f05f40", fontWeight: "bold" }
                  : {}
              }
            >
              Dharamshala
            </span>
          </div>
        </div>

        {data && data[campus] && (
          <div className="container d-flex-column d-md-flex">
            <div className="col-12 col-md-5 d-flex flex-column">
              <h4 className="mb-3 campus-name">{data[campus].Name}</h4>
              <div className="mb-3 campus-manager">
                <span className="fw-bold">Campus Manager : </span>
                <img src={data[campus].Avatar} className="mx-2" />
                {data[campus]["Campus Manager"]}
              </div>
              <div className="mb-3 campus-address">
                <span className="fw-bold">Address : </span>
                {data[campus].Address}
              </div>
              <div className="mb-3 campus-capacity">
                <span className="fw-bold">Student Capacity : </span>
                {data[campus]["Student Capacity"]}
              </div>

              <div className="mb-3 campus-contact">
                <span className="fw-bold">Contact : </span>
                {data[campus].Contact}
              </div>
            </div>
            <div className="col-12 col-md-7 px-md-0">
              <iframe
                src={data[campus].Map}
                style={{ border: 0, borderRadius: "8px" }}
                className="campus_map"
                loading="none"
              />
            </div>
          </div>
        )}
      </div>
      <div className="container">
        <hr className="campus-dividerLine" />
      </div>
      {data && data[campus] && (
        <div className="campus-gallary mt-3 pb-3 mb-5">
          <div className="container">
            <div className="row pb-3">
              {Array.isArray(data[campus].Photos) ? (
                data[campus].Photos.map((photo) => {
                  return (
                    <div className="col-12 my-3 my-md-3 col-md-6 image_wrapper">
                      <img
                        className="campus_shortImg"
                        src={photo}
                        onClick={() => {
                          handleClick(photo);
                        }}
                      />
                      <BsArrowsAngleExpand className="expand_arrow" />
                    </div>
                  );
                })
              ) : (
                <div className="col-12 my-3 my-md-3 col-md-6 image_wrapper">
                  <img
                    className="campus_shortImg"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                    src={data[campus].Photos ? data[campus].Photos : campusImg1}
                    onClick={() => {
                      handleClick(
                        data[campus].Photos ? data[campus].Photos : campusImg1
                      );
                    }}
                  />
                  <BsArrowsAngleExpand className="expand_arrow" />
                </div>
              )}
            </div>
            {clickedImg && (
              <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusPages;
