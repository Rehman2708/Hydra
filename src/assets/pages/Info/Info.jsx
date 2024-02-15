import React from "react";
import "./Info.scss";
import logo from "../../Images/logo.svg";
import logoName from "../../Images/logoName.svg";
import info from "../../Images/info.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import { MdLocationPin } from "react-icons/md";
const Info = () => {
  return (
    <div className="info">
      <div className="header flexCenter">
        <div className="logoName flexCenter">
          <img src={logo} alt="" />
          <img src={logoName} alt="" />
        </div>
        <ul className="headerOptions flexCenter">
          <li>ABOUT</li>
          <li>SERVICES</li>
          <li>TECHNOLOGIES</li>
          <li>HOW TO</li>
        </ul>
        <div className="headerButtons flexCenter">
          <button className="primaryButton secondaryButton">CONTACT US</button>
          <button className="primaryButton">JOIN HYDRA</button>
        </div>
      </div>
      <div className="flexCenter infoDetail">
        <div className="infoText">
          <h1 className="primaryHead">Dive Into The Depths</h1>
          <h1 className="primaryHead">of Virtual Reality</h1>
          <p className="paraText">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
            dolore facilis repellendus sapiente? Officia iste a excepturi
            aspernatur beatae similique quisquam!
          </p>
          <div className="flexCenter infoButtonArrow">
            <button className="primaryButton">BUILD YOUR WORLD</button>
            <FaArrowRightLong />
          </div>
        </div>
        <img src={info} alt="" />
      </div>
      <div className="infoFooter flexCenter">
        <div className="flexCenter">
          <MdLocationPin />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="divider"></div>
        <div className="flexCenter">
          <MdLocationPin />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
        <div className="divider"></div>

        <div className="flexCenter">
          <MdLocationPin />
          <div>
            <h2>Lorem, ipsum dolor.</h2>
            <p>Lorem, ipsum dolor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
