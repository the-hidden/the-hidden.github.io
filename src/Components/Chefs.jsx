import { useEffect, useRef, useState } from 'react'
import '../Styles/Chefs.css'
import { chefs } from '../data/aboutData';

const Chefs = () => {
    const extendedChefs = [...chefs, ...chefs, ...chefs];
    const trackRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(chefs.length);
    const [slideWidth, setSlideWidth] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);
    
    useEffect(() => {
        const track = trackRef.current;
        const firstCard = track?.firstElementChild;
        if (!track || !firstCard) return undefined;

        const updateSlideWidth = () => {
            const gap = parseFloat(window.getComputedStyle(track).columnGap) || 0;
            setSlideWidth(firstCard.getBoundingClientRect().width + gap);
        };

        updateSlideWidth();
        const observer = new ResizeObserver(updateSlideWidth);
        observer.observe(track.parentElement);

        return () => observer.disconnect();
    }, []);

    const nextSlide = () => {
        if (!isTransitioning) return;
        setCurrentIndex(prev => prev + 1);
    };

    const prevSlide = () => {
        if (!isTransitioning) return;
        setCurrentIndex(prev => prev - 1);
    };

    const handleTransitionEnd = () => {
        if (currentIndex >= chefs.length * 2) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex - chefs.length);
        }
        else if (currentIndex < chefs.length) {
            setIsTransitioning(false);
            setCurrentIndex(currentIndex + chefs.length);
        }
    };

    useEffect(() => {
        if (!isTransitioning) {
            const frame = requestAnimationFrame(() => {
                requestAnimationFrame(() => setIsTransitioning(true));
            });
            return () => cancelAnimationFrame(frame);
        }
        return undefined;
    }, [isTransitioning]);

    return (
        <div>
            <section className="about-chefs">
                <div className="about-container">
                    <h2 className="about-serif-title">Master Chef</h2>

                    <div className="about-chefs-wrapper">
                        <button
                            className="about-slider-arrow about-slider-left"
                            onClick={prevSlide}
                            aria-label="Anterior"
                        >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="15 18 9 12 15 6" />
                            </svg>
                        </button>

                        <div className="about-carousel-window">
                            <div
                                ref={trackRef}
                                className={`about-carousel-track ${!isTransitioning ? 'about-carousel-no-transition' : ''}`}
                                style={{ transform: `translateX(-${currentIndex * slideWidth}px)` }}
                                onTransitionEnd={(event) => {
                                    if (event.propertyName === 'transform') handleTransitionEnd();
                                }}>
                                {extendedChefs.map((chef, index) => (
                                    <div key={`${chef.id}-${index}`} className="about-chef-card">
                                        <img src={chef.image} alt={chef.name} className="about-chef-img" />
                                        <div className="about-chef-info">
                                            <div>
                                                <h4 className="about-chef-name">{chef.name}</h4>
                                                <p className="about-chef-role">{chef.role}</p>
                                            </div>
                                            <button className="about-chef-btn" aria-label="Ver perfil">
                                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="7" y1="17" x2="17" y2="7" />
                                                    <polyline points="7 7 17 7 17 17" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            className="about-slider-arrow about-slider-right"
                            onClick={nextSlide}
                            aria-label="Siguiente">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Chefs