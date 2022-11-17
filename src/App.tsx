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
      <div className="call-item-divline">
        <div className="call-dottedline"></div>
        <span>JULY, 27 2017</span>
        <div className="call-dottedline"></div>
      </div>
      <div className="call-item">
        <div className="first-part">
          <i className="fas fa-phone-alt phone-icon">
            <i className="fas fa-arrow-down status"></i>
          </i>
          <div>
            <div className="phone-number">+33 6 45 12 53 91</div>
            <div className="phone-des">tried to call on Xanier</div>
          </div>
        </div>
        <div className="last-part"></div>
        <div></div>
      </div>
    </div>
  );
}

export default App;
