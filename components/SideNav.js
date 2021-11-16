import BellIcon from '../assets/icons/bell.svg';
import MessengerIcon from '../assets/icons/messenger.svg';
import CaretIcon from '../assets/icons/caret.svg';
import PlusIcon from '../assets/icons/plus.svg';
import CogIcon from '../assets/icons/cog.svg';
import ChevronIcon from '../assets/icons/chevron.svg';
import ArrowIcon from '../assets/icons/arrow.svg';
import BoltIcon from '../assets/icons/bolt.svg';
import Link from "next/link";

import React, { useState, useEffect, useRef } from 'react';
import  CSSTransition  from 'react-transition-group';

// function SideNav() {
//   return (
//     <Navbar>
//         <DropdownMenu/>
//     </Navbar>
//   );
// }

// function Navbar(props) {
//   return (
//     <nav className="navbar">
//       <ul className="navbar-nav">{props.children}</ul>
//     </nav>
//   );
// }

// function NavItem(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <li className="nav-item">
//       <Link href="#" >
//         <a className="icon-button" onClick={() => setOpen(!open)}>
//           {props.icon}
//         </a>
//       </Link>
//       {open && props.children}
//     </li>
//   );
// }

// function DropdownMenu() {
//   const [activeMenu, setActiveMenu] = useState('main');
//   const [menuHeight, setMenuHeight] = useState(null);
//   const dropdownRef = useRef(null);

//   useEffect(() => {
//     setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
//   }, [])

//   function calcHeight(el) {
//     const height = el.offsetHeight;
//     setMenuHeight(height);
//   }

//   function DropdownItem(props) {
//     return (
//       <Link href={props.url ? props.url : "#"} >
//         <a className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
//           <span className="icon-button">{props.leftIcon}</span>
//           {props.children}
//           <span className="icon-right">{props.rightIcon}</span>
//         </a>
//       </Link>
//     );
//   }

//   return (
//     <div className="dropdown" ref={dropdownRef}>

//       <CSSTransition
//         in={activeMenu === 'main'}
//         timeout={500}
//         classNames={"menu-primary"}
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem>My Profile</DropdownItem>
//           <DropdownItem
//             leftIcon={<CogIcon />}
//             rightIcon={<ChevronIcon />}
//             goToMenu="settings">
//             Settings
//           </DropdownItem>
//           <DropdownItem
//             leftIcon="🦧"
//             rightIcon={<ChevronIcon />}
//             goToMenu="animals">
//             Animals
//           </DropdownItem>

//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'settings'}
//         timeout={500}
//         classNames={"menu-secondary"}
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>My Tutorial</h2>
//           </DropdownItem>
//           <DropdownItem url={"#"} leftIcon={<BoltIcon />}>HTML</DropdownItem>
//           <DropdownItem url={"/something/else"} leftIcon={<BoltIcon />}>CSS</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
//           <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
//         </div>
//       </CSSTransition>

//       <CSSTransition
//         in={activeMenu === 'animals'}
//         timeout={500}
//         classNames={"menu-secondary"}
//         unmountOnExit
//         onEnter={calcHeight}>
//         <div className="menu">
//           <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
//             <h2>Animals</h2>
//           </DropdownItem>
//           <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
//           <DropdownItem leftIcon="🐸">Frog</DropdownItem>
//           <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
//           <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
//         </div>
//       </CSSTransition>
//     </div>
//   );
// }

// export default SideNav;

const SideNav = () => (
    <Navbar>
      <NavItem icon={<PlusIcon />} />
      <NavItem icon={<BellIcon />} />
      <NavItem icon={<MessengerIcon />} />

      <NavItem icon={<CaretIcon />}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  );

const Navbar = ({props}) => {
  console.log(props)
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props}</ul>
    </nav>
  );
}

const NavItem = ({props}) => {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
}

const DropdownMenu = () => {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
  }, [])

  const calcHeight = ({el}) => {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  const DropdownItem = ({props}) => {
    return (
      <a href="#" className="menu-item" onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>
      </a>
    );
  }

  return (
    <div className="dropdown" style={{ height: menuHeight }} ref={dropdownRef}>

      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem>My Profile</DropdownItem>
          <DropdownItem
            leftIcon={<CogIcon />}
            rightIcon={<ChevronIcon />}
            goToMenu="settings">
            Settings
          </DropdownItem>
          <DropdownItem
            leftIcon="🦧"
            rightIcon={<ChevronIcon />}
            goToMenu="animals">
            Animals
          </DropdownItem>

        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'settings'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>My Tutorial</h2>
          </DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>JavaScript</DropdownItem>
          <DropdownItem leftIcon={<BoltIcon />}>Awesome!</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'animals'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}>
        <div className="menu">
          <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
            <h2>Animals</h2>
          </DropdownItem>
          <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
          <DropdownItem leftIcon="🐸">Frog</DropdownItem>
          <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
          <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}

export default SideNav;