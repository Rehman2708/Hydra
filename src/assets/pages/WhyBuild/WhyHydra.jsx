import React from "react";
import "./WhyHydra.scss";
import ArrowImg from "../../Images";
import simulationImg from "../../Images/simulation.svg";
import education from "../../Images/education.svg";
import selfcare from "../../Images/selfcare.svg";
import outdoor from "../../Images/outdoor.svg";
const WhyHydra = () => {
  const cards = [
    {
      image: simulationImg,
      title: "SIMULATION",
    },
    {
      image: education,
      title: "EDUCATION",
    },
    {
      image: selfcare,
      title: "SELF-CARE",
    },
    {
      image: outdoor,
      title: "OUTDOOR",
    },
  ];
  return (
    <div className="whyHydra">
      <div className="flexCenter introHead">
        <div>
          <h1 className="primaryHead">WHY BUILD</h1>
          <div className="flexCenter gap20">
            <h1 className="secondaryHead">WITH HYDRA?</h1>
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
      <div className="cards flexCenter gap20">
        {cards.map((card) => {
          return (
            <div className="card flexCenter">
              <img className="image" src={card.image} alt="" />
              <h1 className="title">{card.title}</h1>
              <h1 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
                corrupti magnam nulla possimus magni deserunt.
              </h1>
              <button className="primaryButton">TRY IT OUT</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyHydra;
