import "./Portfolio.css";
import PortfolioItem from "../../components/PortfolioItem";
import { Link } from "react-router-dom";

const portfolioData = [
  {
    image: "/assets/images/image18.png",
    title: "포트폴리오 사이트",
    sub: "저만의 포트폴리오를 위한 사이트입니다.",
    tag1: "개인 프로젝트",
    tag2: "웹",
    tag3: "반응형",
    tag4: "포트폴리오",
    link: "https://github.com/amjunha106/portfolio"
  },
  {
    image: "/assets/images/image17.png",
    title: "돈슐랭가이드",
    sub: "서울권의 돈까스맛집 순위를 확인하고 의견을 댓글로 나눠보세요!",
    tag1: "개인 프로젝트",
    tag2: "웹",
    tag3: "반응형",
    link: "https://github.com/amjunha106/map"
  },
  {
    image: "/assets/images/image16.png",
    title: "Project_Planner",
    sub: "프로젝트 작업시 수월한 작업과 일정조율을 위한 사이트",
    tag1: "팀 프로젝트",
    tag2: "웹",
    link: "https://github.com/amjunha106/Final"
  },
  {
    image: "/assets/images/image15.png",
    title: "휴먼철도999",
    sub: "열차조회 및 예약을 하고 추천여행지와 이벤트 상품을 확인해보세요!",
    tag1: "팀 프로젝트",
    tag2: "웹",
    link: "https://github.com/amjunha106/semiFinal"
  }
];

const Portfolio = () => {
  return (
    <div className="Port-page">
      <h1 className="title">Portfolio</h1>
      <Link to="/" className="home">Home</Link>
      <br></br><br></br>
      <hr/>
      <br></br><br></br>
      <div className="Port-container-wrapper">
        {portfolioData.map((item, index) => (
            <PortfolioItem key={index} item={item} />
          ))}
      </div>

    </div>
  );
};

export default Portfolio;
