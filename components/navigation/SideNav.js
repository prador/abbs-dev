import React, { useState, useEffect, useRef } from 'react';
import Script from 'next/script'
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
  const [modal, setModal] = useState(false);
  const showModal = () => {
    if(modal) {
      setModal(false);
    }
    else {
      setModal(true);
    }
  }
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
      <div className="nav-apply-btn-wrapper"><a href="https://application.abbs.edu.in/abbs-goi" className="nav-apply btn btn-blue">Apply Now</a></div>
      <ul className="navbar-nav nav-links">
        {props.children}</ul>
      <button id="npfWidgetButton" onClick={showModal} className="nav-apply btn btn-blue" type="button" class="npfWidgetButton npfWidget-91417a0f63179d933617d74133cf2030">Enquire Now</button>
      <div id="npf_wrapper" className={`${modal ? "show": "hide"}`} >
        <div className="close-btn-row"><button onClick={showModal}>Close form</button></div>
        <div className="npf_wgts" data-height="600px" data-w="1d53de89c59cbc5ee84eba92b1b0c7d7"></div>
        </div> 
      <div className="nav-footer">
        <a target="_blank" href="tel:+919141707070" className="nav-contact menu-item menu-last">Contact us: +91 9141707070</a>
        {/* <a href="https://application.abbs.edu.in/abbs-goi" className="nav-apply btn btn-blue">Apply Now</a> */}
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