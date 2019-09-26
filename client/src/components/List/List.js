import React from "react";

export function List({ children }) {
  return (
    <div className="list">
      <ul className="list-group">{children}</ul>
    </div>
  );
}
