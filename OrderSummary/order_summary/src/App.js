import "./assets/App.css";
import react from "react";
import Container from "./components/container";

class App extends react.Component {
  render() {
    return (
      <div className="bgnd">
        <Container />
      </div>
    );
  }
}

export default App;
