'use client';

import React, { useEffect, useState } from 'react';
import styles from '@/pages/routes/cart/cart.module.css'; // Your custom CSS

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const handleQuantity = (id, delta) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + delta) }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleRemove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const gst = subtotal * 0.18; // 18% GST
  const total = subtotal + gst;

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartHeader}>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className={styles.cartTable}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td><img src={item.image} alt={item.name} width="60" /></td>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <button onClick={() => handleQuantity(item.id, -1)}>-</button>
                    <span style={{ margin: '0 8px' }}>{item.quantity}</span>
                    <button onClick={() => handleQuantity(item.id, 1)}>+</button>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button onClick={() => handleRemove(item.id)} className={styles.removeBtn}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.summaryBox}>
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>
            <h3>Total: ₹{total.toFixed(2)}</h3>
            <button className={styles.checkoutBtn}>Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}
