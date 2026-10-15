import React from 'react'
import styles from '../Styles/FoodCard.module.css'

const FoodCard = ({ item }) => {
    const { name, time, desc, price, img, isFav } = item;

    return (
        <article className={styles.card}>
        <div className={styles.imageContainer}>
            <img src={img} alt={name} className={styles.image} />
            {/* <button className={`${styles.favBtn} ${isFav ? styles.favActive : ''}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill={isFav ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
            </button> */}
        </div>

        <div className={styles.content}>
            <div className={styles.header}>
            <h3>{name}</h3>
            <span className={styles.time}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                {time}
            </span>
            </div>
            
            <p className={styles.description}>{desc}</p>
            
            <div className={styles.footer}>
            <span className={styles.price}>$ {price.toFixed(2)}</span>
            {/* <button className={styles.addBtn}>
                add to cart <span>+</span>
            </button> */}
            </div>
        </div>
        </article>
    );
};

export default FoodCard;