import CallItem from "../component/CallItem";
import { callDirectionType } from "../config/const";

interface CallHistoryProps {
  data: dataType[];
  onArchive: (e: number) => void;
  onReset: () => void;
}

const CallHistory = ({ data, onArchive, onReset }: CallHistoryProps) => {
  const handleArchive = (id: number) => {
    onArchive(id);
  };

  return (
    <>
      <div className="select-all-archive" onClick={onReset}>
        <span>
          <i className="fal fa-archive"></i>
          Archive all calls
        </span>
      </div>
      {data?.map((item: dataType) => {
        return !item.is_archived ? (
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
          />
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default CallHistory;
