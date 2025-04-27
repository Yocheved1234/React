import React from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCar } from '../redux/Actions';
import './styleBose.css'; // אל תשכח לכלול את הקובץ הזה

export const AddCare = () => {
    const nav = useNavigate();
    const dis = useDispatch();
    const c = useSelector((store) => store.car);

    const send = (event) => {
        event.preventDefault();
        const car = {
            numLisens: event.target[0].value,
            degem: event.target[1].value,
            numSits: event.target[2].value,
            pic: event.target[3].value,
            year: event.target[4].value,
            typeToDrive: event.target[5].value,
            priceForHaer: event.target[6].value,
            needPerKm: event.target[7].value,
            umountPetrul: event.target[8].value,
            street: event.target[9].value,
            city: event.target[10].value,
        };

        let id = 0;
        for (let i = 0; i < c.length; i++) {
            if (c[i].id > id) id = c[i].id;
        }

        const newCar = {
            id: id + 1,
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
            uvadebul: true,
        };

        dis(addCar(newCar));
        console.log(newCar);
        swal('Hello Boss', 'Your car has been added successfully', 'success');
        nav('/Boss/');
    };

    return (
        <>
            <h4>:הכנס פרטי רכב</h4>
            <form onSubmit={(e) => send(e)}>
                <label htmlFor="numLisens">numLisens:</label>
                <input id="numLisens" placeholder="input numLisens:" type="text" />

                <label htmlFor="degem">degem:</label>
                <input id="degem" placeholder="input degem:" type="text" />

                <label htmlFor="numSits">numSits:</label>
                <input id="numSits" placeholder="input numSits:" type="text" />

                <label htmlFor="pic">pic:</label>
                <input id="pic" placeholder="input pic:" type="text" />

                <label htmlFor="year">year:</label>
                <input id="year" placeholder="input year:" type="text" />

                <label htmlFor="typeToDrive">typeToDrive:</label>
                <input id="typeToDrive" placeholder="input typeToDrive:" type="text" />

                <label htmlFor="priceForHaer">priceForHaer:</label>
                <input id="priceForHaer" placeholder="input priceForHaer:" type="text" />

                <label htmlFor="needPerKm">needPerKm:</label>
                <input id="needPerKm" placeholder="input needPerKm:" type="text" />

                <label htmlFor="umountPetrul">umountPetrul:</label>
                <input id="umountPetrul" placeholder="input umountPetrul:" type="text" />

                <label htmlFor="street">street:</label>
                <input id="street" placeholder="input street:" type="text" />

                <label htmlFor="city">city:</label>
                <input id="city" placeholder="input city:" type="text" />

                <input type="submit" value="Submit" />
            </form>
            <button onClick={() => nav('/Boss')}>Back to Boss</button>
        </>
    );
};

export default AddCare;