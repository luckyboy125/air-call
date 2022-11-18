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

  const handleUnArchive = (callId: number) => {
    setSpinner(true);
    axios
      .post(`${apiUrl}/activities/${callId}`, {
        is_archived: false,
      })
      .then((res) => fetchCallData())
      .catch((err) => console.log(err));
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

  useEffect(() => {
    fetchCallData();
  }, []);

  return (
    <div className="container">
      <>
        <Header onTab={(e) => handleTab(e)} />
        {tab === tabIndex.all ? (
          <CallHistory
            data={data}
            onArchive={(e) => handleArchive(e)}
            onReset={handleReset}
          />
        ) : (
          <Archive data={data} onUnArchive={(e) => handleUnArchive(e)} />
        )}
      </>
      <Spinner start={spinner} />
    </div>
  );
}

export default App;
