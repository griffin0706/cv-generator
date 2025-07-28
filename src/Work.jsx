import React from "react";

const Work = (props) => {
  return (
    <>
      <div className="education-container">
        <div className="date">
          {props.start} - {props.end}
        </div>
        <div className="flex-gap">
          <div className="bold">{props.company}</div>
          <div className="bold">{props.position}</div>
          <div>{props.description}</div>
        </div>
      </div>
    </>
  );
};

export default Work;
