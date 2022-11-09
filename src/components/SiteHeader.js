import React, { useState } from "react";
import { createPopper } from "@popperjs/core";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Web3Modal from "web3modal";
import Web3 from "web3";
import { providerOptions } from "./providerOptions";
import { networkParams } from "./networks";
import { toHex, truncateAddress } from "./utils";

export const web3Modal = new Web3Modal({
  cacheProvider: true,
  providerOptions
});

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const [selectedLanguage, setSelectedLanguage] = useState('UK');
  const [provider, setProvider] = useState();
  const [library, setLibrary] = useState();
  const [account, setAccount] = useState();
  const [chainId, setChainId] = useState();
  const [network, setNetwork] = useState();
  const [error, setError] = useState("");

  const connectWallet = async () => {
    try {
      const provider = await web3Modal.connect();
      const library = new Web3(provider);
      const accounts = await library.eth.getAccounts();
      const chainId = await library.eth.getChainId();
      setProvider(provider);
      setLibrary(library);
      if (accounts) setAccount(accounts[0]);
      setChainId(chainId);
    } catch (error) {
      setError(error);
    }
  };

  const handleNetwork = (e) => {
    const id = e.target.value;
    setNetwork(Number(id));
  };

  const switchNetwork = async () => {
    try {
      await library.provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: toHex(network) }]
      });
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await library.provider.request({
            method: "wallet_addEthereumChain",
            params: [networkParams[toHex(network)]]
          });
        } catch (error) {
          setError(error);
        }
      }
    }
  };

  const navigate = useNavigate();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const handleLanguage = (param) => {
    setSelectedLanguage(param);
    setDropdownPopoverShow(false);
  }

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between mb-3">
        <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
          <div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed"
              to="/"
            >
              <img src="/imgs/mark.png" className="mt-2" width={161} alt="" />
            </Link>
            <button
              className="block px-3 py-1 text-xl leading-none text-white bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center justify-between" +
              (navbarOpen ? " sm:flex" : " hidden")
            }
          >
            <ul className="flex flex-col list-none lg:flex-row">
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/projects"
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/propositions"
                >
                  Propositions
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/forum"
                >
                  Forum
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="flex items-center px-3 py-2 text-xl font-bold leading-snug text-white hover:opacity-75"
                  to="/about"
                >
                  About us
                </Link>
              </li>
            </ul>
            <div className="text-white lg:flex">
              <div className="flex" onClick={() => navigate("/profile")}>
                <span className="items-center mt-2 mr-2">3216548798979</span>
                <img src="/imgs/avatar.png" className="rounded-full" width={37} style={{ border: '2px solid #FFC917' }} alt="" />
              </div>
              <button className="px-5 py-1 font-bold text-black bg-yellow-500 rounded-xl"
                onClick={() => { connectWallet() }}>Connect your wallet</button>
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
                    selectedLanguage === "UK" &&
                    <img src="/imgs/flags/uk.png" width={33} alt="" />
                  }
                  {
                    selectedLanguage === "FR" &&
                    <img src="/imgs/flags/fr.png" width={33} alt="" />
                  }
                  <i className="ml-1 fa fa-angle-down"></i>
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