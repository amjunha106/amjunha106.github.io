import './Home.css';
import Item from '../../components/item';

const Home = () => {
  const image1 = "/assets/images/image1.jpg";
  const image2 = "/assets/images/image2.jpg";
  const image3 = "/assets/images/image3.jpg";

  return (
    <div className="Home-page">
      <div className="Home-container">
        <Item to="/AboutMe" image={image1} altText="About Me" text="About Me" />
        <Item to="/portfolio" image={image2} text="Portfolio" />
        <Item to="/contact" image={image3} text="Contact" />
      </div>
    </div>
  );
};

export default Home;
