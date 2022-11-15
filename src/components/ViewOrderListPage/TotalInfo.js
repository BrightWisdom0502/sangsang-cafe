import { useState } from "react";

import order_list from "../../data/order_list.json";

const componentStyle = {
  display: "flex",
  flexDirection: "row"
};

const totalRevenueContainerStyle = {
  display: "flex",
  flexDirection: "column",
  "marginRight": "50px"
};

const totalOrderContainerStyle = {
  display: "flex",
  flexDirection: "column"
};

const TotalInfo = () => {
  // 총 매출, 주문 수 계산
  let tempRevenue = 0, tempOrderCound = 0
  order_list.map(data => {
    tempRevenue += parseInt(data.cost);
    tempOrderCound++;
  });

  const [revenue, setRevenue] = useState(tempRevenue);
  const [orderCount, setOrderCount] = useState(tempOrderCound);

  return (
    <div id="component-total-info" style={componentStyle}>
      <div id="total-revenue-container" style={totalRevenueContainerStyle}>
        <h2>매출</h2>
        <h1>{revenue}원</h1>
      </div>
      <div id="total-order-container" style={totalOrderContainerStyle}>
        <h2>주문</h2>
        <h1>{orderCount}건</h1>
      </div>
    </div>
  );
}

export default TotalInfo;