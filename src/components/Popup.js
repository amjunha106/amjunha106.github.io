import './Popup.css';

const Popup = ({ item2, closePopup }) => {
  console.log(item2);

  const renderFeature = (feature, featureImg, additionalImages = []) => {
    if (!feature) return null;

    return (
      <li>
        {feature}<br/>
        {featureImg && <img src={featureImg} alt={feature} />}
        {additionalImages.map((img, index) =>
          img ? <img key={index} src={img} alt={`${feature}-${index}`} /> : null
        )}
      </li>
    );
  };

  return (
    <div className="Port-popup">
      <button className="Port-popup-close" onClick={closePopup}>X</button>
      <div className="Port-popup-content">
        <br />
        <p>
          <span style={{ fontSize: '50px', fontWeight: 'bold' }}>{item2.title}</span>
          <br /><br />
          {item2.sub}
          <br /><br />
          {item2.tag1 && <span className="Port-projSub">{item2.tag1}</span>}&nbsp;&nbsp;
          {item2.tag2 && <span className="Port-projSub">{item2.tag2}</span>}&nbsp;&nbsp;
          {item2.tag3 && <span className="Port-projSub">{item2.tag3}</span>}&nbsp;&nbsp;
          {item2.tag4 && <span className="Port-projSub">{item2.tag4}</span>}&nbsp;&nbsp;
        </p>

        <img src={item2.image} alt={item2.title} className="Popup-image" />
        <br /><br /><hr /><br /><br />

        <h2>{item2.title2}</h2>
        <ul>
          {item2.skill1 && <li>{item2.skill1}</li>}
          {item2.skill2 && <li>{item2.skill2}</li>}
          {item2.skill3 && <li>{item2.skill3}</li>}
          {item2.skill4 && <li>{item2.skill4}</li>}
          {item2.skill5 && <li>{item2.skill5}</li>}
          {item2.skill6 && <li>{item2.skill6}</li>}
        </ul>

        <br /><br />
        <h2>{item2.title3}</h2>
        <ul>
          {renderFeature(item2.feature1, item2.feature1Img)}
          {renderFeature(item2.feature2, item2.feature2Img, [item2.feature2_1Img])}
          {renderFeature(item2.feature3, item2.feature3Img)}
          {renderFeature(item2.feature4, item2.feature4Img)}
          {renderFeature(item2.feature5, item2.feature5Img, [item2.feature5_1Img])}
          {renderFeature(item2.feature6, item2.feature6Img)}
          {renderFeature(item2.feature7, item2.feature7Img)}
          {renderFeature(item2.feature8, item2.feature8Img)}
        </ul>
      </div>
    </div>
  );
};

export default Popup;
