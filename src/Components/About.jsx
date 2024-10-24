import DownloadIcon from "@mui/icons-material/Download";
import React from "react";
import styled from "styled-components";
import myImage from "../Resources/Images/profilePic3.jpg";
import backgroundImage from "../Resources/Images/backgroundHome.jpg";
import signature from "../Resources/Images/signature.png";

const About = () => {
  return (
    <div id="about">
      <Container>
        <div className="aboutBox">
          <div className="about_leftBox">
            <h1>Hi, I'm Umesh Kumawat.</h1>
            <p>
              An enthusiastic Full Stack Web Developer with two years of job
              experience in a startup company, specializing in the MERN stack.
              I possess a strong set of technical as well as non-technical skills
              and a dedication towards creating useful and interactive web applications.
            </p>
          </div>
          <div className="about_rightBox">
            <div>
              <img src={myImage} alt="" width="100%" />
            </div>
          </div>
        </div>
      </Container>
      <AboutMeWrapper>
        <div className="aboutSection">
          <div className="left">
            <h3>Personal Details</h3>
            <p></p>
            <p>
              Email: <span>royanosh777@gmail.com</span>
            </p>
            <p>
              Phone: <span>+91 6376390755</span>
            </p>
            <p>
              Language: <span>English, Hindi</span>
            </p>
          </div>
          <div className="right">
            <h2>
              Hi, I am <span>Umesh Kumawat</span>
            </h2>
            <p>
              I am from <span>Jaipur, Rajasthan (India)</span>. I have completed
              my bachelor's in{" "}
              <span>Machine Learning & Artificial Intelligence</span> from{" "}
              <span>
                Bhartiya Skill Development University, Jaipur, Rajasthan
              </span>{" "}
              . Then I joined a full stack web development course at{" "}
              <span>Masai School</span>, a military-style coding school. Now, I'm
              a creative developer with the ability to learn and collaborate in
              rapidly changing environments and compositions. Skilled in problem
              solving and execution of software tasks from start to finish. I am
              currently working as a Full Stack Web Developer specializing in the
              MERN stack, with more than 2 years of experience, utilizing my skills
              and knowledge in a challenging environment.
            </p>
          </div>
        </div>
      </AboutMeWrapper>
    </div>
  );
};

const Container = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${backgroundImage});
  a {
    text-decoration: none;
  }
  .aboutBox {
    width: 80%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .about_leftBox {
    width: 50%;
    text-align: left;
    padding: 10px;
  }

  .about_leftBox > h1 {
    font-size: 30px;
    line-height: 10px;
  }

  .about_leftBox > p {
    color: #8492a6;
    font-size: 17px;
    font-weight: 500;
  }

  .about_leftBox button {
    padding: 12px 20px 12px 20px;
    border-radius: 10px;
    border: 1px solid #01a479;
    background: #01a479;
    color: white;
    display: flex;
    align-items: center;
    gap: 5px;
    font-weight: bold;
    font-size: 15px;
  }

  .about_leftBox button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .about_rightBox {
    width: 50%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
  }

  .about_rightBox > div {
    width: 250px;
    height: 250px;
    margin: auto;
    border-radius: 100%;
    background-color: white;
    overflow: hidden;
    position: relative;
  }
  .about_rightBox > div > img {
    position: absolute;
    top: -100px;
    left: 0;
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
      gap: 0px;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 60%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
      margin: auto;
      border-radius: 100%;
      background-color: white;
      overflow: hidden;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 17px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 200px;
      height: 200px;
    }
  }

  @media only screen and (max-width: 320px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: x-large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }

  @media only screen and (max-width: 319px) {
    height: 450px;
    .aboutBox {
      height: 100%;
      flex-direction: column-reverse;
    }

    .about_leftBox > h1 {
      font-size: large;
      line-height: 0px;
      text-align: center;
    }

    .about_leftBox > p {
      color: #8492a6;
      font-size: 15px;
      font-weight: 500;
    }

    .about_leftBox {
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: column;
      text-align: center;
    }

    .about_rightBox {
      width: 100%;
      height: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 15px;
    }

    .about_rightBox > div {
      width: 150px;
      height: 150px;
    }
  }
`;
const AboutMeWrapper = styled.div`
  width: 100%;
  margin-top: -50px;
  margin-bottom: 40px;
  .aboutSection {
    width: 80%;
    margin: auto;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    display: flex;
    justify-content: center;
    padding: 20px;
    border-radius: 10px;
    gap: 10px;
  }
  .left {
    width: 30%;
    text-align: left;
    background-color: #f8f9fa;
    padding: 5px 15px 5px 15px;
    border-radius: 10px;
  }

  .left > p {
    font-size: small;
    font-weight: bold;
  }

  .left > p > span {
    color: #707070;
  }

  .left > h3 + p {
    margin-top: 0px;
    border-top: 1.5px dashed #d4dae1;
  }

  .right {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px 10px 0px 10px;
  }

  .right > h2 {
    width: 100%;
    margin-bottom: 0px;
    font-size: 20px;
    text-align: left;
  }
  .right > h2 > span {
    color: #01a479;
  }
  .right > p > span {
    color: #01a479;
  }

  .right > p {
    text-align: left;
    margin-top: 5px;
  }

  .right > div {
    display: flex;
    align-items: flex-start;
    overflow: hidden;
    margin-top: -10px;
  }

  .right > div > img {
    margin-left: -15px;
  }

  @media only screen and (min-width: 769px) and (max-width: 1110px) {
    .left {
      width: 35%;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > p {
      font-size: 14px;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }

    .right > h2 {
      font-size: 17px;
    }

    .right > p {
      font-size: 15px;
    }
  }

  @media only screen and (max-width: 320px) {
    margin-top: 20px;
    .aboutSection {
      flex-direction: column;
      align-items: center;
    }

    .left {
      width: 90%;
    }
    .right {
      width: 90%;
    }
    .right > h2 {
      font-size: 16px;
    }

    .right > p {
      font-size: 13px;
    }
  }
`;
export default About;
