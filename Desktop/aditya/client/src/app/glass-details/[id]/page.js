'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ App Router version
import { dummyGlasses } from '@/components/data/GlassData';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishListContext';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styles from '@/components/glasses/glass.module.css'; // Update path if needed

export default function GlassDetailsPage({ params }) {
  const router = useRouter();
  const { addToCart } = useCart();
  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();
  
const [reviewText, setReviewText] = useState('');
const [reviewList, setReviewList] = useState([]);

  const glassId = parseInt(params.id);
  const glass = dummyGlasses.find((g) => g.id === glassId);

  if (!glass) return <div className={styles.notFound}>Glass not found</div>;

  const isInWishlist = wishlistItems.some((item) => item.id === glass.id);

  const toggleWishlist = () => {
    isInWishlist ? removeFromWishlist(glass.id) : addToWishlist(glass);
  };

  const handleAddToCart = () => {
    addToCart({ ...glass, quantity: 1 });
  };

  const handleBuyNow = () => {
    localStorage.setItem('buyItem', JSON.stringify({ ...glass, quantity: 1 }));
    router.push('/buy');
  };

  const handleReviewSubmit = () => {
  if (reviewText.trim() !== '') {
    const newReview = {
      id: Date.now(),
      content: reviewText.trim(),
    };
    setReviewList((prev) => [newReview, ...prev]);
    setReviewText('');
  }
};

  return (
<div>
    <div className={styles.detailsContainer}>
      <div className={styles.imageBox}>
        <img src={glass.image} alt={glass.name} className={styles.image} />
        <div className={styles.wishlistIcon} onClick={toggleWishlist}>
          {isInWishlist ? (
            <FaHeart className={styles.heartFilled} />
          ) : (
            <FaRegHeart className={styles.heartOutline} />
          )}
        </div>
      </div>

      <div className={styles.infoBox}>
        <h2 className={styles.name}>{glass.name}</h2>
        <p className={styles.category}>Category: {glass.category}</p>
        <p className={styles.price}>Price: ₹{glass.price}</p>
        <p className={styles.description}>{glass.description}</p>

        <div className={styles.buttons}>
          <button className={styles.cartButton} onClick={handleAddToCart}>Add to Cart</button>
          <button className={styles.buyButton} onClick={handleBuyNow}>Buy Now</button>
        </div>
      </div>
      
    </div>
    {/* review section */}
    <div className={styles.reviewSection}>
  <h3 className={styles.reviewTitle}>Customer Reviews</h3>

  <textarea
    className={styles.reviewInput}
    placeholder="Write your review here..."
    value={reviewText}
    onChange={(e) => setReviewText(e.target.value)}
  />

  <button onClick={handleReviewSubmit} className={styles.reviewButton}>
    Submit Review
  </button>

  <div className={styles.reviewList}>
    {reviewList.length > 0 ? (
      reviewList.map((review) => (
        <div key={review.id} className={styles.reviewItem}>
          {review.content}
        </div>
      ))
    ) : (
      <p className={styles.noReview}>No reviews yet.</p>
    )}
  </div>
</div>
    
</div>

  );
}
