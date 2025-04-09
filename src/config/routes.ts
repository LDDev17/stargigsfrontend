import LandingPage from "../pages/LandingPage";
import About from "../pages/About";
import Dashboard from "../pages/ClientDashboard";
import Reviews from "../pages/Reviews";
import { JSX } from "react";

interface RouteType {
  path: string,
  component: (() => JSX.Element),
  name: string,
  protected: boolean,
}

const routes: RouteType[] = [
  {
    path: "",
    component: LandingPage,
    name: "Landing Page",
    protected: false,
  },
  {
    path: "/About",
    component: About,
    name: "About",
    protected: false,
  },
  // {
  //   path: "/SignUp",
  //   component: SignUp,
  //   name: "Sign Up",
  //   protected: false,
  // },
  {
    path: "/Dashboard",
    component: Dashboard,
    name: "Dashboard",
    protected: true,
  },
  {
    path: "/Reviews",
    component: Reviews,
    name: "Reviews",
    protected: true,
  }
];

export default routes;