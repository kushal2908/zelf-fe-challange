import React from "react";
import Navbar from "../../components/navbar/Navbar";
import classes from "./styles.module.css";
import LeftBanner from "./LeftBanner";
import Form from "./Form";

export default function AuthIndex() {
  return (
    <>
      <Navbar />
      <div className={classes.auth}>
        <div className={classes.authWrapper}>
          {/* left banner part */}
          <LeftBanner />

          {/* login form part */}
          <Form />
        </div>
      </div>
    </>
  );
}
