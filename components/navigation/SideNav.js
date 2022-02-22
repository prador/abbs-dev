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
      <button className="nav-btn search-btn"><Image src={searchIcon} width="30px" className="nav-search"/></button>
      <ul className="navbar-nav nav-links">{props.children}</ul>
      <div className="nav-footer">
        <a target="_blank" href="tel:+919141707070" className="nav-contact menu-item menu-last">Contact us: +91 9141707070</a>
        <a href="https://application.abbs.edu.in/" className="nav-apply btn btn-blue">Apply Now</a>
      </div>
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