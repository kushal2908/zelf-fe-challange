import React from "react";
import Modal from "../../components/modal/Modal";
import classes from "./styles.module.css";
import Button from "../../components/button/Button";
import moment from "moment";

export default function ShowPost({ show, onClose, data }) {
  return (
    <Modal show={show} onClose={onClose} title="" size="lg">
      <div className={classes.showPostRoot}>
        <div style={{ backgroundColor: "#000" }}>
          <div className={classes.postImg}>
            <img src={data?.content?.thumbnail_url} height={300} />
          </div>
        </div>
        <div className={classes.postContent}>
          <div className={classes.postHeading}>
            <img
              src={data?.creator?.profile_picture_url}
              width={24}
              height={24}
              style={{ borderRadius: "12px" }}
            />
            <h4 style={{ margin: "0px" }}>{data?.creator?.name}</h4>
            <p style={{ margin: "0px", color: "#666" }}>
              {moment(data?.content?.timestamp).startOf("day").fromNow()}
            </p>
            <a href="#" onClick={onClose}>
              &#10006;
            </a>
          </div>
          <div style={{ marginTop: "12px" }}>
            <p>{data?.content?.text}</p>
            <a href={data?.content?.external_url}>See original post</a>
          </div>
          <div className={classes.postStats}>
            <div>
              <p style={{ fontWeight: 500, fontSize: "16px" }}>
                {data?.content?.views}
              </p>
              <p style={{ fontWeight: 500, color: "#666" }}>Total views</p>
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: "16px" }}>
                {data?.content?.likes}
              </p>
              <p style={{ fontWeight: 500, color: "#666" }}>Total Likes</p>
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: "16px" }}>
                {data?.content?.comments}
              </p>
              <p style={{ fontWeight: 500, color: "#666" }}>Total comments</p>
            </div>
            <div>
              <p style={{ fontWeight: 500, fontSize: "16px" }}>
                {data?.content?.engagement_of_views?.toFixed(2) + "%"}
              </p>
              <p style={{ fontWeight: 500, color: "#666" }}>Engagement Rate</p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}
