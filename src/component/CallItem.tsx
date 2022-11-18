import React, { useState } from "react";
import { callDirectionType, callType } from "../config/const";
import { dateConvert } from "../config/utils";

interface callitemprops {
  time: string;
  phone: string;
  who: string;
  via: string;
  duration: number;
  call_type: string;
  direction: string;
}

const CallItem = ({
  time,
  phone,
  who,
  via,
  duration,
  call_type,
  direction,
}: callitemprops) => {
  const [archive, setArchive] = useState(false);
  const handleClick = () => {
    setArchive(!archive);
  };

  const timeData = dateConvert(new Date(time).getTime() / 1000);

  const handlArchive = () => {};

  return (
    <>
      <div className="call-item-divline">
        <div className="call-dottedline"></div>
        <span>{timeData.date}</span>
        <div className="call-dottedline"></div>
      </div>
      <div className="call-item-root" onClick={handleClick}>
        <div className="call-item">
          <div className="first-part">
            <i className="fas fa-phone-alt phone-icon">
              <i
                className={`fas fa-arrow-down ${
                  direction === callDirectionType.in ? "inbound" : "outbound"
                } ${
                  call_type === callType.answer ? "color-green" : "color-red"
                }`}
              ></i>
            </i>
            <div>
              <div className="phone-number">{phone}</div>
              <div className="phone-des">
                tried to call on {who?.split(" ")[0]}
              </div>
            </div>
          </div>
          <div className="last-part">
            <div className="call-date">{timeData.time}</div>
            <div className="call-date-state">{timeData.day}</div>
          </div>
        </div>
        {archive ? (
          <>
            <div className="call-item-detail">
              <div className="call-item-detail-item">
                <i className="far fa-user"></i>: {who}
              </div>
              <div className="call-item-detail-item">
                <i className="far fa-phone"></i>: {call_type}
              </div>
              <div className="call-item-detail-item">
                <i className="far fa-phone-office"></i>: {via}
              </div>
              <div className="call-item-detail-item">
                <i className="fas fa-history"></i>: {duration}
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
