import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const parseItemCost = (cost) => {
    return parseInt(cost.replace('$', ''), 10);
  };

  const calculateTotalAmount = () => {
    return cart.reduce((total, item) => {
      return total + parseItemCost(item.cost) * item.quantity;
    }, 0);
  };

  const handleIncrement = (item) => {
    dispatch(
      updateQuantity({
        ...item,
        quantity: item.quantity + 1,
      })
    );
  };

  const handleDecrement = (item) => {
    if (item.quantity === 1) {
      dispatch(removeItem(item));
    } else {
      dispatch(
        updateQuantity({
          ...item,
          quantity: item.quantity - 1,
        })
      );
    }
  };

  const calculateItemTotal = (item) => {
    return parseItemCost(item.cost) * item.quantity;
  };

  return (
    <div className="cart-page">

      <div className="cart-wrapper">

        <div className="cart-header">

          <div>
            <span className="section-label">
              YOUR SELECTION
            </span>

            <h1>
              Your Plant <em>Collection</em>
            </h1>
          </div>

          <button
            className="continue-button"
            onClick={onContinueShopping}
          >
            ← Continue Shopping
          </button>

        </div>


        {cart.length === 0 ? (

          <div className="empty-cart">
            <div className="empty-icon">🌿</div>

            <h2>Your collection is empty</h2>

            <p>
              Discover plants that bring a little more
              nature into your everyday space.
            </p>

            <button
              onClick={onContinueShopping}
              className="shop-now-button"
            >
              Explore Plants
            </button>
          </div>

        ) : (

          <div className="cart-layout">

            <div className="cart-items">

              {cart.map((item) => (

                <div
                  className="cart-item"
                  key={item.name}
                >

                  <img
                    className="cart-item-image"
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="cart-item-details">

                    <div className="cart-item-top">

                      <div>
                        <h3 className="cart-item-name">
                          {item.name}
                        </h3>

                        <p className="cart-item-cost">
                          {item.cost} each
                        </p>
                      </div>

                      <button
                        className="cart-item-delete"
                        onClick={() =>
                          dispatch(removeItem(item))
                        }
                      >
                        Remove
                      </button>

                    </div>


                    <div className="cart-item-bottom">

                      <div className="cart-item-quantity">

                        <button
                          className="cart-item-button"
                          onClick={() =>
                            handleDecrement(item)
                          }
                        >
                          −
                        </button>

                        <span className="cart-item-quantity-value">
                          {item.quantity}
                        </span>

                        <button
                          className="cart-item-button"
                          onClick={() =>
                            handleIncrement(item)
                          }
                        >
                          +
                        </button>

                      </div>

                      <div className="cart-item-total">
                        ${calculateItemTotal(item)}
                      </div>

                    </div>

                  </div>

                </div>

              ))}

            </div>


            <aside className="order-summary">

              <span className="summary-label">
                ORDER SUMMARY
              </span>

              <h2>Ready to grow?</h2>

              <div className="summary-row">
                <span>Items</span>
                <span>{cart.length}</span>
              </div>

              <div className="summary-row total-row">
                <strong>Total</strong>

                <strong>
                  ${calculateTotalAmount()}
                </strong>
              </div>

              <button
                className="checkout-button"
                onClick={() =>
                  alert(
                    'Checkout functionality can be added in the future.'
                  )
                }
              >
                Proceed to Checkout →
              </button>

              <p className="summary-note">
                Your plants are waiting for a new home.
              </p>

            </aside>

          </div>

        )}

      </div>

    </div>
  );
};

export default CartItem;