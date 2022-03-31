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
    const [menuHeight, setMenuHeight] = useState(500);
    const dropdownRef = useRef(null);

    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
      const routes= pathName.split('/');
      let pageLevel = routes.length -1;
      if(pageLevel === 1){
        if (routes[1] == "programs") {
          setActiveMenu(routes[1])
        } 
        else {
          setActiveMenu('main')
        }
      } else if(pageLevel === 2){
        if (routes[1] == "blog") {
          setActiveMenu('main')
        } else {
          setActiveMenu(routes[1])
        }
      } else if(pageLevel === 3){
        if (routes[1] == "blog") {
          setActiveMenu('main')
        } else if (routes[1] == "mandatory-disclosures") {
          setActiveMenu('main')
        }
        else if (routes[2] == "news") {
          setActiveMenu(routes[1])
        }
        else {
          setActiveMenu(routes[2])
        }
      } else {
        setActiveMenu('main')
      }
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
		
    function DropdownItem(props,key) {
			
			const style = {
				color: router.asPath === props.url ? 'black' : 'white',
        backgroundColor: router.asPath === props.url ? '#DBDBDB' : 'transparent',
			}
			const handleClick = (e) => {
				e.preventDefault()
        // alert(props.url+" - "+props.goToMenu)
        if(props.goToMenu){
          setActiveMenu(props.goToMenu)
        } else {
          router.push(props.url ? props.url : router.asPath)
        }
				
			}
      return (
        <Link key={key} href={props.url ? props.url : "#"} scroll={false}>
          {/* onClick={props.goToMenu != null ? handleClick : ""} */}
          <a className={props.btn == "back" ? "menu-back" : `menu-item${props.goToMenu ? " menu-top" : " menu-last"}`} href={props.goToMenu != null ? "#" : props.url } onClick={props.goToMenu != null ? handleClick : ""} style={style}>
            {props.children}
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
                : <DropdownItem goToMenu={top.parent_menu_id ? top.parent_menu_id : "main"} btn={"back"}>
                  <span>Back</span>
                </DropdownItem> }
                
                {top.menu_nav_list.map(((nav,id) => 
                  <>{nav.show !== false ? <DropdownItem btn={"menu"} className="something" key={nav.id} url={top.parent_menu_id === "-" ? "" : nav.menu_nav_link} goToMenu={nav.submenu_link}>{nav.menu_nav_label}</DropdownItem> : "" }</>
                ))}
              </div>
            </CSSTransition>
            ))}
      </div>
    );
  }

  export default DropdownMenu