import "./AboutMe.css";
import { Link } from "react-router-dom";

const profileImage = "/assets/images/image1.jpg";
const htmlImg = "/assets/images/image4.png";
const cssImg = "/assets/images/image5.png";
const jsImg = "/assets/images/image6.png";
const reactImg = "/assets/images/image7.png";
const springbootImg = "/assets/images/image8.png";
const javaImg = "/assets/images/image9.png";
const oracleImg = "/assets/images/image10.png";
const mysqlImg = "/assets/images/image11.png";
const intelliJImg = "/assets/images/image12.png";
const vscodeImg = "/assets/images/image13.png";
const githubImg = "/assets/images/image14.png";

const AboutMe = () => {
  return (
    <div className="about-page">
      <h1 className="title">About Me</h1>
      <Link to="/" className="home">Home</Link>

      <div className="about-main">
        <div className="about-img">
          <img src={profileImage} alt="profile" />
        </div>
        <span style={{ fontWeight: "bold", marginBottom: "20px", fontSize: "30px" }}>황준하</span>
        <span>2001.01.06</span>
        <span id="about-highlight">Backend Developer</span>
        <span>안녕하십니까 끈기와 열정이 넘치는 신입개발자 황준하입니다.</span>
      </div>

      <hr className="about-hr" />

      <div>
        <h1 className="about-h1">Skill & Tools</h1>

        <Skill title="Front-End" skills={[
          { name: "HTML", src: htmlImg },
          { name: "CSS", src: cssImg },
          { name: "JavaScript", src: jsImg },
          { name: "REACT", src: reactImg },
        ]} />

        <Skill title="Back-End" skills={[
          { name: "Springboot", src: springbootImg },
          { name: "Java", src: javaImg },
        ]} />

        <Skill title="Database" skills={[
          { name: "Oracle", src: oracleImg },
          { name: "MySql", src: mysqlImg },
        ]} />

        <Skill title="Tools" skills={[
          { name: "IntelliJ", src: intelliJImg },
          { name: "Visual Studio Code", src: vscodeImg },
          { name: "Github", src: githubImg },
        ]} />
      </div>
    </div>
  );
};

const Skill = ({ title, skills }) => {
  return (
    <>
      <h1 className="about-subTitle2">{title}</h1>
      <div className="about-skill-icons">
        {skills.map((skill, index) => (
          <div className="about-icon" key={index}>
            <img src={skill.src} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutMe;
