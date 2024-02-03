import React from "react";
import Navbar from "../navbar/Navbar";
import { Navigate, Outlet } from "react-router-dom";
import NavbarPrivate from "../navbar/NavbarPrivate";
import { useAuth0 } from "@auth0/auth0-react";
import { APP_ROUTES } from "../../routes/paths";
import Footer from "../footer/Footer";

/*
THis is layout outlet works on only private pages where only isAuthenticated is true, 
or else component will be redirected to login page
*/

export default function Layout({ children }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  return (
    <div>
      {!isAuthenticated ? (
        <>
          <NavbarPrivate />
          <div style={{ padding: "0px 24px" }}>
            {children}
            <Outlet />
          </div>{" "}
          <Footer />
        </>
      ) : (
        <Navigate to={APP_ROUTES.AUTH_PAGE} />
      )}
    </div>
  );
}
