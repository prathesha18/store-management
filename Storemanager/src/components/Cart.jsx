import React from "react";


export default function Cart({ cart, removeFromCart, checkout }) {
  const total = cart.reduce((sum, c) => sum + c.price * c.qty, 0);

  return (
    <div className="box">
      <h3 className="text-danger">Cart</h3>
      <ul className="list-group">
        {cart.map((c, i) => (
          <li className="list-group-item bg-dark text-white" key={i}>
            {c.name} x{c.qty} = ₹{c.price * c.qty}
            <button className="btn btn-sm btn-danger float-end" onClick={() => removeFromCart(i)}>Remove</button>
          </li>
        ))}
      </ul>
      <h5 className="mt-3">Total: ₹{total}</h5>
      <button className="btn btn-red" onClick={checkout}>Checkout</button>
    </div>
  );
}
