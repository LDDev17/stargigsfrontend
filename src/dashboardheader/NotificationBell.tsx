// src/dashboardheader/NotificationBell.tsx
import React from "react";
import { NotificationIcon } from "./Icon1"; // Ensure this matches the file name exactly

export const NotificationBell: React.FC = () => (
  <button aria-label="Notifications" className="focus:outline-none">
    <NotificationIcon />
  </button>
);

