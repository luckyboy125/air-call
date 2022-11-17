import CallItem from "./component/CallItem";
import Header from "./Header";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="select-all-archive">
        <span>
          <i className="fal fa-archive"></i>
          Archive all calls
        </span>
      </div>
      <CallItem />
    </div>
  );
}

export default App;
