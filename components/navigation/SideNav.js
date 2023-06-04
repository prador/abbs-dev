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
          <a href="/"><img src={"../../"+attributes.logo} width="auto" height="50px" alt="Abbs Logo" /></a>
        </div>
        <img className="mob-hide" style={{marginTop:"1rem"}} src={"/static/img/g20-logo.jpg"} width="100%" height="auto" alt="g20 Logo" />
      </div>
      <button className="nav-btn search-btn"><Image src={searchIcon} width="30px" className="nav-search"/></button>
      <div className="nav-apply-btn-wrapper"><a href="https://application.abbs.edu.in/abbs-goi" className="nav-apply btn btn-white">Apply Now</a></div>
      <ul className="navbar-nav nav-links">
        {props.children}
       <li className='mob-g20-logo'> <img className="desk-hide" src={"/static/img/g20-logo.jpg"} width="auto" height="100px" alt="g20 Logo" /></li> 
        </ul>

      <a className="nav-apply btn nav-whatsapp-btn" target="_blank" href={"https://api.whatsapp.com/send/?phone=919148977317&text&app_absent=0"} >
        <svg width="30" height="30" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M93.05 82.9401C92.0567 82.4435 87.1867 80.0501 86.28 79.7168C85.3733 79.3868 84.7133 79.2235 84.05 80.2168C83.39 81.2035 81.4933 83.4368 80.9167 84.0968C80.3367 84.7601 79.76 84.8401 78.77 84.3468C77.78 83.8468 74.5867 82.8035 70.8033 79.4301C67.86 76.8035 65.87 73.5601 65.2933 72.5668C64.7167 71.5768 65.23 71.0401 65.7267 70.5468C66.1733 70.1035 66.7167 69.3901 67.2133 68.8135C67.71 68.2335 67.8733 67.8201 68.2033 67.1568C68.5367 66.4968 68.37 65.9201 68.12 65.4235C67.8733 64.9268 65.8933 60.0501 65.0667 58.0668C64.2633 56.1368 63.4467 56.4001 62.84 56.3668C62.26 56.3401 61.6 56.3335 60.94 56.3335C60.28 56.3335 59.2067 56.5801 58.3 57.5735C57.39 58.5635 54.8333 60.9601 54.8333 65.8368C54.8333 70.7101 58.38 75.4201 58.8767 76.0835C59.3733 76.7435 65.86 86.7501 75.7967 91.0401C78.1633 92.0601 80.0067 92.6701 81.4433 93.1235C83.8167 93.8801 85.9767 93.7735 87.6833 93.5168C89.5833 93.2335 93.5433 91.1201 94.37 88.8068C95.1933 86.4935 95.1933 84.5101 94.9467 84.0968C94.7 83.6835 94.04 83.4368 93.0467 82.9401H93.05ZM74.9767 107.617H74.9633C69.0614 107.618 63.2679 106.031 58.19 103.023L56.99 102.31L44.5167 105.583L47.8467 93.4235L47.0633 92.1768C43.7638 86.9246 42.0176 80.8461 42.0267 74.6435C42.0333 56.4768 56.8133 41.6968 74.99 41.6968C83.79 41.6968 92.0633 45.1301 98.2833 51.3568C101.351 54.4121 103.783 58.0454 105.438 62.0465C107.092 66.0476 107.937 70.3371 107.923 74.6668C107.917 92.8335 93.1367 107.617 74.9767 107.617V107.617ZM103.017 46.6268C99.344 42.9299 94.9741 39.9986 90.1603 38.0028C85.3465 36.007 80.1845 34.9864 74.9733 35.0001C53.1267 35.0001 35.34 52.7835 35.3333 74.6401C35.3232 81.596 37.1479 88.4314 40.6233 94.4568L35 115L56.0133 109.487C61.8262 112.654 68.3403 114.313 74.96 114.313H74.9767C96.8233 114.313 114.61 96.5301 114.617 74.6701C114.633 69.4611 113.616 64.3005 111.625 59.4869C109.634 54.6734 106.708 50.3024 103.017 46.6268" fill="white"/>
        </svg> Chat with us</a>

      <button id="npfWidgetButton" onClick={showModal} className="nav-apply btn btn-black" type="button" class="npfWidgetButton npfWidget-a2b92e215659256130ae969905a8f550">Enquire Now</button>
      <div id="npf_wrapper" className={`${modal ? "show": "hide"}`} >
        <div className="close-btn-row"><button onClick={showModal}>Close form</button></div>
        <div className="npf_wgts" data-height="600px" data-w="a2b92e215659256130ae969905a8f550"></div>
        </div> 
      <div className="nav-footer">
        <a target="_blank" href="tel:+919141707070" className="nav-contact menu-item menu-last">Contact us: +91 9141707070</a>
        {/* <a href="https://application.abbs.edu.in/abbs-goi" className="nav-apply btn btn-blue">Apply Now</a> */}
        <div class="social-links sidenav-social">
          <a target="_blank" class="" href="https://twitter.com/acharyabschool">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
          </svg></a> 
                    <a target="_blank" class="" href="https://www.instagram.com/acharyabbs/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
          </svg></a> 
                    <a target="_blank" class="" href="https://www.facebook.com/AcharyaBBS"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg></a> 
                    <a target="_blank" class="" href="https://www.youtube.com/c/AcharyabbsAcInABBS"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
          </svg></a> 
                    <a target="_blank" class="" href="https://www.linkedin.com/school/abbs-bangalore/"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg></a> 
                    <a target="_blank" href="https://api.whatsapp.com/send/?phone=919148977317&amp;text&amp;app_absent=0" class="jsx-908dccba8e88fc7b"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
          </svg></a>
        </div>
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