import React from "react";

export const ArticleListItem = props => (
  <li {...props}className="list-group-item">
    {props.children}
  </li>
);