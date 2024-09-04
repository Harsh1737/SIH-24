import React from "react";

const SkillSelector = ({ text, onAddSkill, onRemoveSkill }) => {
  return (
    <button
      type="button"
      onClick={() => {
        onAddSkill(text);
        onRemoveSkill(text);
      }}
      style={{
        backgroundColor: "#5a8bf7",
        color: "#ffffff",
        padding: "8px 16px",
        borderRadius: "4px",
        margin: "4px",
        cursor: "pointer",
        border: "none",
      }}
      onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#2563eb")}
      onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#5a8bf7")}
    >
      {text} <span style={{ fontWeight: "bold" }}>+</span>
    </button>
  );
};

export default SkillSelector;
