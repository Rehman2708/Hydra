import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import ArrowImg from "../../Images/index";
import intro from "../../Images/intro.svg";
import "./Intro.scss";
const Intro = () => {
  return (
    <div className="intro">
      <div className="flexCenter introHead">
        <div>
          <h1 className="primaryHead">INTRODUCTION</h1>
          <div className="flexCenter gap20">
            <h1 className="secondaryHead">TO HYDRA VR</h1>
            <ArrowImg />
          </div>
        </div>
        <p className="paraText">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio,
          aliquid molestiae consectetur dolorem reprehenderit aut ipsum vel
          maiores soluta veniam qui exercitationem, at tenetur beatae. aliquid
          molestiae consectetur dolorem reprehenderit aut ipsum vel .
        </p>
      </div>
      <div className="flexCenter introAbout">
        <img src={intro} alt="" />
        <div className="aboutText">
          <h1 className="primaryHead">ABOUT</h1>
          <h1 className="secondaryHead">HYDRA VR</h1>
          <p className="paraText">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
            nulla fugiat consequatur fuga aspernatur voluptatem eius rerum quam
            fugit expedita labore odit cum impedit sequi placeat iure nam,
            accusamus asperiores autem dolores. Doloribus libero corporis,
            numquam sit temporibus dignissimos deleniti saepe magni quaerat
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
            rerum! natus reiciendis eius, porro, dolorem nihil in.
          </p>
          <button className="primaryButton">LET'S GET IN TOUCH</button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
