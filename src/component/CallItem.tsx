import React, { useState } from "react";

const CallItem = () => {
  const [archive, setArchive] = useState(false);
  const handleClick = () => {
    setArchive(!archive);
  };

  const handlArchive = () => {};
  return (
    <>
      <div className="call-item-divline">
        <div className="call-dottedline"></div>
        <span>JULY, 27 2017</span>
        <div className="call-dottedline"></div>
      </div>
      <div className="call-item-root" onClick={handleClick}>
        <div className="call-item">
          <div className="first-part">
            <i className="fas fa-phone-alt phone-icon">
              <i className="fas fa-arrow-down status"></i>
            </i>
            <div>
              <div className="phone-number">+33 6 45 12 53 91</div>
              <div className="phone-des">tried to call on Xanier</div>
            </div>
          </div>
          <div className="last-part">
            <div className="call-date">07:58</div>
            <div className="call-date-state">PM</div>
          </div>
        </div>
        {archive ? (
          <>
            <div className="call-item-detail">
              <div className="call-item-detail-item">
                <i className="far fa-user"></i>: Xavier Durand
              </div>
              <div className="call-item-detail-item">
                <i className="far fa-phone"></i>: Missed
              </div>
              <div className="call-item-detail-item">
                <i className="far fa-phone-office"></i>: Support FR
              </div>
              <div className="call-item-detail-item">
                <i className="fas fa-history"></i>: 3mins
              </div>
            </div>
            <div className="call-item-archive" onClick={handlArchive}>
              <span>
                <i className="fal fa-archive"></i>
                Archive this call
              </span>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default CallItem;
