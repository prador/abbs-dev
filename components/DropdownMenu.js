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
import  {CSSTransition}  from 'react-transition-group';

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
  
    function DropdownItem(props) {
      return (
        <Link href={props.url ? props.url : "#"} >
        <a className={"menu-item"} onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
          {/* <span className={"icon-button"}>{props.leftIcon}</span> */}
          {props.children}
          {/* <span className={"icon-right"}>{props.rightIcon}</span> */}
        </a>
      </Link>
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
            <DropdownItem url="/nog"
              goToMenu="settings">
              Settings
            </DropdownItem>
            <DropdownItem
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
            <DropdownItem url="/nog/test">HTML</DropdownItem>
            <DropdownItem >CSS</DropdownItem>
            <DropdownItem >JavaScript</DropdownItem>
            <DropdownItem >Awesome!</DropdownItem>
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
            <DropdownItem >Kangaroo</DropdownItem>
            <DropdownItem >Frog</DropdownItem>
            <DropdownItem >Horse?</DropdownItem>
            <DropdownItem >Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
      </div>
    );
  }

  export default DropdownMenu