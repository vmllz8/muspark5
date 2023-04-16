import React from "react";
import Notification from "../Notification";
import Button from "../Button";
import "./IPhone146Button.css";

function IPhone146Button(props) {
  const { text2, text3, text4 } = props;

  return (
    <div className="container-center-horizontal">
      <form className="iphone-14-5 screen" name="form2" action="form2" method="post">
        <div className="overlap-group1">
          <Notification />
          <a href="javascript:SubmitForm('form2')">
            <img
              className="ellipse-18"
              src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/ellipse-18@2x.png"
              alt="Ellipse 18"
            />
          </a>
          <img
            className="arrow-4"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/arrow-4@2x.png"
            alt="Arrow 4"
          />
        </div>
        <div className="overlap-group">
          <Button />
          <h1 className="text-2">{text2}</h1>
          <div className="text-3">{text3}</div>
          <div className="ellipse-7"></div>
          <img
            className="gg"
            src="https://anima-uploads.s3.amazonaws.com/projects/643c2269724763c3b7e1d758/releases/643c73ee18a727f7c0ccc823/img/gg.png"
            alt="gg"
          />
          <div className="text-4">{text4}</div>
        </div>
      </form>
    </div>
  );
}

export default IPhone146Button;
