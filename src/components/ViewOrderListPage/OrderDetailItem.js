import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const componentStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between"
}

const revenueButtonContainerStyle = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center"
}

const viewDetailButtonStyle = { 
  marginLeft: "20px",
  marginRight: "20px"
}

const OrderDetailItem = ({ order, updateCurrentOrder }) => {
  const menu = (order.products.length > 1) ?
    <p>{order.products[0]} 외 {order.products.length - 1}건</p> : <p>{order.products[0]}</p>;

  return (
    <Card>
      <Card.Body style={componentStyle}>
        <div id="time-and-order-container">
          <p>{order.date.split(" ")[1]}</p>
          {menu}
        </div>
        <div id="revenue-button-container" style={revenueButtonContainerStyle}>
          <div id="revenue-container">
            <h2>{order.cost}원</h2>
          </div>
          <div id="view-detail-button-container" style={viewDetailButtonStyle}>
            <Button style={{backgroundColor: "green", border: "none"}} onClick={() => {updateCurrentOrder(order)}}>상세</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default OrderDetailItem;