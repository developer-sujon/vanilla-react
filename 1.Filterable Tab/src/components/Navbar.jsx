import React from "react";

function Navbar({ activeCategory, allCategory, filterCategory }) {
  return (
    <nav className="navbar">
      <div className="btn-group">
        {allCategory.map((category) => {
          return (
            <button
              key={category}
              className={`btn-group__item ${
                category === activeCategory ? "active" : ""
              }`}
              onClick={() => filterCategory(category)}
            >
              {category}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
