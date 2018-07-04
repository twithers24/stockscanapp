import React from "react";
import "./form.css";

export const Input = props => (
  <div className="form-group">
    <input {...props} className="form-control" />
  </div>
);
