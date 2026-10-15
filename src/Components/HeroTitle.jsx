import React from "react";
import "../Styles/HeroTitle.css";

const HeroTitle = ({
    title = "Título",
    breadcrumb = [],
    bgImage = "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80",
    variant = "red",
}) => {
    return (
        <section
            className="hero-title"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div className="hero-title-overlay">
                <h1 className="hero-title-text">{title}</h1>

                {breadcrumb.length > 0 && (
                    <div
                        className={`hero-title-breadcrumb hero-title-breadcrumb-${variant}`}
                    >
                        {breadcrumb.map((item, index) => (
                            <React.Fragment key={index}>
                                <span
                                    className={
                                        index === breadcrumb.length - 1 ? "hero-title-current" : ""
                                    }
                                >
                                    {item}
                                </span>
                                {index < breadcrumb.length - 1 && (
                                    <span className="hero-title-arrow">›</span>
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default HeroTitle;
