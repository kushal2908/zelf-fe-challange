import React from "react";
import banner from "../../assets/banner.png";
export default function LeftBanner() {
  return (
    <div>
      <img
        src={banner}
        height={"100%"}
        alt=""
        style={{ borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px" }}
      />
    </div>
  );
}
