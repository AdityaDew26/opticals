import React from 'react'
import Categories from '@/components/home/wear_card/categories/Catagories'
import styles from '@/components/home/wear_card/wear.module.css'

const WearCard = () => {
  return (
    <div className={styles.container} >
      <h2 className={styles.title}>Explore Our Wear Collections</h2>
        <Categories/>
    </div>
  )
}

export default WearCard