import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.silce";
import { Link } from "react-router-dom";
import ImageChange from "../components/ImageChange";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home">
      <div className="category">
        <button onClick={toggleCategoriesVisibility}>
          {categoriesVisible ? (
            <h3>
              Category <i className="fa-sharp fa-solid fa-caret-up"></i>
            </h3>
          ) : (
            <h3>
              Category <i className="fa-sharp fa-solid fa-caret-down"></i>
            </h3>
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
        {products.map((productItem) => (
          <Link
            className="product_link"
            to={`/products/${productItem.id}`}
            onClick={scrollToTop}
            key={productItem.id}
          >
            <div className="home_products">
              <ImageChange
                initialImage={productItem?.productImgs[0]}
                alternativeImage={productItem?.productImgs[1]}
              />
              <h2>{productItem.title}</h2>
              <div className="home_price_cart">
                <h3>
                  Price <br /> <span>${productItem?.price}</span>
                </h3>
                <button>
                  <i class="fa-solid fa-cart-shopping"></i>
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
