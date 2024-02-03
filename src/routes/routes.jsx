import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import NotFound404 from "../pages/auth/NotFound404";
import AuthIndex from "../pages/auth/AuthIndex";
import { APP_ROUTES } from "./paths";
import Layout from "../components/layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route errorElement={<NotFound404 />}>
        {/* Not private route */}
        <Route index path={APP_ROUTES.AUTH_PAGE} element={<AuthIndex />} />

        {/* private route */}
        <Route element={<Layout />}>
          <Route index path={APP_ROUTES.DASHBOARD} element={<Dashboard />} />
        </Route>
      </Route>
    </>
  )
);
