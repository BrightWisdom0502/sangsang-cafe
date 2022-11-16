import OrderDetails from "./OrderDetails";
import TotalOrderedList from "./TotalOrderedList";
import TotalInfo from "./TotalInfo";

const componentStyle = {
  padding: "30px"
};

const totalOrderedListStyle = {
  marginTop: "30px"
};

const ViewOrderList = () => {
  return (
    <div id="view-order-list" style={componentStyle}>
      <TotalInfo />
      <TotalOrderedList />
      <OrderDetails />
    </div>
  );
}

export default ViewOrderList;