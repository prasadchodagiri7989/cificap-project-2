"use client";
import { useContextElement } from "@/context/Context";
import { bestseller } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Products() {
  const { setQuickViewItem } = useContextElement();
  const {
    setQuickAddItem,
    addToWishlist,
    isAddedtoWishlist,
    addToCompareItem,
    isAddedtoCompareItem,
  } = useContextElement();
  return (
    <section className="flat-spacing-17">
      <div className="container">
        <div
          className="flat-title text-center wow fadeInUp"
          data-wow-delay="0s"
        >
          <span className="title" style={{fontSize:"40px",color:"#A31D1D",fontWeight:"700"}}>Best Sellers</span>
          <span className="text-gray-700 block" style={{fontSize:"20px"}}>"Even heat, effortless cooking—your perfect sauce companion!"</span>

        </div>
        <div
          className="grid-layout  wow fadeInUp"
          data-display={6}
          data-wow-delay="0s"
          data-grid="grid-4"
        >
          {bestseller.map((product) => (
            
            <div
              key={product.id}
              className="card-product text-center none-hover fl-item"
              style={{borderRadius:"5px", border:"1px solid var(--line)", padding:"20px"}}
            >
              <div className="card-product-wrapper aspect-1 rounded-0">
                <Link
                  href={`/product-detail/${product.id}`}
                  className="product-img"
                >
                  <Image
                    className="lazyload img-product"
                    data-src={product.imgSrc}
                    alt={product.alt}
                    src={product.imgSrc}
                    width={533}
                    height={533}
                    style={{borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}
                  />
                </Link>
                <div className="list-product-btn absolute-2">
                  <a
                    href="#quick_add"
                    data-bs-toggle="modal"
                    onClick={() => setQuickAddItem(product.id)}
                    className="box-icon bg_white quick-add tf-btn-loading"
                  >
                    <span className="icon icon-bag" />
                    <span className="tooltip">Quick Add</span>
                  </a>
                  <a
                    onClick={() => addToWishlist(product.id)}
                    className="box-icon bg_white wishlist btn-icon-action"
                  >
                    <span
                      className={`icon icon-heart ${
                        isAddedtoWishlist(product.id) ? "added" : ""
                      }`}
                    />
                    <span className="tooltip">
                      {isAddedtoWishlist(product.id)
                        ? "Already Wishlisted"
                        : "Add to Wishlist"}
                    </span>{" "}
                    <span className="icon icon-delete" />
                  </a>
                </div>
              </div>
              <div className="card-product-info" style={{borderTop:"1px solid var(--line)"}}>
                <Link
                  href={`/product-detail/${product.id}`}
                  className="title link text-lg"
                >
                  {product.title}
                </Link>
                {product.oldPrice ? (
                  <span className="price">
                    <span className="old-price text-base">
                      Rs.{product.oldPrice.toFixed(2)}
                    </span>
                    <span className="new-price price-primary text-base">
                      Rs.{product.price.toFixed(2)}
                    </span>
                  </span>
                ) : (
                  <span className="price text-base">
                    Rs.{product.price.toFixed(2)}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
