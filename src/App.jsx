import { useState } from "react";
import AuthIndex from "./pages/auth/AuthIndex";
import Navbar from "./components/navbar/Navbar";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
