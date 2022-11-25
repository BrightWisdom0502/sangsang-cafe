import ForCustomer from "./ForCustomer";
import ForAdmin from "./ForAdmin";

import Button from "react-bootstrap/Button";

const Main = () => {
  return (
    <>
      <h1>상상 카페</h1>
      <ForCustomer />
      <ForAdmin />
    </>
  );
}

export default Main;