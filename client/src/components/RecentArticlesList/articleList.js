import React from "react";
import "./List.css";

export const ArticleList = ({ children }) => {
  return (
    <div className="list-overflow-container col-md-3">
      <ul className="list-group list-group-flush">
        {children}
      </ul>
    </div>
  );
};