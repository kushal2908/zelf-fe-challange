import React, { useState } from "react";
import classes from "./styles.module.css";
import Card from "./Card";
import ShowPost from "./ShowPost";

export default function AllPosts({ data, total }) {
  const [showPost, setShowPost] = useState(false);
  const [selectedData, setSelectedData] = useState("");
  return (
    <>
      <div className={classes.allPostHeading}>
        <p style={{ fontWeight: 500 }}>
          All Post
          <span style={{ color: "#444", fontSize: "12px" }}>
            {" (" + total + " total posts)"}
          </span>
        </p>
        <a href="#">View All</a>
      </div>

      <div className={classes.allPostGallery}>
        {data?.map((d) => (
          <Card
            data={d}
            onClick={() => {
              setShowPost(true);
              setSelectedData(d);
            }}
          />
        ))}
      </div>

      <ShowPost
        show={showPost}
        onClose={() => {
          setShowPost(false);
          setSelectedData("");
        }}
        data={selectedData}
      />
    </>
  );
}
