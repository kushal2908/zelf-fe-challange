import React from "react";
import classes from "./style.module.css";
import { Link } from "react-router-dom";
import Button from "../button/Button";
import { APP_ROUTES } from "../../routes/paths";

export default function Navbar() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div>
            <h5 style={{ margin: "0px", fontSize: "24px" }}>Zelf.</h5>
          </div>
          <div className={classes.btnGrp}>
            <Link to="/">Sign In</Link>
            <Link to={APP_ROUTES.DASHBOARD}>
              <Button variant="primary">JOIN</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
