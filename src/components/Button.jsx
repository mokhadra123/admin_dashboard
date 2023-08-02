import React from "react";

const Button = ({ bgColor, color, size, text, borderRadius, icon }) => {
  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: bgColor,
          color,
          borderRadius,
          icon,
        }}
        className={`text-${size} p-3 hover:drop-shadow-xl`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
