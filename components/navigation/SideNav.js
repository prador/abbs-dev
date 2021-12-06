import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import DropdownMenu from './DropdownMenu';
import searchIcon from '../../assets/icons/search.svg'
import { attributes } from '../../content/navigation/sidenav.md'

function SideNav() {
  return (
    <Navbar>
      <DropdownMenu/>
    </Navbar>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar nav animate__animated animate__fadeIn">
      <button className="nav-btn">
        <label htmlFor="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </button>
      <input type="checkbox" id="nav-check" />
      <div className="nav-header">
        <div className="nav-title">
          <a href="/"><img src={"../../"+attributes.logo} width="auto" height="40px" alt="Abbs Logo" /></a>
        </div>
      </div>
      <button className="nav-btn"><Image src={searchIcon} width="30px" className="nav-search"/></button>
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

export default SideNav;