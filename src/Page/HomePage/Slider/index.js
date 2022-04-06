import "./style.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
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
function Slider() {
  useEffect(() => {
    axios({
      url: `https://anandpatel504.github.io/tarabai-shinde/data/media.json`,
    }).then((res) => {
      setMedia(res.data);
    });
  }, []);
  const [media, setMedia] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
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
          }, 5000);
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
  // const [partitionSlider, ]
  if (!Object.keys(media).length) return <></>;
  return (
    <div className="media-slider slider">
      <>
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            {Object.keys(media).map((item) => {
              return (
                <a href={media[item].Website} target="_blank">
                  <div className="keen-slider__slide number-slide">
                    <div className="carousal-content">
                      <div className="carousal-image-container">
                        <img
                          className="carousal-img"
                          src={media[item].Logo}
                          alt={media[item].Name.substring(
                            0,
                            media[item].Name.indexOf(" ")
                          )}
                        />
                      </div>
                      <p>{media[item].Description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
            {/* <div className="keen-slider__slide number-slide">
              <div className="carousal-content">
                <div className="carousal-image-container">
                  <img className="carousal-img" src={image} />
                </div>
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  There are many variations of passages of Lorem Ipsum
                  available. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry
                </p>
              </div>
            </div>
            <div className="keen-slider__slide number-slide">
              <div className="carousal-content">
                <div className="carousal-image-container">
                  <img className="carousal-img" src={image} />
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form. There are many variations of passages of Lorem Ipsum
                  available. Lorem Ipsum is simply dummy text of the printing
                  and typesetting industry
                </p>
              </div>
            </div>
            <div className="keen-slider__slide number-slide">
              <div className="carousal-content">
                <div className="carousal-image-container">
                  <img className="carousal-img" src={image} />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text. There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration in some form
                </p>
              </div>
            </div> */}
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

export default Slider;
