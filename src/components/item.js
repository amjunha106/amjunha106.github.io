import { Link } from 'react-router-dom';

const item = ({ to, image, text, altText }) => {
  return (
    <div className="Home-item">
      <Link to={to}>
        <img src={image} alt={altText || "Image"} />
        <span>{text}</span>
      </Link>
    </div>
  );
}

export default item;
