import React from "react";
import './style.css';

const CustomCard = ({item}) => {

  return (
    <div className="container">
      <div className="top-view">
        <img className="left-img" alt="ethrium" src="assets/ethrium1.png"/>
        <img className="right-img" alt="ethrium" src="assets/custom.png"/>
        <img className="center-img" alt="emoji" src="assets/emoji.png" />
      </div>      
      <div className="title-view">
        <span className="title-txt">{item.title}</span>
        <img className="check-img" alt="icon" src="assets/check.png" />
      </div>
      <div className="sub-title-view">
        <span className="sub-title-txt">{item.numberOfItems}</span>
        <span className="sub-title-txt">items</span>
      </div>
      <div className="detail-view">
        <span className="detail-txt">{item.description}</span>
      </div>
      <div className="bottom-view">
        <div className="bottom-item-view">
          <div className="bottom-item-txt">Owners</div>
          <div className="bottom-item-value">{item.owners}</div>
        </div>
        <div className="divide"/>
        <div className="bottom-item-view">
          <div className="bottom-item-txt">Floor price</div>
          <div className="bottom-item-value">{item.floorPrice}</div>
        </div>
        <div className="divide"/>
        <div className="bottom-item-view">
          <div className="bottom-item-txt">Volume</div>
          <div className="bottom-item-value">{item.volume}</div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;