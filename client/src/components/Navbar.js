import React from "react";
import {NavLink} from "react-router-dom";
import "./style/navbar.css"

function Navbar(props) {
  return (
    <div>
      <Navbar className="nav-container" expand="lg"  sticky="top">
        <NavLink className="nav-link" to="/">
          <div class="text-light">
            <h4 class="nav-title-font">ScenAncis</h4>
          </div>
        </NavLink>
        <ul class="navbar-nav ml-auto navitem-indent">
          <li class="nav-item">
            <NavLink to="/about">
              <div class="nav-font text-light">Sign Up</div>
            </NavLink>
          </li>
          <li class="nav-item">
            <NavLink to="/portfolio">
              <div class="nav-font text-light">Login</div>
            </NavLink>
          </li>
        </ul>
      </Navbar>
    </div>
  );
}

export default Navbar;