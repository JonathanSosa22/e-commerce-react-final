import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const productsList = useSelector((state) => state.products);

  const product = productsList.find(
    (newProduct) => newProduct.id === Number(id)
  );

  return (
    <div className="detail_container">
      <div className="detail_link_home">
        <Link className="product_link detail_link" to={"/"}>
          <p>Home</p>
        </Link>
        <i class="fa-solid fa-circle"></i>
        <span>
          <h3>{product.title}</h3>
        </span>
      </div>
      <div className="product_detail">
        <div className="product_detail_img">
          <img src={product.productImgs[0]} />
        </div>
        <div className="product_detail_container">
          <div>
            <h2>{product.title}</h2>
          </div>
          <div>
            <p>{product.description}</p>
          </div>
          <div>
            <h3>Price</h3>
            <p>${product.price}</p>
          </div>
          <div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
