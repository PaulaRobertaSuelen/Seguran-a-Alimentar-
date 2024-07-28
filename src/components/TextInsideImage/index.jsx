import React from "react";
import "./styles.css";

export default function TextInsideImage({
  image,
  title,
  text,
  color,
  textStyles,
}) {
  return (
    <div
      className="text-inside-img-ctn"
      style={{ width: "300px", height: "300px" }}
    >
      <img
        src={image}
        alt=""
        style={{ width: "300px", height: "300px" }}
        className="text-inside-img-img"
      />
      <div className="text-inside-img-txt">
        <h1>{title}</h1>
        <p
          style={{
            color: color,
            fontSize: "14px",
            ...textStyles,
            maxWidth: "300px",
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
