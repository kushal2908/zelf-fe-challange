import React from "react";
import { Link } from "react-router-dom";

export default function NotFound404() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>404</h1>
      <h5>Page you're looking for doesn't exit!</h5>
      <Link to="/">Go Back</Link>
    </div>
  );
}
