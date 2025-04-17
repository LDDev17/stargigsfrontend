import { JSX } from "react";

interface RouteType {
  path: string,
  component: (() => JSX.Element),
  name: string,
  protected: boolean,
}

export default RouteType;