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

const testEvent = () => {
  console.log("This is a test!");
}

const OrderDetailItem = ({ datetime, menus, cost, changeSetCurrentViewOrder }) => {
  const menu = (menus.length > 1) ?
    <p>{menus[0]} 외 {menus.length - 1}건</p> : <p>{menus[0]}</p>;

  return (
    <Card>
      <Card.Body style={componentStyle}>
        <div id="time-and-order-container">
          <p>{datetime.split(" ")[1]}</p>
          {menu}
        </div>
        <div id="revenue-button-container" style={revenueButtonContainerStyle}>
          <div id="revenue-container">
            <h2>{cost}원</h2>
          </div>
          <div id="view-detail-button-container" style={viewDetailButtonStyle}>
            <Button onClick={changeSetCurrentViewOrder(datetime)}>상세</Button>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}

export default OrderDetailItem;