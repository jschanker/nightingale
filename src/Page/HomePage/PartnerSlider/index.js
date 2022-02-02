import "./style.css";
import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import image from "./images/impactellipse.png";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left
          ? "partners-carousal-arrow--left"
          : "partners-carousal-arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

function PartnerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      // rtl: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 3, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );
  return (
    <div className="slider pb-5">
      <>
        <div className="navigation-wrapper mt-5">
          <div ref={sliderRef} className="keen-slider">
            <div className="partners-carousal-cards">
              <div className="keen-slider__slide number-slide">
                <div className="partition-carousal-content my-3">
                  <img className="partition-carousal-content-img" src={image} />
                  <div className="partition-carousal-content-name fw-semiBold mt-3">
                    Nasa
                  </div>
                  <p className="mb-3">
                    “Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.”
                  </p>
                  <span className="align-self-end mr-3 fw-semiBold">
                    - Suresh G, Program Director
                  </span>
                </div>
              </div>
              <div className="keen-slider__slide number-slide">
                <div className="partition-carousal-content my-3">
                  <img className="partition-carousal-content-img" src={image} />
                  <div className="partition-carousal-content-name fw-semiBold mt-3">
                    Hope Foundation
                  </div>
                  <p className="mb-3">
                    “Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.”
                  </p>
                  <span className="align-self-end mr-3 fw-semiBold">
                    - Suresh G, Program Director
                  </span>
                </div>
              </div>
              <div className="keen-slider__slide number-slide">
                <div className="partition-carousal-content my-3">
                  <img className="partition-carousal-content-img" src={image} />
                  <div className="partition-carousal-content-name fw-semiBold mt-3">
                    Dole
                  </div>
                  <p className="mb-3">
                    “Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.”
                  </p>
                  <span className="align-self-end mr-3 fw-semiBold">
                    - Suresh G, Program Director
                  </span>
                </div>
              </div>
              <div className="keen-slider__slide number-slide">
                <div className="partition-carousal-content my-3">
                  <img className="partition-carousal-content-img" src={image} />
                  <div className="partition-carousal-content-name fw-semiBold mt-3">
                    Bunnie
                  </div>
                  <p className="mb-3">
                    “Nulla Lorem mollit cupidatat irure. Laborum magna nulla
                    duis ullamco cillum dolor. Voluptate exercitation incididunt
                    aliquip deserunt reprehenderit elit laborum.”
                  </p>
                  <span className="align-self-end mr-3 fw-semiBold">
                    - Suresh G, Program Director
                  </span>
                </div>
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <>
              <Arrow
                left
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.prev()
                }
                disabled={currentSlide === 0}
              />

              <Arrow
                onClick={(e) =>
                  e.stopPropagation() || instanceRef.current?.next()
                }
                disabled={
                  currentSlide ===
                  instanceRef.current.track.details.slides.length - 1
                }
              />
            </>
          )}
        </div>
        {loaded && instanceRef.current && (
          <div className="dots">
            {[
              ...Array(instanceRef.current.track.details.slides.length).keys(),
            ].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    instanceRef.current?.moveToIdx(idx);
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                ></button>
              );
            })}
          </div>
        )}
      </>
    </div>
  );
}

export default PartnerSlider;
