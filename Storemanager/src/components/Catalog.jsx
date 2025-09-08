import React from "react";

export default function Catalog({ products }) {
  const categories = [...new Set(products.map((p) => p.category))];

  return (
    <div className="box">
      <h3 className="text-danger">Product Catalog</h3>
      <div className="row">
        {categories.map((category) => (
          <div key={category}>
            <h4 className="text-warning mt-3">{category}</h4>
            <hr />
            {products
              .filter((p) => p.category === category)
              .map((p, i) => (
                <div className="col-md-3 mb-3 d-inline-block" key={i}>
                  <div className="card bg-dark text-white h-100">
                    <img src={p.image} className="card-img-top" alt={p.name} />
                    <div className="card-body">
                      <h5 className="card-title">{p.name}</h5>
                      <p>₹{p.price} | Stock: {p.stock}</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}
