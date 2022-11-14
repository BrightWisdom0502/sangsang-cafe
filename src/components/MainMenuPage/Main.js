import ForCustomer from "./ForCustomer";
import ForAdmin from "./ForAdmin";

import Button from "react-bootstrap/Button";

const Main = () => {
  return (
    <>
      <h1>상상 카페</h1>
      <Button variant="primary">react-bootstrap 테스트</Button>
      <ForCustomer />
      <ForAdmin />
    </>
  );
}

export default Main;