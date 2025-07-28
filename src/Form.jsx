import React from "react";
import { useState } from "react";
import Resume from "./Resume";
import Icon from "@mdi/react";
import { mdiMenuDown, mdiDelete } from "@mdi/js";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  /* PERSONAL INFO*/
  const [fullname, setFullName] = useState("John Paolo Nora");
  const [email, setEmail] = useState("nora.johnpaolo@gmail.com");
  const [phone, setPhone] = useState("099266335997");
  const [address, setAddress] = useState("Sto. Tomas, Batangas");

  /* EDUCATION*/
  const [toggle, setToggle] = useState(false);
  const [addEduc, setAddEduc] = useState(false);
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [arrEduc, setArrEduc] = useState([
    {
      id: crypto.randomUUID(),
      school: "Batangas State University",
      degree: "Bachelor of Science in Information Technology",
      startDate: "Jul 2012",
      endDate: "Aug 2017",
    },
  ]);

  const educDropdown = () => {
    setAddEduc(false);
    setToggleWork(false);
    setToggle(!toggle);
  };

  const showAddEduc = () => setAddEduc(!addEduc);

  const clearEduc = () => {
    setSchool("");
    setDegree("");
    setStartDate("");
    setEndDate("");
  };
  const cancelEducBtn = () => {
    clearEduc();
    showAddEduc();
  };

  const submitEduc = () => {
    if (school && degree && startDate && endDate) {
      const newEduc = {
        id: crypto.randomUUID(),
        school: school,
        degree: degree,
        startDate: startDate,
        endDate: endDate,
      };
      setArrEduc((prev) => [...prev, newEduc]);
      clearEduc();
    }
  };

  const handleDeleteEduc = (id) => {
    setArrEduc((prev) => prev.filter((element) => element.id !== id));
  };
  console.log(arrEduc);
  /* WORK EXPERIENCE */
  const [toggleWork, setToggleWork] = useState(false);
  const [addWork, setAddWork] = useState(false);
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [description, setDescription] = useState("");
  const [startDateWork, setStartDateWork] = useState("");
  const [endDateWork, setEndDateWork] = useState("");
  const [arrWork, setArrWork] = useState([
    {
      id: crypto.randomUUID(),
      company: "Straive",
      position: "Typesetter / Copy Editor",
      description:
        "Edits received (pre-edited) file ensuring text clarity with regard to spelling, grammar, and syntax; applies client style or specifications. Queries possible discrepancies or ambiguous text. Interprets proofreading marks and validates corrections. Edits articles or files in various formats (onscreen or hard copy). Generates reports via copyedit checking. Alerts superior (supervisor/head/manager) of major concerns or difficulties encountered during copyediting.",
      startDateWork: "Sep 2019",
      endDateWork: "Jan 2022",
    },
    {
      id: crypto.randomUUID(),
      company: "APO Production Inc.",
      position: "Passport on Wheels Support",
      description:
        "Fast, accurately and efficiently encode data. Network troubleshooting. Prepared miscellaneous reports for management using MS Excel. Assisted customers' with concerns regarding their policies. Friendly with all customers, regardless of appearance or disposition.",
      startDateWork: "Aug 2018",
      endDateWork: "Feb 2019",
    },
    {
      id: crypto.randomUUID(),
      company: "Spi Global",
      position: "Data Technician",
      description:
        "Enter data. Maintains databases and client files. Reviewing data for accuracy and making changes if necessary, including identifying errors and making corrections.",
      startDateWork: "Nov 2017",
      endDateWork: "May 2018",
    },
    {
      id: crypto.randomUUID(),
      company: "HTech Corporation",
      position: "Web Developer Intern",
      description:
        "Developed their attendance monitoring system using Laravel, PHP, Bootstrap and PostgreSQL.",
      startDateWork: "Feb 2017",
      endDateWork: "Jun 2017",
    },
  ]);

  const workDropdown = () => {
    setAddWork(false);
    setToggle(false);
    setToggleWork(!toggleWork);
  };

  const showAddWork = () => setAddWork(!addWork);

  const clearWork = () => {
    setCompany("");
    setPosition("");
    setDescription("");
    setStartDateWork("");
    setEndDateWork("");
  };
  const cancelWorkBtn = () => {
    clearWork();
    showAddWork();
  };

  const submitWork = () => {
    if (company && position && startDateWork && endDateWork && description) {
      const newWork = {
        id: crypto.randomUUID(),
        company: company,
        position: position,
        description: description,
        startDateWork: startDateWork,
        endDateWork: endDateWork,
      };
      setArrWork((prev) => [...prev, newWork]);
      clearWork();
    }
  };

  const handleDeleteWork = (id) => {
    setArrWork((prev) => prev.filter((element) => element.id !== id));
  };

  return (
    <>
      <div className="form-container">
        {/* PERSONAL INFO*/}
        <div className="personal-details">
          <h2>Personal Details</h2>
          <div className="input-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              value={fullname}
              onChange={(event) => setFullName(event.target.value)}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="phoneNumber">Phone number</label>
            <input
              id="phoneNumber"
              type="number"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(event) => setAddress(event.target.value)}
              required
            ></input>
          </div>
        </div>

        {/* EDUCATION INFO*/}

        <div className="education-details">
          <div className="education-dropdown">
            <h2>Education</h2>
            <button
              className={toggle ? "dropdown-button rotator" : "dropdown-button"}
              onClick={educDropdown}
            >
              <Icon path={mdiMenuDown} size={1.5} />
            </button>
          </div>

          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="education-dropdown-container flex">
                  {arrEduc.map((educ) => {
                    return (
                      <div key={educ.id} className="educ-list">
                        <div className="selectBtn">{educ.school}</div>
                        <button
                          className="deleteBtn"
                          onClick={() => handleDeleteEduc(educ.id)}
                        >
                          <Icon path={mdiDelete} size={1} />
                        </button>
                      </div>
                    );
                  })}

                  <button className="btn" onClick={showAddEduc}>
                    Add
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {addEduc && toggle && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <form action="">
                  <div className="education-dropdown-container">
                    <div className="input-group">
                      <label htmlFor="school">School</label>
                      <input
                        id="school"
                        type="text"
                        value={school}
                        placeholder="Enter School / University"
                        onChange={(event) => setSchool(event.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="input-group">
                      <label htmlFor="degree">Degree</label>
                      <input
                        id="degree"
                        type="text"
                        value={degree}
                        placeholder="Enter Degree / Field of Study"
                        onChange={(event) => setDegree(event.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="start-end">
                      <div className="input-group">
                        <label htmlFor="startDate">Start Date</label>
                        <input
                          id="startDate"
                          type="text"
                          value={startDate}
                          placeholder="Enter Start Date"
                          onChange={(event) => setStartDate(event.target.value)}
                          required
                        ></input>
                      </div>
                      <div className="input-group">
                        <label htmlFor="endDate">End Date</label>
                        <input
                          id="endDate"
                          type="text"
                          value={endDate}
                          placeholder="Enter End Date"
                          onChange={(event) => setEndDate(event.target.value)}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="button-container">
                      <button
                        type="submit"
                        className="btn"
                        onClick={submitEduc}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={cancelEducBtn}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* WORK INFO*/}

        <div className="education-details">
          <div className="education-dropdown">
            <h2>Work Experience</h2>
            <button
              className={
                toggleWork ? "dropdown-button rotator" : "dropdown-button"
              }
              onClick={workDropdown}
            >
              <Icon path={mdiMenuDown} size={1.5} />
            </button>
          </div>

          <AnimatePresence>
            {toggleWork && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.5 }}
              >
                <div className="education-dropdown-container flex">
                  {arrWork.map((work) => {
                    return (
                      <div key={work.id} className="educ-list">
                        <div className="selectBtn">{work.company}</div>
                        <button
                          className="deleteBtn"
                          onClick={() => handleDeleteWork(work.id)}
                        >
                          <Icon path={mdiDelete} size={1} />
                        </button>
                      </div>
                    );
                  })}

                  <button className="btn" onClick={showAddWork}>
                    Add
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {addWork && toggleWork && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <form action="">
                  <div className="education-dropdown-container">
                    <div className="input-group">
                      <label htmlFor="company">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={company}
                        placeholder="Enter Company"
                        onChange={(event) => setCompany(event.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="input-group">
                      <label htmlFor="position">Position</label>
                      <input
                        id="position"
                        type="text"
                        value={position}
                        placeholder="Enter Position / Job Title"
                        onChange={(event) => setPosition(event.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="input-group">
                      <label htmlFor="description">Job Description</label>
                      <textarea
                        id="description"
                        type="text"
                        value={description}
                        placeholder="Enter Job Description"
                        onChange={(event) => setDescription(event.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div className="start-end">
                      <div className="input-group">
                        <label htmlFor="startDateWork">Start Date</label>
                        <input
                          id="startDateWork"
                          type="text"
                          value={startDateWork}
                          placeholder="Enter Start Date"
                          onChange={(event) =>
                            setStartDateWork(event.target.value)
                          }
                          required
                        ></input>
                      </div>
                      <div className="input-group">
                        <label htmlFor="endDateWork">End Date</label>
                        <input
                          id="endDateWork"
                          type="text"
                          value={endDateWork}
                          placeholder="Enter End Date"
                          onChange={(event) =>
                            setEndDateWork(event.target.value)
                          }
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="button-container">
                      <button
                        type="submit"
                        className="btn"
                        onClick={submitWork}
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        className="btn"
                        onClick={cancelWorkBtn}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <Resume
        fullname={fullname}
        email={email}
        phone={phone}
        address={address}
        arrEduc={arrEduc}
        arrWork={arrWork}
      />
    </>
  );
};

export default Form;
