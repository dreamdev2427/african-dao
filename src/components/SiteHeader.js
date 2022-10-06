import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from 'react-router-dom';

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
    
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const [selectedLanguage, setSelectedLanguage] = useState('UK');
  const handleLanguage = (param) => {
    setSelectedLanguage(param);
    setDropdownPopoverShow(false);
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2"
              to="/"
            >
              <img src="/imgs/mark.png" className="mt-2" width={161} alt="" />
            </Link>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-between" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/propositions"
                >
                  Propositions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/forum"
                >
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  About us
                </Link>
              </li>
            </ul>
            <div className="lg:flex text-white">
                {/* <div className="flex">
                    <span className="items-center mt-2 mr-2">3216548798979</span>
                    <img src="/imgs/avatar.png" className="rounded-full" width={37} style={{border:'2px solid #FFC917'}} alt="" />
                </div> */}
                <button className="text-black font-bold bg-yellow-500 rounded-xl px-5 py-1"
                  onClick={ () => {} }>Connect your wallet</button>
                <button
                    className='ml-3'
                    type="button"
                    ref={btnDropdownRef}
                    onClick={() => {
                        dropdownPopoverShow
                        ? closeDropdownPopover()
                        : openDropdownPopover();
                    }}
                    >
                        <div className="flex">
                            {
                              selectedLanguage==="UK" && 
                              <img src="/imgs/flags/uk.png" width={33} alt="" />
                            }
                            {
                              selectedLanguage==="FR" && 
                              <img src="/imgs/flags/fr.png" width={33} alt="" />
                            }
                            <i className="fa fa-angle-down ml-1"></i>
                        </div>
                </button>
                <div
                    ref={popoverDropdownRef}
                    className={
                        (dropdownPopoverShow ? "block " : "hidden ") +
                        "text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
                    }
                    style={{ minWidth: "5rem" }}
                    >
                    <a
                        href="#pablo"
                        className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                        }
                        onClick={e => handleLanguage('UK')}
                    >
                        <img src="/imgs/flags/uk.png" width={33} alt="" />
                    </a>
                    <a
                        href="#pablo"
                        className={
                        "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent "
                        }
                        onClick={e => handleLanguage('FR')}
                    >
                        <img src="/imgs/flags/fr.png" width={33} alt="" />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}