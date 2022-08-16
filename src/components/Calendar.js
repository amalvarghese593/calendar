import React, { useState } from "react";
import "./index.css";

export const Calendar = () => {
  const [minToDate, setMinToDate] = useState();
  const [maxFromDate, setMaxFromDate] = useState();
  // const [toDate, setToDate] = useState();
  // const [fromDate, setFromDate] = useState();
  const maxDateHandler = (e) => {
    const val = e.target.value;
    setMinToDate(val);
  };
  const minDateHandler = (e) => {
    const val = e.target.value;
    setMaxFromDate(val);
  };
  return (
    <div>
      <h2>Select date</h2>
      <div className="input-wrapper-container">
        <div className="input-wrapper">
          <div className="input-container">
            <input
              type="date"
              name=""
              // value={fromDate}
              max={maxFromDate}
              onChange={maxDateHandler}
              id=""
            />
          </div>
          &nbsp;&nbsp; <i className="fa-solid fa-arrows-left-right"></i>
          &nbsp;&nbsp;
          <div className="input-container">
            <input
              min={minToDate}
              // value={toDate}
              onChange={minDateHandler}
              type="date"
              name=""
              id=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};
