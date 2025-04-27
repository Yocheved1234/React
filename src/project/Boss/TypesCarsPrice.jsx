import React from 'react';
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../redux/Actions";
import { useNavigate } from "react-router-dom";
import './styleBose.css'; // ייבוא קובץ ה-CSS

export const TypesCarsPrice = () => {
    const t = useSelector(x => x.typeToDrive);
    const dis = useDispatch();
    const nav = useNavigate();

    const send = (event) => {
        event.preventDefault();
        const p = {
            id: event.target[0].value,
            price: event.target[1].value,
        };
        let a = parseInt(p.id);
        let c = 1;
        for (let i = 0; i < t.length; i++) {
            if (t[i].id === a) {
                c = 2;
            }
        }
        if (c === 2) {
            const newtype = t.filter(x => x.id === a);
            a = parseInt(p.id);
            const g = {
                id: a,
                type: newtype[0].type,
                price: p.price
            };
            dis(setType(g, a - 1));
            swal('Hello Boss', 'Your car type price has been updated successfully', 'success');
            nav('/Boss/');
            return;
        }
        swal('Please try again!', 'There is no such type', 'error');
    };

    return (
        <>
            <form onSubmit={(e) => send(e)}>
                <label htmlFor="typeToDrive">id typeToDrive:</label>
                <input id="typeToDrive" placeholder="Input id type to drive:" />

                <label htmlFor="newPrice">new price:</label>
                <input id="newPrice" placeholder="Input new price:" />

                <input type="submit" value="Update Price" />
            </form>
            <button onClick={() => nav('/Boss')}>Back to Boss</button>
        </>
    );
};