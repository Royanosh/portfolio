import React from "react";
import styled from "styled-components";
import firstpost from "../Resources/Images/Project/firstpost.jpeg";
import ZAPPOS from "../Resources/Images/Project/zappos.jpeg";
import MILAAP from "../Resources/Images/Project/milaap.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import StreamIcon from "@mui/icons-material/Stream";

const Projects = () => {
  const projects = [
    {
      id: 2,
      title: "ZAPPOS Clone",
      img: ZAPPOS,
      desc: "Zappos.com is an American online shoe and clothing retailer based in Las Vegas, Nevada, United States.",
      worked:
        "A collaborative project, built in 7 days by a team of 3 developers.",
      features: [
        "Whole website responsive.",
        "Features like register, login, searching, sorting all filters.",
        "Whole flow of e-commerce working from searching to checkout.",
      ],
      keyPoint1: "E",
      keyPoint2: "",
      githubLink: "https://github.com/Royanosh/zappos",
      deployedLink: "https://zappos-official.netlify.app/",
      tags: ["HTML", "CSS", "Javascript", "React", "Chakra UI"],
    },
    {
      id: 1,
      title: "FIRSTPOST Clone",
      img: firstpost,
      desc: "Firstpost is an Indian conservative online news and media website.",
      worked:
        "A collaborative project, built in 5 days by a team of 4 developers.",
      features: [
        "Whole website responsive.",
        "Login Signup functionality working properly.",
        "User can able to read news in different regions.",
      ],
      keyPoint2: "",
      keyPoint1: "",
      githubLink: "https://github.com/Royanosh/firstpost",
      deployedLink: "https://firstpost-clone.netlify.app/",
      tags: ["HTML", "CSS", "Javascript", "JSON-SERVER"],
    },
    {
      id: 4,
      title: "MILAAP Clone",
      img: MILAAP,
      desc: "Raise funds online for medical emergencies and social causes",
      features: [
        "Login Signup functionality.",
        "User can raise funds by using website fundraiser feature.",
        "User can donate.",
      ],
      worked:
        "A collaborative project, built in 7 days by a team of 5 developers.",
      githubLink: "https://github.com/gauravv8090/Milaap_clone",
      deployedLink: "https://milaapclone.netlify.app/",
      tags: ["HTML", "CSS", "Javascript", "Git"],
    },
  ];

  return (
    <Container id="projects">
      <h1>Projects</h1>
      <div className="projectsContainer">
        {projects.map((ele, index) => (
          <div key={index} className="box">
            <div className="imgBox">
              <img src={ele.img} alt={ele.title} width="100%" />
            </div>
            <div className="ContentBox">
              <h2>{ele.title}</h2>
              <p>{ele.desc}</p>

              <div className="featureBox">
                <h4>Features</h4>
                <ul>
                  {ele.features.map((feature, index) => {
                    return <li key={index}>{feature}</li>;
                  })}
                </ul>
              </div>
              <p style={{ fontWeight: "bold" }}>{ele.worked}</p>

              <div className="tagsBox">
                {ele.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <p style={{ fontWeight: "bold" }}>Code | See this Live</p>
              <div className="linkSection">
                <a href={ele.githubLink} target="_blank">
                  <button>
                    <GitHubIcon />
                    Github
                  </button>
                </a>
                <a href={ele.deployedLink} target="_blank">
                  <button>
                    <StreamIcon />
                    Live
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;

  h1 {
    color: #01a479;
    text-transform: uppercase;
  }

  .projectsContainer {
    width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .box {
    position: relative;
    width: 100%;
    height: 450px;
    display: flex;
    gap: 10px;
    margin-bottom: 80px;
    border: 10px solid #e9e9e9;
    border-radius: 20px;
    overflow: hidden;
  }

  .imgBox {
    width: 50%;
    overflow: hidden;
  }

  .imgBox > img {
    display: block;
    transition: transform 0.4s;
  }

  .imgBox > img:hover {
    position: absolute;
    width: 80%;
    transform: scale(1.3);
    transform-origin: 0% 0%;
  }

  .ContentBox {
    width: 50%;
    text-align: left;
    padding: 0px 20px 20px 20px;
  }

  .ContentBox > h2 {
    color: #01a479;
  }

  .ContentBox > p {
    width: 100%;
    font-size: large;
    margin-top: -10px;
  }
  .featureBox {
    margin-top: -10px;
  }
  .featureBox > h4 {
    color: #01a479;
  }
  .featureBox > ul {
    margin-top: -15px;
    text-align: left;
    font-size: 1em;
  }
  .featureBox + p {
    color: #01a479;
  }
  .tagsBox + p {
    color: #01a479;
  }
  .tagsBox {
    width: 80%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    line-height: 20px;
    gap: 5px;
    margin-bottom: 20px;
  }
  .tagsBox > h4 {
    color: #01a479;
  }
  .tagsBox > span {
    color: white;
    background-color: #01a479;
    padding: 2px 15px 2px 15px;
    border-radius: 10px;
    font-size: 13px;
  }

  .linkSection {
    display: flex;
    gap: 20px;
  }

  .linkSection > a {
    text-decoration: none;
  }
  .linkSection > a:first-child > button {
    background-color: black;
    color: White;
    padding: 8px 20px 8px 20px;
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border: none;
    cursor: pointer;
  }

  button {
    cursor: pointer;
  }

  button:hover {
    -webkit-transform: translateY(-2px);
    transform: translateY(-2px);
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
  }

  .linkSection > a:last-child > button {
    background-color: #44a4be;
    color: White;
    padding: 8px 20px 8px 20px;
    border-radius: 8px;
    border: none;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  @media only screen and (min-width: 768px) and (max-width: 1120px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 80%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 400px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    .ContentBox > h1 {
      font-size: x-large;
    }

    .ContentBox > p {
      font-size: 15px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 80%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 280px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: x-large;
    }

    .ContentBox > p {
      font-size: 15px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 90%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 200px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: large;
    }

    .ContentBox > p {
      font-size: 13px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }

  @media only screen and (max-width: 319px) {
    .box {
      flex-direction: column;
      align-items: center;
      height: 100%;
    }

    .projectsContainer {
      width: 90%;
      margin: auto;
    }

    .imgBox {
      width: 100%;
      height: 150px;
    }

    .imgBox > img {
      width: 100%;
    }

    .ContentBox {
      width: 80%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
    }

    .ContentBox > h1 {
      font-size: large;
    }

    .ContentBox > p {
      font-size: 13px;
    }

    .tagsBox {
      width: 100%;
      justify-content: center;
    }
  }
`;
export default Projects;
