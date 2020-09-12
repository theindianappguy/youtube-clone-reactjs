import React from "react";
import "./SidebarRow.css";

function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon className="sidebarRow__icon" />
      <p className="sidebarRow__title" style={{ marginLeft: "10px" }}>
        {title}
      </p>
    </div>
  );
}

export default SidebarRow;
