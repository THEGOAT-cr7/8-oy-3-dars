import React from "react";

const Cart = ({ dessert }) => {
  let isAdded = false;
  return (
    <div className="card">
      <picture>
        <source
          media={`(min-width: 996px)`}
          srcSet={`${dessert.image.desktop}`}
          sizes="250px"
        />
        <source
          media={`(min-width: 768px)`}
          srcSet={`${dessert.image.tablet}`}
          sizes="213px"
        />
        <source
          media={`(min-width: 375px)`}
          srcSet={`${dessert.image.mobile}`}
          sizes="327px"
        />
        <img
          className="card__image"
          src={`${dessert.image.thumbnail}`}
          alt=""
        />
      </picture>
      <div className="card__btn">
        {isAdded && (
          <button className="card__add__to">
            <img
              src="../images/icon-add-to-cart.svg"
              alt=""
              width={20}
              height={20}
            />
            <span>Add to Cart</span>
          </button>
        )}
        {!isAdded && (
          <div className="card__btns__amount">
            <button className="card__btn__amount">
              <img
                src="../images/icon-decrement-quantity.svg"
                width={10}
                height={2}
                alt=""
              />
            </button>
            <span>5</span>
            <button className="card__btn__amount">
              <img
                src="../images/icon-increment-quantity.svg"
                width={10}
                height={2}
                alt=""
              />
            </button>
          </div>
        )}
      </div>
      <div className="card__body">
        <p className="card__category">{dessert.category}</p>
        <p className="card__name">{dessert.name}</p>
        <p className="card__price">{dessert.price}</p>
      </div>
    </div>
  );
};

export default Cart;
