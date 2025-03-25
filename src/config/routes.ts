import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
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
    component: Home,
    name: "Home Screen",
    protected: false,
  },
  {
    path: "/About",
    component: About,
    name: "About",
    protected: false,
  },
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