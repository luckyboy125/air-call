import CallItem from "../component/CallItem";
import { callDirectionType } from "../config/const";

interface ArchiveProps {
  data: dataType[];
  onUnArchive: (e: number) => void;
}

const Archive = ({ data, onUnArchive }: ArchiveProps) => {
  const handleArchive = (id: number) => {
    onUnArchive(id);
  };

  return (
    <>
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
          />
        ) : (
          <></>
        );
      })}
    </>
  );
};

export default Archive;
