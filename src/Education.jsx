import React, { useState } from "react";

const Education = (props) => {
  return (
    <>
      <div className="education-container">
        <div className="date">
          {props.start} - {props.end}
        </div>
        <div>
          <div className="bold">{props.school}</div>
          <div>{props.degree}</div>
        </div>
      </div>
    </>
  );
};

export default Education;
