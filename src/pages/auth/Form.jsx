import React from "react";
import classes from "./styles.module.css";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

export default function Form() {
  /*
    Im having problems in auth0 so I have to skip but I've conditioned and
     made comment on components/layout/layout.tsx about how it works
  */

  const { loginWithRedirect } = useAuth0();
  return (
    <div className={classes.formWrapper}>
      <h2>Register Your Account</h2>
      <form>
        <div className={classes.radio}>
          <input type="radio" id="html" name="fav_language" value="HTML" />
          <label htmlFor="html">I Represent a Brand</label>
        </div>

        <Button variant={"primary"} block onClick={() => loginWithRedirect()}>
          Continue
        </Button>
      </form>

      <div className={classes.alreadyMember}>
        <p>Already a member?</p>
        <Link to="/">Sign In</Link>
      </div>
    </div>
  );
}
