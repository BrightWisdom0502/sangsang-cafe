import OrderDetails from "./OrderDetails";
import TotalOrderedList from "./TotalOrderedList";
import TotalInfo from "./TotalInfo";


const ViewOrderList = () => {
  return (
    <>
      <TotalInfo />
      <TotalOrderedList />
      <OrderDetails />
    </>
  );
}
