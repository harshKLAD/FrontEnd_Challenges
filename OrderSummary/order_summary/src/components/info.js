import react from "react";
import PayBtn from "../components/payment_Btn";
import Item from "../components/item";

class info extends react.Component {
  render() {
    return (
      <div className="info">
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <Item />
        <PayBtn />
        <h3>Cancel Order</h3>
      </div>
    );
  }
}

export default info;
