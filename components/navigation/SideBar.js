

import React, { useState, useEffect, useRef } from 'react';
import DropdownMenu from './DropdownMenu';
import { attributes, html } from '../../content/navigation/sidenav.md'

function SideBar() {
  return (
    <Navbar>
      <DropdownMenu/>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar nav">
      <button className="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
        <img src={attributes.logo} layout="responsive" loading="lazy" width="120" alt="" className="image-10"/>
        </div>
      </div>
      <button className="nav-btn">Se</button>
      <ul className="navbar-nav nav-links">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};

export default SideBar;