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
import { attribute } from 'dom-helpers';

function DropdownMenu() {
		const router = useRouter();
		const [pathName, setPathName] = useState(router.pathname);
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);
  
    useEffect(() => {
      setMenuHeight(dropdownRef.current?.firstChild.offsetHeight)
			const menu = pathName.split('/')[1]
			{menu === "" || menu === "about" || menu === "blog" || menu === "nog" ? setActiveMenu('main') : setActiveMenu(menu)}
    }, [])
  
    function calcHeight(el) {
      const height = el.offsetHeight;
      setMenuHeight(height);
    }
		
    function DropdownItem(props) {
			
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
        <Link href={props.url ? props.url : "#"} >
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
        <CSSTransition
          in={activeMenu === 'main'}
          timeout={500}
          classNames="menu-primary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem url="/profile" goToMenu="profile">Profile</DropdownItem>
            {/* <DropdownItem url="/nog"
              goToMenu="nog">
              Nog
            </DropdownItem> */}
            <DropdownItem url="/abbs-edge"
              goToMenu="abbs-edge">
              ABBS Edge
            </DropdownItem>
            <DropdownItem url="/programs"
              goToMenu="programs">
              Programs
            </DropdownItem>
            <DropdownItem url="/faculty"
              goToMenu="faculty">
              Faculty
            </DropdownItem>
            <DropdownItem url="/research"
              goToMenu="research">
              Research
            </DropdownItem>
            <DropdownItem url="/corporate"
              goToMenu="corporate">
              Corporate
            </DropdownItem>
            <DropdownItem url="/campus-life"
              goToMenu="campus-life">
              Campus Life
            </DropdownItem>
            <DropdownItem url="/admissions"
              goToMenu="admissions">
              Admissions
            </DropdownItem>
            <DropdownItem url="/news-events"
              goToMenu="news-events">
              News & Events
            </DropdownItem>
            <DropdownItem url="/blog" goToMenu="blog">
              Login
            </DropdownItem>
  
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'nog'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem url="/nog/post/its_not_the_problem_you_want_to_solve_boiiiiii" goToMenu="nog">HTML</DropdownItem>
            <DropdownItem url="/nog/post/why_did_the_chicken_cross_the_road" goToMenu="nog">CSS</DropdownItem>
            <DropdownItem url="/programs" goToMenu="programs">JavaScript</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'programs'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="nog">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem url="/programs" >next </DropdownItem>
            <DropdownItem url="/nog/post/why_did_the_chicken_cross_the_road" goToMenu="nog">netlify</DropdownItem>
            <DropdownItem url="/nog/post/sarwrwerwe" goToMenu="nog">something else</DropdownItem>
          </div>
        </CSSTransition>
  
        <CSSTransition
          in={activeMenu === 'profile'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>

        <CSSTransition
          in={activeMenu === 'abbs-edge'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'faculty'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'research'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'corporate'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'campus-life'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'admissions'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'news-events'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>
        <CSSTransition
          in={activeMenu === 'blog'}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}>
          <div className="menu">
            <DropdownItem goToMenu="main">
              <h5>Back</h5>
            </DropdownItem>
            <DropdownItem goToMenu="blog">Kangaroo</DropdownItem>
            <DropdownItem goToMenu="blog">Frog</DropdownItem>
            <DropdownItem goToMenu="blog">Horse?</DropdownItem>
            <DropdownItem goToMenu="blog">Hedgehog</DropdownItem>
          </div>
        </CSSTransition>

      </div>
    );
  }

  export default DropdownMenu