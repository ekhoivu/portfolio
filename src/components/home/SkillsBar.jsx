import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

function SkillsBar({ skill, value, label, isScrolled }) {
  return (
    <div style={{ width: "95%" }}>
      <p className="lead mb-1 mt-2">{skill}</p>
      <ProgressBar
        className={!isScrolled ? "progress" : " progress-bar-animation"}
        now={value}
        label={label}
      />
    </div>
  );
}

export default SkillsBar;
