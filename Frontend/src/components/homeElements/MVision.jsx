import React, { useEffect, useState } from "react";
import "../About/index.css";
import "../homeElementCss/MVision.css";
import { FaRankingStar } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { NavLink, Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {motion} from 'framer-motion';

function MVision() {
  const location = useLocation()
  const [loc, setLoc] = useState('/')

  useEffect(() => {
      setLoc(location.pathname)
  }, [location])
  return (
    <motion.div  className="joinUsPage">
      <div className="aboutHeader">
        <h1 className="paraLarge we-aim">We Aim</h1>
        <div className="gradOneSidePurpleLine"></div>
      </div>
      <div className="action">
        <div className="tabs">
          <NavLink preventScrollReset={true} to="/mission" className="application" style={loc == "/" || loc =='/mission' ? {backgroundColor:"#003f7e", color:"white"}: {backgroundColor:"#3a597b"}}>
            <FaRankingStar />
            <p className="paraSmall">Mission</p>
            <IoMdClose />
          </NavLink>
          <NavLink preventScrollReset={true} to="/vission" className="application"
            style={loc =='/vission' ? {backgroundColor:"#003f7e", color:"white"}: {backgroundColor:"#3a597b"}}
          >
            <FaRankingStar />
            <p className="paraSmall">Vision</p>
            <IoMdClose />
          </NavLink>
        </div>
        <div className="contributeText mvtBodyContainer">
          <Outlet />
        </div>
      </div>
    </motion.div>
  );
}

export default MVision;
