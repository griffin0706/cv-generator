import React from "react";
import { Component } from "react";
import Icon from "@mdi/react";
import { mdiEmail, mdiCellphone, mdiMapMarker } from "@mdi/js";
import Education from "./Education";

const Resume = ({ fullname, email, address, phone, arrEduc }) => {
  return (
    <div className="resume-container">
      <div className="personal-info-section">
        <div className="personal-info">
          <h1>{fullname}</h1>
          <div className="contact-info">
            <div className="contact-group">
              <Icon path={mdiEmail} size={1} />
              <div>{email}</div>
            </div>
            <div className="contact-group">
              <Icon path={mdiCellphone} size={1} />
              <div>{phone}</div>
            </div>
            <div className="contact-group">
              <Icon path={mdiMapMarker} size={1} />
              <div>{address}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="education-section">
        <h2>Education</h2>
        {arrEduc.map((educ) => {
          console.log(educ);
          return (
            <Education
              key={educ.id}
              school={educ.school}
              degree={educ.degree}
              start={educ.startDate}
              end={educ.endDate}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
