import React from "react";
import styled from "styled-components";
import html from "../Resources/Images/LanguageImages/html5.png";
import css from "../Resources/Images/LanguageImages/css3.png";
import bootstrap from "../Resources/Images/LanguageImages/bootstrap.png";
import chakraui from "../Resources/Images/LanguageImages/chakraui.png";
import materialui from "../Resources/Images/LanguageImages/materialui.png";
import json from "../Resources/Images/LanguageImages/json.png";
import java from "../Resources/Images/LanguageImages/java.png";
import linux from "../Resources/Images/LanguageImages/linux.png";
import firebase from "../Resources/Images/LanguageImages/firebase.png";
import heroku from "../Resources/Images/LanguageImages/heroku.png";
import js from "../Resources/Images/LanguageImages/js.png";
import git from "../Resources/Images/LanguageImages/git.png";
import mongodb from "../Resources/Images/LanguageImages/mongodb.png";
import nodejs from "../Resources/Images/LanguageImages/nodejs.png";
import react from "../Resources/Images/LanguageImages/react.png";
import reactredux from "../Resources/Images/LanguageImages/redux.png";
import mern from "../Resources/Images/LanguageImages/mern.png";
const Skills = () => {
  const skills = [
    {
      img: html,
      title: "HTML",
    },
    {
      img: css,
      title: "CSS",
    },
    {
      img: bootstrap,
      title: "Bootstrap",
    },
    {
      img: js,
      title: "Javascript",
    },
    {
      img: git,
      title: "Git/Github",
    },
    {
      img: json,
      title: "JSON",
    },
    {
      img: heroku,
      title: "Heroku",
    },
    {
      img: java,
      title: "Java",
    },
    {
      img: mongodb,
      title: "MongoDB",
    },
    {
      img: firebase,
      title: "Firebase",
    },
    {
      img: nodejs,
      title: "NodeJS",
    },
    {
      img: linux,
      title: "Linux",
    },
    {
      img: react,
      title: "ReactJS",
    },
    {
      img: chakraui,
      title: "Chakra UI",
    },
    {
      img: materialui,
      title: "Material UI",
    },
    {
      img: reactredux,
      title: "Redux",
    },
    {
      img: mern,
      title: "MERN",
    },
  ];

  return (
    <Container id="skills">
      <h1>Skills</h1>
      <div className="skillsContainer">
        {skills.map((ele, index) => (
          <div key={index}>
            <img src={ele.img} alt={ele.title} width="70px" height="70px" />
            <p>{ele.title}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;

  h1 {
    color: #01a479;
    text-transform: uppercase;
  }

  .skillsContainer {
    width: 85%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, max-content));
    justify-content: center;
    padding: 30px;
    gap: 20px;
  }

  .skillsContainer > div {
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
    padding: 20px 0px 10px 0px;
    border-radius: 10px;
  }

  .skillsContainer > div:hover {
    -webkit-transform: translateY(-5px);
    transform: translateY(-5px);
    -webkit-transition: all 0.8s;
    transition: all 0.8s;
  }
`;

export default Skills;
