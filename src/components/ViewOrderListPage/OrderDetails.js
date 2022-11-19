import Card from 'react-bootstrap/Card';

import beverage from "../../data/beverage.json";
import coffee from "../../data/coffee.json";
import desserts from "../../data/desserts.json";
import tea from "../../data/tea.json";

const componentStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  padding: "30px"
}

const revenueTimeContainerStyle = {
  display: "flex",
  flexDirection: "row",
  marginBottom: "70px",
  justifyContent: "center"
}

const menuContainerStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
}

const menusStyle = {
  display: "flex",
  flexDirection: "column"
}

const priceAndAmountStyle = {
  display: "flex",
  flexDirection: "column",
  marginLeft: "50px",
  textAlign: "center"
}

const OrderDetails = ({ currentOrder }) => {
  const currentOrderInfo = [];
  const temp = [];

  currentOrder.products.map(menu => {
    let price = 0;
    
    beverage.map(data => {
      if (data.name === menu) price = data.price;
    });
    coffee.map(data => {
      if (data.name === menu) price = data.price;
    });
    desserts.map(data => {
      if (data.name === menu) price = data.price;
    });
    tea.map(data => {
      if (data.name === menu) price = data.price;
    });

    if (currentOrderInfo.length <= 0) {
      currentOrderInfo.push({ menu: menu, price: price, amount: 1 });
      temp.push(menu);
    } else if (temp.includes(menu)) {
      for (const e of currentOrderInfo) {
        if (e.menu === menu) {
          e.amount += 1;
          break;
        } 
      }
    } else {
      currentOrderInfo.push({ menu: menu, price: price, amount: 1 });
      temp.push(menu);
    }
  });

  return (
    <div id="order-details" style={{width: "100%", height: "100%"}}>
      <Card style={{height: "100%"}}>
        <Card.Body style={componentStyle}>
          <div id="order-detail-title" style={{textAlign: "center"}}>
            <h1 style={{fontSize: "70px", marginBottom: "70px"}}>주문 상세</h1> 
          </div>
          <div id="order-detail-revenue-time" style={revenueTimeContainerStyle}>
            <div style={{marginRight: "60px"}}>
              <h2 style={{fontSize: "35px"}}>주문 금액</h2>
              <h3 style={{fontSize: "50px", fontWeight: "bold"}}>{currentOrder.cost}원</h3>
            </div>
            <div>
              <h2 style={{fontSize: "35px"}}>주문 시간</h2>
              <h3 style={{fontSize: "50px", fontWeight: "bold"}}>{currentOrder.date.split(" ")[1]}</h3>
            </div>
          </div>
          <div id="order-detail-menu-container" style={menuContainerStyle}>
            <div id="order-detail-menus" style={menusStyle}>
              <h3 style={{fontSize: "30px"}}>메뉴명</h3>
              {
                currentOrderInfo.map((menu, i) => {
                  return <span style={{fontSize: "30px"}} key={i}>{menu.menu}</span>
                })
              }
            </div>
            <div id="order-detail-price" style={priceAndAmountStyle}>
              <h3 style={{fontSize: "30px"}}>가격</h3>
              {
                currentOrderInfo.map((menu, i) => {
                  return <span style={{fontSize: "30px"}} key={i}>{menu.price}</span>
                })
              }
            </div>
            <div id="order-detail-amount" style={priceAndAmountStyle}>
              <h3 style={{fontSize: "30px"}}>수량</h3>
              {
                currentOrderInfo.map((menu, i) => {
                  return <span style={{fontSize: "30px"}} key={i}>{menu.amount.toString()}</span>
                })
              }
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default OrderDetails;