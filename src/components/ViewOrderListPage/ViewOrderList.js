import OrderDetails from "./OrderDetails";
import TotalOrderedList from "./TotalOrderList";
import TotalInfo from "./TotalRevenueAndOrderCount";


const ViewOrderList = () => {
  return (
    <>
      <TotalInfo />
      <TotalOrderedList />
      <OrderDetails />
    </>
  );
}
