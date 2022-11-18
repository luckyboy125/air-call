import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./component/Spinner";
import { apiUrl, tabIndex } from "./config/const";
import Archive from "./container/Archive";
import CallHistory from "./container/CallHistory";
import Header from "./container/Header";

function App() {
  const [tab, setTab] = useState<string>(tabIndex.all);
  const [data, setData] = useState<dataType[]>([]);
  const [spinner, setSpinner] = useState(true);

  const handleTab = (tab: string) => {
    setTab(tab);
  };

  const handleReset = () => {
    const cancelTokenSource = axios.CancelToken.source();
    const url = `${apiUrl}/reset`;
    setSpinner(true);
    axios
      .get(url, { cancelToken: cancelTokenSource.token })
      .then((res) => fetchCallData())
      .catch((err) => console.log(err));
  };

  const fetchCallData = () => {
    const cancelTokenSource = axios.CancelToken.source();
    const url = `${apiUrl}/activities`;
    axios
      .get(url, { cancelToken: cancelTokenSource.token })
      .then((res) => {
        setData(res.data);
        setSpinner(false);
      })
      .catch((err) => console.log(err));
    return () => cancelTokenSource.cancel();
  };

  const handleArchive = (callId: number) => {
    setSpinner(true);
    axios
      .post(`${apiUrl}/activities/${callId}`, {
        is_archived: true,
      })
      .then((res) => fetchCallData())
      .catch((err) => console.log(err));
  };

  const handleAllArchive = () => {
    setSpinner(true);
    data
      .filter((item: dataType) => {
        return !item.is_archived;
      })
      .map((item: dataType) => {
        axios
          .post(`${apiUrl}/activities/${item.id}`, {
            is_archived: true,
          })
          .then((res) => fetchCallData())
          .catch((err) => console.log(err));
      });
  };

  const handleAllUnArchive = () => {
    setSpinner(true);
    data
      .filter((item: dataType) => {
        return item.is_archived;
      })
      .map((item: dataType) => {
        axios
          .post(`${apiUrl}/activities/${item.id}`, {
            is_archived: false,
          })
          .then((res) => fetchCallData())
          .catch((err) => console.log(err));
      });
  };

  const handleUnArchive = (callId: number) => {
    setSpinner(true);
    axios
      .post(`${apiUrl}/activities/${callId}`, {
        is_archived: false,
      })
      .then((res) => fetchCallData())
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchCallData();
  }, []);

  return (
    <div className="container">
      <>
        <Header onTab={(e) => handleTab(e)} onReset={handleReset} />
        {tab === tabIndex.all ? (
          <CallHistory
            data={data}
            onArchive={(e) => handleArchive(e)}
            onAllSelect={handleAllArchive}
          />
        ) : (
          <Archive
            data={data}
            onUnArchive={(e) => handleUnArchive(e)}
            onAllSelect={handleAllUnArchive}
          />
        )}
      </>
      <Spinner start={spinner} />
    </div>
  );
}

export default App;
