import { useState } from "react";
import Button from "react-bootstrap/Button";
import { AiFillHome } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import OrderDetails from "./OrderDetails";
import TotalOrderedList from "./TotalOrderedList";
import TotalInfo from "./TotalInfo";

import order_list from "../../data/order_list.json";

const componentStyle = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  padding: "30px",
  backgroundColor: "#A4D3A0"
};

const infoOrderListContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
  paddingRight: "30px"
}

const buttonInfoContainerStyle = {
  display: "flex",
  flexDirection: "row"
}

const buttonStyle = {
  width: "100px",
  marginRight: "30px",
  textAlign: "center"
}

const orderDetailsContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "50%",
  height: "100%",
  paddingLeft: "30px"
}

const ViewOrderList = () => {
  const [currentOrder, setCurrentOrder] = useState(order_list[order_list.length - 1]);

  return (
    <div id="view-order-list" style={componentStyle}>
      <div id="info-order-list-container" style={infoOrderListContainerStyle}>
        <div id="button-info-container" style={buttonInfoContainerStyle}>
          <Button variant="outline-dark" style={buttonStyle}>
            <AiFillHome style={{fontSize: "50px"}} />
          </Button>
          <Button variant="outline-dark" style={buttonStyle}>
            <BiArrowBack style={{fontSize: "50px"}} />
          </Button>
          <TotalInfo />
        </div>
        <TotalOrderedList updateCurrentOrder={setCurrentOrder} />
      </div>
      <div id="order-details-container" style={orderDetailsContainerStyle}>
        <OrderDetails currentOrder={currentOrder} />
      </div>
    </div>
  );
}

export default ViewOrderList;