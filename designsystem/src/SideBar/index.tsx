import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function SideBar() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/button">Button</Link>
        </li>
        <li>
          <Link to="/alert">Alert</Link>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;