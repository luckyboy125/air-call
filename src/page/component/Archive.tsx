import React, { useState } from "react";
import CallItem from "../../component/CallItem";

const Archive = () => {
  const [tab, setTab] = useState("index");

  const handleTab = (tab: string) => {
    setTab(tab);
  };
  return (
    <>
      <CallItem />
    </>
  );
};

export default Archive;
