import React from "react";
import classes from "./styles.module.css";

export default function Card({ data, onClick }) {
  return (
    <>
      <div className={classes.allPostCard} onClick={onClick}>
        {/* Main img */}
        <img
          src={data?.content?.thumbnail_url}
          height={300}
          width={250}
          alt=""
        />
        <div className={classes.imgContent}>
          {/* Creators details */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <img
              src={data?.creator?.profile_picture_url}
              width={24}
              height={24}
              alt=""
            />
            <p style={{ fontWeight: 500, color: "#fff" }}>
              {data?.creator?.username}
            </p>
          </div>
          {/* Creators details end */}
        </div>
        <div className={classes.cardPostStats}>
          {/* coontent stats */}
          <p style={{ fontSize: "13px" }}>
            <span style={{ fontSize: "12px" }}>v: </span> {data?.content?.views}{" "}
          </p>
          <p style={{ fontSize: "13px" }}>
            <span style={{ fontSize: "12px" }}>L: </span>
            {data?.content?.likes}{" "}
          </p>
          <p style={{ fontSize: "13px" }}>
            <span style={{ fontSize: "12px" }}>C: </span>
            {data?.content?.comments}{" "}
          </p>
        </div>
        {/* coontent stats ends */}
      </div>
    </>
  );
}
