import { useState } from "react";
import CallItem from "../component/CallItem";
import { callDirectionType } from "../config/const";

interface CallHistoryProps {
  data: dataType[];
  onArchive: (e: number) => void;
  onAllSelect: () => void;
}

const CallHistory = ({ data, onArchive, onAllSelect }: CallHistoryProps) => {
  const [select, setSelect] = useState(0);
  const handleArchive = (id: number) => {
    onArchive(id);
  };

  const unArchiveData = data.filter((item: dataType) => {
    return !item.is_archived;
  });

  return unArchiveData.length === 0 ? (
    <div className="nodata">There is no call.</div>
  ) : (
    <>
      <div className="select-all" onClick={onAllSelect}>
        <span>
          <i className="fal fa-archive"></i>
          Archive all calls
        </span>
      </div>
      {unArchiveData?.map((item: dataType) => {
        return (
          <CallItem
            key={item.id}
            id={item.id}
            time={item.created_at}
            phone={
              item.direction === callDirectionType.out ? item.to : item.from
            }
            who={item.direction === callDirectionType.out ? item.from : item.to}
            via={item.via}
            duration={item.duration}
            call_type={item.call_type}
            direction={item.direction}
            onAction={(e) => handleArchive(e)}
            btnLetter="Archive"
            onRoot={(e) => setSelect(e)}
            select={select}
          />
        );
      })}
    </>
  );
};

export default CallHistory;
