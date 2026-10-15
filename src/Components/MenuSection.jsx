import React, { useState } from 'react'
import FoodCard from './FoodCard'
import { menuData } from '../data/mockData'
import styles from '../Styles/MenuSection.module.css'

const categories = ['Desayuno', 'Almuerzo', 'Cena', 'Postres & Jugos', 'Cafes'];

const MenuSection = () => {
    const [activeCategory, setActiveCategory] = useState('Desayuno');

    const activeItems = menuData[activeCategory] || [];

    return (
        <section className={styles.menuSection}>
            {/* <h2 className={styles.title}>MENU SAVOUR</h2> */}

            <div className={styles.tabsContainer}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.tab} ${activeCategory === category ? styles.activeTab : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className={styles.grid}>
                {activeItems.map((item) => (
                    <FoodCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
};

export default MenuSection;