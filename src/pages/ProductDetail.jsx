import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.silce";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const productsList = useSelector((state) => state.products);

  const product = productsList.find(
    (newProduct) => newProduct.id === Number(id)
  );

  const relatedProduct = productsList.filter(
    (productItem) =>
      productItem.category.id === product.category.id &&
      productItem.id !== product.id
  );

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="detail_container">
      <div className="detail_link_home">
        <Link className="product_link detail_link" to={"/"}>
          <p>Home</p>
        </Link>
        <i className="fa-solid fa-circle"></i>
        <span>
          <h3>{product?.title}</h3>
        </span>
      </div>
      <div className="product_detail">
        <div className="product_detail_img">
          <img src={product?.productImgs[0]} />
        </div>
        <div className="product_detail_container">
          <h2>{product?.title}</h2>
          <p>{product?.description}</p>
          <h3>Price</h3>
          <p>${product?.price}</p>
          <button className="add_cart_button">
            Add to cart <i className="fa-solid fa-cart-shopping"></i>
          </button>
        </div>
      </div>
      <div>
        <h2 className="related_h2">Discover similar items</h2>
        <div className="related_product">
          {relatedProduct.map((related) => (
            <div key={related.id}>
              <Link
                onClick={scrollToTop}
                className="product_link"
                to={`/products/${related.id}`}
              >
                <h2>{related?.title}</h2>
                <img
                  className="related_img"
                  src={related?.productImgs[0]}
                  alt=""
                />
                <h3>Price: ${related?.price}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
