import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import swal from "sweetalert";
import { setCar } from "../redux/Actions";
import './styleBose.css'; // שים לב לייבא את קובץ ה-CSS

export const UpdateCar = () => {
    const c = useSelector(Store => Store.car);
    const dis = useDispatch();
    const nav = useNavigate();

    const send = (event) => {
        event.preventDefault();
        const car = {
            id: event.target[0].value,
            numLisens: event.target[1].value,
            degem: event.target[2].value,
            numSits: event.target[3].value,
            pic: event.target[4].value,
            year: event.target[5].value,
            typeToDrive: event.target[6].value,
            priceForHaer: event.target[7].value,
            needPerKm: event.target[8].value,
            umountPetrul: event.target[9].value,
            street: event.target[10].value,
            city: event.target[11].value
        };

        const newCar = {
            id: parseInt(car.id),
            numLisens: car.numLisens,
            degem: car.degem,
            numSits: car.numSits,
            pic: car.pic,
            year: car.year,
            typeToDrive: car.typeToDrive,
            priceForHaer: car.priceForHaer,
            needPerKm: car.needPerKm,
            umountPetrul: car.umountPetrul,
            street: car.street,
            city: car.city,
            uvadebul: true
        };

        let a = parseInt(car.id);
        for (let i = 0; i < c.length; i++) {
            if (c[i].id === a) {
                dis(setCar(newCar, a - 1));
                swal('Hello Boss', 'Your car has been removed successfully', 'success');
                nav('/Boss/');
                return;
            }
        }

        swal('Please try again!', 'There is no such car', 'error');
    };

    return (
        <>
            <h4>:הכנס פרטי רכב</h4>
            <form onSubmit={(e) => send(e)}>
                <label htmlFor="idCar">id Car:</label>
                <input id="idCar" placeholder="Input ID car for change:" />

                <label htmlFor="numLisens">numLisens:</label>
                <input id="numLisens" placeholder="Input numLisens:" />

                <label htmlFor="degem">degem:</label>
                <input id="degem" placeholder="Input degem:" />

                <label htmlFor="numSits">numSits:</label>
                <input id="numSits" placeholder="Input numSits:" />

                <label htmlFor="pic">pic:</label>
                <input id="pic" placeholder="Input pic:" />

                <label htmlFor="year">year:</label>
                <input id="year" placeholder="Input year:" />

                <label htmlFor="typeToDrive">typeToDrive:</label>
                <input id="typeToDrive" placeholder="Input typeToDrive:" />

                <label htmlFor="priceForHaer">priceForHaer:</label>
                <input id="priceForHaer" placeholder="Input priceForHaer:" />

                <label htmlFor="needPerKm">needPerKm:</label>
                <input id="needPerKm" placeholder="Input needPerKm:" />

                <label htmlFor="umountPetrul">umountPetrul:</label>
                <input id="umountPetrul" placeholder="Input umountPetrul:" />

                <label htmlFor="street">street:</label>
                <input id="street" placeholder="Input street:" />

                <label htmlFor="city">city:</label>
                <input id="city" placeholder="Input city:" />

                <input type="submit" value="Submit" />
            </form>
            <button onClick={() => nav('/Boss')}>Back to Boss</button>
        </>
    );
};