import ForHere from "./ForHere";
import Takeout from "./Takeout";

const forCustomerButtonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-evenly"
}

const ForCustomer = () => {
  return (
    <div id="for-customer-buttons-container" style={forCustomerButtonsContainer}>
      <ForHere />
      <Takeout />
    </div>
  );
}

export default ForCustomer;