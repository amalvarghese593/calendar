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
    <div style={{ paddingTop: "50px" }}>
      <h2>Select date</h2>
      <div
        className=""
        style={{
          border: "1px solid #555",
          borderRadius: "5px",
          display: "inline-block",
          textAlign: "start",
          // padding: "15px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="input-container input-date">
            <input
              type="date"
              name=""
              // value={fromDate}
              max={maxFromDate}
              onChange={maxDateHandler}
              id=""
              style={{ border: "none", outline: "none" }}
            />
          </div>
          &nbsp;&nbsp; <i className="fa-solid fa-arrows-left-right"></i>
          &nbsp;&nbsp;
          <div className="input-container input-date">
            <input
              min={minToDate}
              // value={toDate}
              onChange={minDateHandler}
              type="date"
              name=""
              id=""
              style={{ border: "none", outline: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
