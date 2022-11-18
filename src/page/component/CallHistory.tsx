import React, { useState } from "react";
import CallItem from "../../component/CallItem";

const CallHistory = () => {
  const [tab, setTab] = useState("index");

  const handleTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <>
      <div className="select-all-archive">
        <span>
          <i className="fal fa-archive"></i>
          Archive all calls
        </span>
      </div>
      <CallItem />
    </>
  );
};

export default CallHistory;
