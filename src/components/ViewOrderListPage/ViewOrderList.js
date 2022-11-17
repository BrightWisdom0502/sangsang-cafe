import { useEffect, useState } from "react";

import OrderDetails from "./OrderDetails";
import TotalOrderedList from "./TotalOrderedList";
import TotalInfo from "./TotalInfo";

import order_list from "../../data/order_list.json";

const componentStyle = {
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  padding: "30px"
};

const infoOrderListContainerStyle = {
  display: "flex",
  flexDirection: "column",
  width: "50%",
  height: "100%",
  paddingRight: "30px"
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
  const [currentOrder, setCurrentOrder] = useState(order_list[0]);

  // const updateCurrentOrder = (order) => {
  //   setCurrentOrder(order);
  // }

  return (
    <div id="view-order-list" style={componentStyle}>
      <div id="info-order-list-container" style={infoOrderListContainerStyle}>
        <TotalInfo />
        <TotalOrderedList updateCurrentOrder={setCurrentOrder} />
      </div>
      <div id="order-details-container" style={orderDetailsContainerStyle}>
        <OrderDetails currentOrder={currentOrder} />
      </div>
    </div>
  );
}

export default ViewOrderList;