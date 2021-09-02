import react from "react";
import Info from "../components/info";

class container extends react.Component {
  render() {
    return (
      <div className="container">
        <div className="imgHero"></div>
        <Info />
      </div>
    );
  }
}

export default container;
