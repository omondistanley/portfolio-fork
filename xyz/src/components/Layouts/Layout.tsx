import React, { useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./_layout.scss";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <div className="content-wrapper">
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        style={{ display: "none" }} // Hide on larger screens
      >
        Menu
      </button>

      {/* Sidebar: The "active" class toggles its visibility */}
      <Sidebar className={sidebarVisible ? "active" : ""} />

      {/* Main content */}
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
