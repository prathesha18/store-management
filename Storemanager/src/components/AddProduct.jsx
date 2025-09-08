import { useState } from "react";

export default function AddProduct({ addProduct }) {
  const [form, setForm] = useState({ name: "", image: "", price: "", stock: "", tags: "", category: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = () => {
    if (!form.name || !form.price || !form.stock) return alert("Please fill all required fields!");
    addProduct({ ...form, price: Number(form.price), stock: Number(form.stock) });
    setForm({ name: "", image: "", price: "", stock: "", tags: "", category: "" });
  };

  return (
    <div className="box">
      <h3 className="text-danger">Add / Manage Products</h3>
      <div className="row g-2">
        <div className="col-md-2"><input name="name" value={form.name} onChange={handleChange} className="form-control" placeholder="Name" /></div>
        <div className="col-md-2"><input name="image" value={form.image} onChange={handleChange} className="form-control" placeholder="Image URL" /></div>
        <div className="col-md-2"><input name="price" value={form.price} onChange={handleChange} className="form-control" placeholder="Price" type="number" /></div>
        <div className="col-md-2"><input name="stock" value={form.stock} onChange={handleChange} className="form-control" placeholder="Stock" type="number" /></div>
        <div className="col-md-2"><input name="tags" value={form.tags} onChange={handleChange} className="form-control" placeholder="Tags" /></div>
        <div className="col-md-2"><input name="category" value={form.category} onChange={handleChange} className="form-control" placeholder="Category" /></div>
        <div className="col-md-2"><button className="btn btn-red w-100" onClick={handleSubmit}>Add Product</button></div>
      </div>
    </div>
  );
}
