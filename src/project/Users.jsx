import React from 'react';
import './style.css';

export const Users = () => {
    return (
        <div className="terms-container">
            <h1 className="terms-title">תנאי שימוש</h1>
            <p className="terms-intro">
                ברוכים הבאים לחברת הרכבים שלנו! השימוש באתר ובשירותים שלנו 
                כפוף לתנאים ולמדיניות הבאים. חשוב לקרוא את תנאי השימוש בקפידה, 
                שכן השימוש שלך באתר ובשירותים שלנו מהווה הסכמה לתנאים אלו.
            </p>
            <section className="terms-section">
                <h2 className="section-title">1. קבלת התנאים</h2>
                <p className="section-content">
                    ברגע שאתה נכנס לאתר או עושה שימוש בשירותים שלנו, אתה מאשר 
                    את הסכמתך לתנאים המפורטים כאן. אם אינך מסכים עם התנאים, 
                    אנא אל תעשה שימוש בשירותים שלנו.
                </p>
                <p className="section-content">
                    תנאים אלו עשויים להתעדכן מעת לעת. אנו נפרסם את התנאים 
                    המעודכנים באתרנו, והם יכנסו לתוקף מיד לאחר פרסומם.
                </p>
            </section>
            <section className="terms-section">
                <h2 className="section-title">2. הגבלות על השימוש</h2>
                <p className="section-content">
                    השימוש באתר ובשירותים שלנו חייב להיות בהתאם לחוק. אתה 
                    מתחייב לא לעשות שימוש באתר ובשירותים שלנו בצורה שמפרה 
                    את זכויותיהם של אחרים או מפרה את החוק. כל פעולה שנעשית 
                    בניגוד לתנאים אלו עשויה להוביל לסילוקך מהשירותים שלנו.
                </p>
                <p className="section-content">
                    השימוש באתר לצורך הפצה בלתי מורשית, חבלה, או נזקים אפשריים 
                    למערכת או לנתונים שלנו אסור בהחלט.
                </p>
            </section>
            <section className="terms-section">
                <h2 className="section-title">3. זכויות יוצרים וקניין רוחני</h2>
                <p className="section-content">
                    כל התוכן והחומרים באתר שלנו, כולל אך לא מוגבל לתמונות, 
                    טקסטים, וסמלים, מוגנים בזכויות יוצרים ובזכויות קניין רוחני 
                    אחרות. אסור להעתיק, לשכפל או להפיץ את התכנים מבלי לקבל 
                    אישור מראש.
                </p>
            </section>
            <section className="terms-section">
                <h2 className="section-title">4. אחריות</h2>
                <p className="section-content">
                    אנו משתדלים לספק מידע מדויק ועדכני באתר, אך איננו 
                    מתחייבים לכך שהמידע יהיה ללא טעויות או חסר. השימוש 
                    באתר ובשירותים שלנו הוא באחריותך הבלעדית.
                </p>
                <p className="section-content">
                    אנו לא נישא באחריות לנזקים ישירים, עקיפים, או תוצאתיים 
                    הנגרמים כתוצאה מהשימוש באתר.
                </p>
            </section>
            <section className="terms-section">
                <h2 className="section-title">5. שינוי תנאים</h2>
                <p className="section-content">
                    אנו שומרים את הזכות לשנות את תנאי השימוש בכל עת. כל שינוי 
                    יתפרסם באתרנו וייכנס לתוקף מיד לאחר פרסומו.
                </p>
            </section>
            <div className="terms-footer">
                <p>© 2024 חברת הרכבים שלנו. כל הזכויות שמורות.</p>
            </div>
        </div>
    );
};