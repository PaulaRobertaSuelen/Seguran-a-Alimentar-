import React from "react";
import "./styles.css";

export default function TextInsideImage({
  image,
  title,
  text,
  imageStyles,
  fontSize = 14,
  color,
  textStyles,
  imageWidth = 300,
  imageHeight = 300,
}) {
  return (
    <div
      className="text-inside-img-ctn"
      style={{ width: imageWidth, height: imageHeight }}
    >
      <img
        src={image}
        alt=""
        style={imageStyles}
        width={imageWidth}
        height={imageHeight}
        className="text-inside-img-img"
      />
      <div className="text-inside-img-txt">
        <h1>{title}</h1>
        <p
          style={{
            color: color,
            fontSize: fontSize,
            ...textStyles,
            maxWidth: imageWidth * 0.6,
          }}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
