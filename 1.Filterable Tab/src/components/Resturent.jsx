import React, { useState } from "react";
import MenuData from "../data/MenuApi.json";
import MenuLists from "./MenuList";
import Navbar from "./Navbar";
import "./Resturent.css";

const allCategory = ["All", ...new Set(MenuData.map((menu) => menu.category))];

function Resturent() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [menuData, setMenuData] = useState(MenuData);
  const filterCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      return setMenuData(MenuData);
    }
    const newCategory = MenuData.filter((item) => item.category === category);
    setMenuData(newCategory);
  };
  return (
    <div style={{ padding: "0 59px" }}>
      <Navbar
        activeCategory={activeCategory}
        allCategory={allCategory}
        filterCategory={filterCategory}
      />
      <MenuLists menuData={menuData} />
    </div>
  );
}

export default Resturent;
