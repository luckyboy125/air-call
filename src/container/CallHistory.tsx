import React, { useState } from "react";
import CallItem from "../component/CallItem";
import { callDirectionType } from "../config/const";

interface dataType {
  id: number;
  created_at: string;
  direction: string;
  from: string;
  to: string;
  via: string;
  duration: number;
  is_archived: boolean;
  call_type: string;
}

interface CallHistoryProps {
  data: dataType[];
}

const CallHistory = ({ data }: CallHistoryProps) => {
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
      {data?.map((item: dataType) => {
        return !item.is_archived ? (
          <CallItem
            key={item.id}
            time={item.created_at}
            phone={
              item.direction === callDirectionType.out ? item.to : item.from
            }
            who={item.direction === callDirectionType.out ? item.from : item.to}
            via={item.via}
            duration={item.duration}
            call_type={item.call_type}
            direction={item.direction}
          />
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default CallHistory;
