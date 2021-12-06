import BellIcon from '../../assets/icons/bell.svg';
import MessengerIcon from '../../assets/icons/messenger.svg';
import CaretIcon from '../../assets/icons/caret.svg';
import PlusIcon from '../../assets/icons/plus.svg';
import CogIcon from '../../assets/icons/cog.svg';
import ChevronIcon from '../../assets/icons/chevron.svg';
import ArrowIcon from '../../assets/icons/arrow.svg';
import BoltIcon from '../../assets/icons/bolt.svg';
import Search from '../Search'

import Link from "next/link";
import {useRouter} from "next/router"

import React, { useState, useEffect, useRef } from 'react';
import  {CSSTransition}  from 'react-transition-group';
import { attributes } from '../../content/navigation/sidenav.md'

const DropdownMenu = () => {
		const router = useRouter();
		const [pathName, setPathName] = useState(router.pathname);
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
    let top_menu = attributes.top_menu;
    let nav_menu = Object.values(top_menu)    

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
			const menu = pathName.split('/')[1]
			{menu === "" || menu === "about" || menu === "blog" || menu === "nog" ? setActiveMenu('main') : setActiveMenu(menu)}
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
		
    function DropdownItem(props,key) {
			
			const style = {
				// marginRight: 10,
				color: router.asPath === props.url ? 'black' : 'white',
        backgroundColor: router.asPath === props.url ? '#DBDBDB' : 'transparent',
			}
			const handleClick = (e) => {
				e.preventDefault()
				router.push(props.url ? props.url : router.asPath)
				setActiveMenu(props.goToMenu)
			}
      return (
        <Link key={key}href={props.url ? props.url : "#"} >
        <a className={"menu-item"} href={props.url} onClick={handleClick} style={style}>
          {/* <span className={"icon-button"}>{props.leftIcon}</span> */}
          {props.children}
          {/* <span className={"icon-right"}>{props.rightIcon}</span> */}
        </a>
      </Link>
      );
    }
  
    return (
      <div className="dropdown" ref={dropdownRef}>
        <Search/>

            {attributes.top_menu.map((top,id,index)=> (
              <CSSTransition
              key={id}
              in={activeMenu === top.menu_id}
              timeout={500}
              classNames="menu-secondary"
              unmountOnExit
              onEnter={calcHeight}>
              <div className="menu">
              {top.parent_menu_id === "-" ? ""
                : <DropdownItem goToMenu={top.parent_menu_id ? top.parent_menu_id : "main"}>
                  <h5>Back</h5>
                </DropdownItem> }
                
                {top.menu_nav_list.map(((nav,id) => 
                  <><DropdownItem key={nav.id} url={top.parent_menu_id === "-" ? "" : nav.menu_nav_link} goToMenu={nav.submenu_link}>{nav.menu_nav_label}</DropdownItem></>
                ))}
              </div>
            </CSSTransition>
            ))}
      </div>
    );
  }

  export default DropdownMenu