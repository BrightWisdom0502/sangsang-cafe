import MenuCategory from "./MenuCategory";
import Menus from "./Menus";
import OrderList from "./OrderList";
import SearchBar from "./SearchBar";

const MenuChoice = () => {
  return (
    <>
      <MenuCategory />
      <SearchBar />
      <Menus />
      <OrderList />
    </>
  );
}

export default MenuChoice;