import { Route, Routes } from "react-router";
import Main from "./components/MainMenuPage/Main";
import AdminChoice from "./components/AdminPage/AdminChoice";
import Menu from "./components/MenuPage/Menu";
import ViewOrderList from "./components/ViewOrderListPage/ViewOrderList";
import EditMenu from "./components/EditMenuPage/EditMenu";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/menu-choice" element={<Menu />} />
      <Route path="/admin-choice" element={<AdminChoice />} />
      <Route path="/view-order-list" element={<ViewOrderList />} />
      <Route path="/edit-menu" element={<EditMenu />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
