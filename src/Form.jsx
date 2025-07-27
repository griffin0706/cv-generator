import React from "react";
import { useState } from "react";
import Resume from "./Resume";
import Icon from "@mdi/react";
import { mdiMenuDown } from "@mdi/js";
import { motion, AnimatePresence } from "framer-motion";

const Form = () => {
  /* PERSONAL INFO*/
  const [fullname, setFullName] = useState("John Paolo Nora");
  const [email, setEmail] = useState("nora.johnpaolo@gmail.com");
  const [phone, setPhone] = useState("09926635997");
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

  const dropdown = () => setToggle(!toggle);
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
  const deleteEducBtn = () => {};
  const editEducBtn = () => {};

  const submit = () => {
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

  return (
    <>
      <div className="form-container">
        {/* PERSONAL INFO*/}
        <div className="personal-details">
          <h2>Personal Details</h2>
          <div className="input-group">
            <label htmlFor="fullName">Full name</label>
            <input
              id="email"
              type="text"
              value={fullname}
              onChange={(event) => setFullName(event.target.value)}
              required
            ></input>
          </div>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              id="fullName"
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
              onClick={dropdown}
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
                transition={{ duration: 0.2 }}
              >
                <div className="education-dropdown-container flex">
                  <div>
                    {arrEduc.map((educ) => {
                      return (
                        <button className="selectBtn" key={educ.id}>
                          {educ.school}
                        </button>
                      );
                    })}
                  </div>
                  <button className="btn" onClick={showAddEduc}>
                    Add
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {addEduc && (
              <motion.div
                initial={{ opacity: 0, y: -10, scaleY: 0.9 }}
                animate={{ opacity: 1, y: 0, scaleY: 1 }}
                exit={{ opacity: 0, y: -10, scaleY: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <form>
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
                      <label htmlFor="school">Degree</label>
                      <input
                        id="school"
                        type="text"
                        value={degree}
                        placeholder="Enter Degree / Field of Study"
                        onChange={(event) => setDegree(event.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="start-end">
                      <div className="input-group">
                        <label htmlFor="school">Start Date</label>
                        <input
                          id="school"
                          type="text"
                          value={startDate}
                          placeholder="Enter Start Date"
                          onChange={(event) => setStartDate(event.target.value)}
                          required
                        ></input>
                      </div>
                      <div className="input-group">
                        <label htmlFor="school">End Date</label>
                        <input
                          id="school"
                          type="text"
                          value={endDate}
                          placeholder="Enter End Date"
                          onChange={(event) => setEndDate(event.target.value)}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="button-container">
                      <button className="btn" onClick={submit}>
                        Save
                      </button>
                      <button className="btn" onClick={cancelEducBtn}>
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
      />
    </>
  );
};

export default Form;
