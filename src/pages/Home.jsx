import React, { useEffect, useState } from "react";

const Home = () => {
  const [categoriesVisible, setCategoriesVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 700) {
        setCategoriesVisible(false);
      } else {
        setCategoriesVisible(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleCategoriesVisibility = () => {
    setCategoriesVisible(!categoriesVisible);
  };

  const categoryStyle = {
    display: categoriesVisible ? "block" : "none",
  };

  return (
    <div className="home">
      <div className="category">
        <button onClick={toggleCategoriesVisibility}>
          {categoriesVisible ? (
            <div>
              <h3>
                Category <i className="fa-sharp fa-solid fa-caret-up"></i>
              </h3>
            </div>
          ) : (
            <div>
              <h3>
                Category <i className="fa-sharp fa-solid fa-caret-down"></i>
              </h3>
            </div>
          )}
        </button>
        {categoriesVisible && (
          <div className="categories_list" style={categoryStyle}>
            <h3>Smart TV</h3>
            <h3>Smartphones</h3>
            <h3>Computers</h3>
            <h3>Stoves</h3>
          </div>
        )}
      </div>
      <div className="products">
        <h2>Productos</h2>
        <p>Producto 1</p>
        <p>Producto 2</p>
        <p>Producto 3</p>
        <p>Producto 4</p>
        <p>Producto 5</p>
      </div>
    </div>
  );
};

export default Home;
