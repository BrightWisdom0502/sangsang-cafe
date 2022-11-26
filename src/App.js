//import { Route, Routes, Link } from "react-router";
import { Routes, Route, Link } from "react-router-dom"
import Main from "./components/MainMenuPage/Main";
import AdminChoice from "./components/AdminPage/AdminChoice";
import Menu from "./components/MenuPage/Menu";
import ViewOrderList from "./components/ViewOrderListPage/ViewOrderList";
import EditMenu from "./components/EditMenuPage/EditMenu";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div>
    <nav>
        <Link to="/">Home</Link>|
        <Link to="/menu-choice">Menu</Link>|
        <Link to="/admin-choice">AdminChoice</Link>|
        <Link to="/view-order-list">ViewOrderList</Link>|
        <Link to="/edit-menu">EditMenu</Link>
      </nav>


    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu-choice" element={<Menu />} />
      <Route path="/admin-choice" element={<AdminChoice />} />
      <Route path="/view-order-list" element={<ViewOrderList />} />
      <Route path="/edit-menu" element={<EditMenu />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
