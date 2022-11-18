import { useState } from "react";
import CallItem from "../component/CallItem";
import { callDirectionType } from "../config/const";

interface ArchiveProps {
  data: dataType[];
  onAllSelect: () => void;
  onUnArchive: (e: number) => void;
}

const Archive = ({ data, onAllSelect, onUnArchive }: ArchiveProps) => {
  const [select, setSelect] = useState(0);
  const handleArchive = (id: number) => {
    onUnArchive(id);
  };

  const ArchiveData = data.filter((item: dataType) => {
    return item.is_archived;
  });

  return ArchiveData.length === 0 ? (
    <div className="nodata">There is no Archive call.</div>
  ) : (
    <>
      <div className="select-all" onClick={onAllSelect}>
        <span>
          <i className="fal fa-archive"></i>
          Undo Archive all calls
        </span>
      </div>
      {data?.map((item: dataType) => {
        return item.is_archived ? (
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
            btnLetter="Undo Archive"
            onRoot={(e) => setSelect(e)}
            select={select}
          />
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default Archive;
