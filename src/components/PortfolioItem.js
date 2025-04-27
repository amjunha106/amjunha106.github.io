import React, { useState } from 'react';
import Popup from './Popup';
import popupData from './popupData';

const PortfolioItem = ({ item }) => {

  const [showPopup, setShowPopup] = useState(false);

  const openPopup = () => setShowPopup(true);
  const closePopup = () => setShowPopup(false);

  const item2 = popupData.find(data => data.title === item.title);

  return (
    <div className="Port-container">
      <div className="Port-item">
        <div>
          <img src={item.image} alt={item.title} />
        </div>
        <div className="Port-projCont">
          <p className="Port-projTitle">{item.title}</p>
          <p>{item.sub}</p>
          <br />
          <span className="Port-projSub">{item.tag1}</span>&nbsp;&nbsp;
          <span className="Port-projSub">{item.tag2}</span>&nbsp;&nbsp;
          {item.tag3 && <span className="Port-projSub">{item.tag3}</span>}&nbsp;&nbsp;
          {item.tag4 && <span className="Port-projSub">{item.tag4}</span>}&nbsp;&nbsp;
        </div>
      </div>
      <div className="Port-more-btns">
        <button className="Port-more" onClick={openPopup}>
          자세히 보기
        </button>
        <a
          href={item.link}
          className="Port-more"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub로 이동
        </a>
      </div>
      {showPopup && item2 && <Popup item2={item2} closePopup={closePopup} />}
    </div>
  );
};

export default PortfolioItem;
