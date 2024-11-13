import React from "react";
import Skincare from "@/src/components/skincare";
import "./detail.css";
function detailpage() {
  return (
    <div>
      <div className="hi mt-2">
        <a href="/">Home </a> / <a href="product">Make up</a> /{" "}
        <a href="">Product Name</a>
        <h1 className="mt-4">Register</h1>
      </div>
      <div className="product-card">
        <div className="product-image-container">
          <div className="thumbnail-images">
            <img
              src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/01/anh-mau-trang-1-1.jpg"
              alt="Thumbnail 1"
            />
            <img
              src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/01/anh-mau-trang-1-1.jpg"
              alt="Thumbnail 2"
            />
            <img
              src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/01/anh-mau-trang-1-1.jpg"
              alt="Thumbnail 3"
            />
            <img
              src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/01/anh-mau-trang-1-1.jpg"
              alt="Thumbnail 4"
            />
          </div>
          <div className="main-image">
            <img
              src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/01/anh-mau-trang-1-1.jpg"
              alt="Main Image"
            />
          </div>
        </div>
        <div className="product-details">
          <div className="brand">BRAND</div>
          <h2 className="product-name">Product Name Goes Here</h2>
          <div className="favorites">
            <i className="fas fa-heart"></i>
            <span>Add to Favourites</span>
          </div>
          <p className="description">
            Nisi, id de famis, consequat adipisicing. Recusandae platea neque,
            cum, occasamus.
          </p>
          <a href="#" className="read-more">
            Read More
          </a>
          <div className="price-and-discount">
            <div className="price">
              <del>AED 32.00</del>
              <p>AED 25.60</p>
            </div>
            <div className="discount">30% Off</div>
          </div>
          <div className="actions">
            <button className="add-to-cart">ADD TO CART</button>
            <button className="buy-now">BUY NOW</button>
          </div>
          <div className="favorites-list">
            <h3>View My Favourite List</h3>
            <ul>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum Sr</li>
              <li>Lorem Ipsum</li>
              <li>Lorem Ipsum</li>
            </ul>
          </div>
          
        </div>
      </div>
      <Skincare/>
    </div>
  );
}

export default detailpage;
