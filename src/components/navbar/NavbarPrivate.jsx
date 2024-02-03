import React from "react";
import classes from "./style.module.css";
import { Link, useNavigate } from "react-router-dom";
import Button from "../button/Button";
import { APP_ROUTES } from "../../routes/paths";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavbarPrivate() {
  const nav = useNavigate();
  const { logout } = useAuth0();
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.content}>
          <div>
            <h5 style={{ margin: "0px" }} className={classes.logo}>
              Zelf.
            </h5>
          </div>
          <div className={classes.btnGrp}>
            {/* <button
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button> */}
            <Link to={APP_ROUTES.AUTH_PAGE}>
              <img
                width={24}
                height={24}
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                }
                alt=""
                style={{
                  borderRadius: "12px",
                }}
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
