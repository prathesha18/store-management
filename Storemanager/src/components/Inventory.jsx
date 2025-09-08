import React from "react";

export default function Inventory({ products, addToCart }) {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="box">
      <h3 className="text-danger">Inventory</h3>
      <table className="table table-dark table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Price</th>
            <th>Tags</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <React.Fragment key={category}>
              <tr className="table-secondary text-dark">
                <td colSpan="5"><b>{category}</b></td>
              </tr>
              {products
                .filter((p) => p.category === category)
                .map((p, index) => (
                  <tr key={index} className={p.stock < 5 ? "low-stock" : ""}>
                    <td>{p.name}</td>
                    <td>{p.stock}</td>
                    <td>₹{p.price}</td>
                    <td>{p.tags}</td>
                    <td>
                      <button className="btn btn-red btn-sm" onClick={() => addToCart(index)}>
                        Add to Cart
                      </button>
                    </td>
                  </tr>
                ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
}
