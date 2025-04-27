import React from 'react';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useSelector } from 'react-redux';
import { removeCar } from "../redux/Actions";
import './styleBose.css'; // ייבוא קובץ ה-CSS

export const RemoveCar = () => {
    const c = useSelector(store => store.car);
    const dis = useDispatch();
    const nav = useNavigate();

    const send = (event) => {
        event.preventDefault();
        const codeCare = {
            codeCare: event.target[0].value,
        };
        let a = parseInt(codeCare.codeCare);
        for (let i = 0; i < c.length; i++) {
            if (c[i].id === a) {
                dis(removeCar(a - 1));
                swal('Hello Boss', 'Your car has been removed successfully', 'success');
                nav('/Boss/');
                return;
            }
        }

        swal('Please try again!', 'There is no such car', 'error');
    };

    return (
        <>
            <form onSubmit={(e) => send(e)}>
                <label htmlFor="codeCare">Input id car you want to delete:</label>
                <input id="codeCare" type="text" placeholder="Input id car you want to delete:" />
                <input type="submit" value="Remove Car" />
            </form>
            <button onClick={() => nav('/Boss')}>Back to Boss</button>
        </>
    );
};

export default RemoveCar;