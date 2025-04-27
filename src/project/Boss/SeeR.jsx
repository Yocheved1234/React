import React from 'react';
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux';
import './styleBose.css'; // ייבוא קובץ ה-CSS

export const SeeR = () => {
    const nav = useNavigate();
    const r = useSelector(store => store.rent);
    const b = useSelector(store => store.back);

    const given = (item) => {
        const list = b.filter(x => x.codeRant === item.id);
        if (list[0]) {
            let t = list[0].dateBack;
            return t;
        }
    };

    const given1 = (item) => {
        const list = b.filter(x => x.codeRant === item.id);
        if (list[0])
            return "✔️";
        else
            return "❌";
    };

    return (
        <>
            {r && r.map((item, index) => (
                <div key={index} className="result-container">
                    <h3>id: {item.id}</h3>
                    <h3>code: {item.code}</h3>
                    <h3>codeCar: {item.codeCar}</h3>
                    <h3>date: {item.date}</h3>
                    <h3>time: {item.time}</h3>
                    <h3>back: {given1(item)}</h3>
                    <h3>{given(item)}</h3>
                </div>
            ))}
            <button onClick={() => nav('/Boss')}>Back to Boss</button>
        </>
    );
};

export default SeeR;