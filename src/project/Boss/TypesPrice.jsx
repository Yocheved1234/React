import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import './styleBose.css'; // ייבוא קובץ ה-CSS

export const TypesPrice = () => {
    const nav = useNavigate();
    const type = useSelector(Store => Store.typeToDrive);

    return (
        <>
            {type && type.map((item, index) => (
                <div key={index} className="type-container">
                    <h3>id: {item.id}</h3>
                    <h3>type: {item.type}</h3>
                    <h3>price: {item.price}</h3>
                </div>
            ))}

            <button onClick={() => (nav('/Boss'))}>Back to Boss</button>
        </>
    );
};