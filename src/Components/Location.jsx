import React from 'react';
import '../Styles/Location.css';
import HeroTitle from '../Components/HeroTitle';
import { heroData } from '../data/heroData';
import { locations} from '../data/LocationData';


const Location = () => {
    return (
            <div className="location-page">
                {/* <section className="location-hero">
                    <div className="location-hero-overlay">
                        <h2>CONTACTO</h2>
                        <p className="location-breadcrumb">UBICACIONES</p>
                    </div>
                </section> */}
                <section className="location-grid-section">
                    <div className="location-grid-container">
                    {locations.map((loc, index) => {
                        const isReversed = index % 2 !== 0;
                        const infoCell = (
                            <div key={`info-${loc.id}`} className="location-info-card">
                                <span className="location-card-subtitle">{loc.country}</span>
                                <h3 className="location-card-title">{loc.name}</h3>
                                <p className="location-card-desc">{loc.description}</p>
                                <div className="location-card-contact">
                                    <p>{loc.address}</p>
                                    <p>{loc.phone}</p>
                                    <p>{loc.email}</p>
                                </div>
                            </div>
                        );
                        const imageCell = (
                            <div key={`img-${loc.id}`} className="location-image-wrapper">
                                <img src={loc.image} alt={loc.name} />
                            </div>
                        );
                        const mapCell = (
                            <div key={`map-${loc.id}`} className="location-map-wrapper">
                                <iframe
                                src={loc.mapUrl}
                                title={`Mapa de ${loc.name}`}
                                allowFullScreen=""
                                loading="lazy"
                                ></iframe>
                            </div>
                        );
                        return (
                            <React.Fragment key={loc.id}>
                                {isReversed ? (
                                <>
                                    {mapCell}
                                    {imageCell}
                                    {infoCell}
                                </>
                                ) : (
                                <>
                                    {infoCell}
                                    {imageCell}
                                    {mapCell}
                                </>
                                )}
                            </React.Fragment>
                        );
                    })}
                    </div>
                </section>
            </div>
    );
};

export default Location;