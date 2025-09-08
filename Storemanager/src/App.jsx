import { useState } from "react";
import Catalog from "./components/Catalog";
import Inventory from "./components/Inventory";
import Cart from "./components/Cart";
import AddProduct from "./components/AddProduct";
import SalesHistory from "./components/SalesHistory";

export default function App() {
  const [products, setProducts] = useState([
    {
      name: "Keyboard",
      price: 500,
      stock: 10,
      image: "https://cdn.pixabay.com/photo/2012/12/17/19/14/keyboard-70506_960_720.jpg",
      tags: "Electronics",
      category: "Electronics",
    },
    {
      name: "Mouse",
      price: 300,
      stock: 12,
      image: "https://cdn.pixabay.com/photo/2013/05/24/02/09/computer-mouse-113100_960_720.jpg",
      tags: "Electronics",
      category: "Electronics",
    },
    {
      name: "Speaker",
      price: 1500,
      stock: 8,
      image: "https://cdn.pixabay.com/photo/2020/08/09/17/07/bose-5476087_960_720.jpg",
      tags: "Electronics",
      category: "Electronics",
    },
    {
      name: "Tomato (1kg)",
      price: 40,
      stock: 30,
      image: "https://cdn.pixabay.com/photo/2019/07/11/10/14/cherry-tomato-4330441_960_720.jpg",
      tags: "Vegetable",
      category: "Vegetables",
    },
    {
      name: "Biscuits (1 pack)",
      price: 30,
      stock: 50,
      image: "https://imgs.search.brave.com/AMih-2IjGuZ38nffmId4nWkzg4O-qJjfskrvhuXfwvY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA4LzY4LzY2LzA5/LzM2MF9GXzg2ODY2/MDkwNV9WcTYzb3g5/RHlkSXFNb2FKQzZo/dTVTOHRZSXU2dDha/dC5qcGc",
      tags: "Snacks",
      category: "Snacks",
    },
  ]);

  const [cart, setCart] = useState([]);
  const [sales, setSales] = useState([
    {
      total: 1500,
      items: "Keyboard x1, Mouse x2",
      time: "2025-09-01 10:30 AM",
    },
    {
      total: 320,
      items: "Face Wash x2, Lip Balm x1",
      time: "2025-09-01 12:10 PM",
    },
  ]);

  const addToCart = (index) => {
    const product = products[index];
    if (product.stock <= 0) return alert("Out of stock!");

    const updatedCart = [...cart];
    const existingItem = updatedCart.find((c) => c.index === index);

    if (existingItem) {
      existingItem.qty++;
    } else {
      updatedCart.push({
        name: product.name,
        price: product.price,
        qty: 1,
        index,
      });
    }
    setCart(updatedCart);
  };

  const removeFromCart = (i) => {
    const updatedCart = [...cart];
    updatedCart.splice(i, 1);
    setCart(updatedCart);
  };

  const checkout = () => {
    if (cart.length === 0) return alert("Cart is empty!");

    let total = 0;
    let items = [];
    const updatedProducts = [...products];

    cart.forEach((c) => {
      updatedProducts[c.index].stock -= c.qty;
      total += c.price * c.qty;
      items.push(`${c.name} x${c.qty}`);
    });

    setProducts(updatedProducts);
    setSales([
      ...sales,
      { total, items: items.join(", "), time: new Date().toLocaleString() },
    ]);
    setCart([]);
  };

  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-danger mb-4">
        Inventory Management System
      </h1>

      <Catalog products={products} />
      <Inventory products={products} addToCart={addToCart} />
      <Cart cart={cart} removeFromCart={removeFromCart} checkout={checkout} />
      <AddProduct addProduct={addProduct} />
      <SalesHistory sales={sales} />
    </div>
  );
}
