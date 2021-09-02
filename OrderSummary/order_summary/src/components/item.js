import react from "react";

class item extends react.Component {
  render() {
    return (
      <div className="itmDIV brdr">
        <div className="itmDIV2 w-50 brdr">
          <div className="w-50 brdr">
            <img src="/public/icon-music.svg" alt="ff"></img>
          </div>
          <div className="w-50 itmINFO brdr">
            <p>Annual Plan</p>
            <p>$59.99/year</p>
          </div>
        </div>
        <div className="w-50 brdr">
          <p>Change</p>
        </div>
      </div>
    );
  }
}

export default item;
