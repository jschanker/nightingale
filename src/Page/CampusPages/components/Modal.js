import React from "react";
// BsArrowsAngleExpand



function Modal({ clickedImg, setClickedImg }) {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedImg(null);
    }
  };
  return (
    <>
      <div className="overlay dismiss" onClick={handleClick}>
        <img src={clickedImg} alt="bigger pic" />
        <span className="dismiss" onClick={handleClick}>
          X
        </span>
        {/* <BsArrowsAngleExpand /> */}
      </div>
    </>
  );
}

export default Modal;