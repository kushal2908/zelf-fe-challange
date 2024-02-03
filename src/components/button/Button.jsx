import React, { useState } from "react";
import classes from "./style.module.css";
import {
  defaultColor,
  defaultColorHover,
  primaryColor,
  primaryColorHover,
} from "./palette";

export default function Button({
  type,
  variant,
  className,
  block,
  disabled,
  style,
  loading,
  onClick,
  children,
  size,
}) {
  const [hover, setHover] = useState(false);

  const toggleHover = () => {
    setHover(!hover);
  };

  let btnStyle = {
    padding: "12px 24px",
    marginLeft: "2px",
    marginRight: "2px",
    border: "0px",
    borderRadius: "4px",
    border: "none",
    marginBottom: "6px",
    fontSize: `${size === "sm" ? "13px" : "14px"}`,
    fontWeight: `${size === "sm" ? "500" : "600"}`,
  };

  //////////// VARIANT //////////
  let variantStyle;
  switch (variant) {
    case "primary":
      variantStyle = {
        backgroundColor: primaryColor,
        color: "#fff",
        transition: "300ms",
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "not-allowed" : "pointer",
      };
      if (hover) {
        variantStyle = {
          ...variantStyle,
          backgroundColor: primaryColorHover,
        };
      }
      break;
    default:
      variantStyle = {
        background: defaultColor,
        color: "#222",
        opacity: loading ? 0.5 : 1,
        cursor: loading ? "not-allowed" : "pointer",
        transition: "300ms",
        fontWeight: "500",
      };
      if (hover) {
        variantStyle = {
          ...variantStyle,
          background: defaultColorHover,
        };
      }
  }

  let blockStyle = {
    width: "100%",
  };
  return (
    <>
      <button
        type={type}
        style={
          disabled
            ? { ...disabledStyle, ...style, ...btnStyle }
            : block
            ? { ...variantStyle, ...btnStyle, ...blockStyle, ...style }
            : { ...variantStyle, ...btnStyle, ...style }
        }
        className={className}
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
