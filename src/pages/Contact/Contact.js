import './Contact.css';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className='Con-page'>
        <Link to="/" className="home">Home</Link>
            <div className='Con-container'>
                <h1 className="title">Contact</h1>
                <div className="Con-image-container">
                    <div className="Con-item">
                        <a href="https://github.com/amjunha106">
                            <img src="/assets/images/image45.png" alt='imgs' />
                        </a>
                        <span>USERNAME</span>
                        <span>amjunha106</span>
                    </div>
                    <div className="Con-item">
                        <a href="mailto:amjunha106@gmail.com">
                            <img src="/assets/images/image44.png" alt='imgs' />
                        </a>
                        <span>GMAIL</span>
                        <span>amjunha106@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
