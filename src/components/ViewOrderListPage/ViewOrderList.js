import { useState } from "react";

import OrderDetails from "./OrderDetails";
import TotalOrderedList from "./TotalOrderedList";
import TotalInfo from "./TotalInfo";

import order_list from "../../data/order_list.json";

const componentStyle = {
  padding: "30px"
};

const ViewOrderList = () => {
  const [currentViewOrder, setCurrentViewOrder] = useState(order_list[0]);

  const changeCurrentViewOrder = (datetime) => {
    const order = order_list.filter(data => data.date === datetime);
    setCurrentViewOrder(order);
  }

  return (
    <div id="view-order-list" style={componentStyle}>
      <TotalInfo />
      <TotalOrderedList changeSetCurrentViewOrder={changeCurrentViewOrder} />
      <OrderDetails currentOrder={currentViewOrder} />
    </div>
  );
}

export default ViewOrderList;