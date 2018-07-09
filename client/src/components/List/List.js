import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-group list-group-flush">
      <ul className="list-group">
        {children}
      </ul>
    </div>
  );
};
