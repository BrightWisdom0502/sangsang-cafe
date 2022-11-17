import Toast from 'react-bootstrap/Toast';

const componentStyle = {
  
}

const OrderDetails = ({ currentOrder }) => {
  console.log(currentOrder);

  return (
    <div id="order-details" style={componentStyle}>
      <Toast>
        <Toast.Body>
          <div id="order-detail-title">
            <h1>주문 상세</h1> 
          </div>
          <div id="order-detail-revenue-time">
            <div>
              <h2>주문 금액</h2>
              <h3>{currentOrder.cost}원</h3>
            </div>
            <div>
              <h2>주문 시간</h2>
              <h3>{currentOrder.date.split(" ")[1]}</h3>
            </div>
          </div>
        </Toast.Body>
      </Toast>
    </div>
  );
}

export default OrderDetails;