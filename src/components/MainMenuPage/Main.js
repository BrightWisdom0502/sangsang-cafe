import ForCustomer from "./ForCustomer";
import ForAdmin from "./ForAdmin";

const mainMenuContainerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
  height: "100vh",
  backgroundColor: "#a4d3a0"
}

const titleStyle = {
  textAlign: "center",
  fontSize: "70px",
  fontWeight: "bold"
}

const Main = () => {
  return (
    <div style={mainMenuContainerStyle}>
      <h1 style={titleStyle}>상상 카페</h1>
      <ForCustomer />
      <ForAdmin />
    </div>
  );
}

export default Main;