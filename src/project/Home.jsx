import React from 'react';
import './style.css';
import { useNavigate } from 'react-router';


export const Home = () => {

  const nav=useNavigate()
  const send=()=>{
    nav('/Car/')
  }
    return (
        <div className="homepage-container">
            <header className="hero-section">
                <div className="hero-text">
                    <h1>השכר רכבים בקלות ובמהירות</h1>
                    <p>בחר מתוך מגוון רכבים איכותיים והזמן את הרכב שלך עכשיו!</p>
                    <button className="cta-button" onClick={() => send()}>בחר רכב עכשיו</button>
                </div>
            </header>
            <section className="features">
                <div className="feature">
                    <h2>מגוון רכבים</h2>
                    <p>בחר מתוך מגוון רחב של רכבים שמתאימים לכל צורך ולכל תקציב.</p>
                </div>
                <div className="feature">
                    <h2>מחירים אטרקטיביים</h2>
                    <p>נהנה ממחירים תחרותיים ושירות איכותי ללא פשרות.</p>
                </div>
                <div className="feature">
                    <h2>שירות מהיר</h2>
                    <p>השכרת רכב בקלות עם תהליך פשוט ומהיר.</p>
                </div>
            </section>
            <section className="car-gallery">
                <h2>גלריית רכבים</h2>
                <div className="gallery">
                <img src={`${process.env.PUBLIC_URL}/pic/CC.jpg`} alt="Car 1"/>
                <img src={`${process.env.PUBLIC_URL}/pic/CC3.jpg`} alt="Car 2"/>
                <img src={`${process.env.PUBLIC_URL}/pic/CC2.jpg`} alt="Car 3"/>

                </div>
            </section>
            <footer className="footer">
                <p>&copy; 2024 השכר רכבים. כל הזכויות שמורות.</p>
            </footer>
        </div>
    );
};