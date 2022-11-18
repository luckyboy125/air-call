import { SpinnerCircularFixed } from "spinners-react";

interface SpinnerProps {
  start: boolean;
}

const Spinner = ({ start }: SpinnerProps) => {
  return (
    <>
      <div className={start ? "spinner-loaderWrapper " : "display-none"}>
        <div className={"spinner-spinnerRoot"}>
          <SpinnerCircularFixed
            speed={150}
            size={50}
            className="spinner-spinner-content"
          />
          <div className="spinner-spinner-loading">
            <span className="spinner-spinner-load">Loading</span>
            <div className="spinner-spinner-dots">
              <div className="spinner-spinner-dot1">
                <i className="fas fa-circle"></i>
              </div>

              <div className="spinner-spinner-dot2">
                <i className="fas fa-circle"></i>
              </div>

              <div className="spinner-spinner-dot3">
                <i className="fas fa-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Spinner;
