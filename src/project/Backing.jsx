
import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addBack, setCar } from "./redux/Actions";

export const Backing = () => {
    const navigate = useNavigate()
    const dis = useDispatch()
    const c = useSelector(Store => Store.car)
    const b = useSelector(Store => Store.back)
    const r = useSelector(Store => Store.rent)
    const type = useSelector(Store => Store.typeToDrive)

    const [pay, setPay] = useState(false)
    const [pay1, setPay1] = useState(false)

    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)
    const [errors, setErrors] = useState({})

    const ok = () => {
        setPay(true)
        setPay1(false)
    }
    const ot = () => {
        setPay1(true)
        setPay(false)
    }

    const finish = (event) => {
        event.preventDefault();

        if (flag && flag1 && flag2 && flag3) {
            const dd = new Date()

            const info = {
                code: event.target[0].value,
                city: event.target[1].value,
                street: event.target[2].value,
                umountPetrulLeft: event.target[3].value
            }


            const myRent = r.filter(x => x.id === parseInt(info.code))


            if (!myRent[0]) {
                swal("הקוד אינו נמצא", "בדוק שוב שהקוד שהזנת נכון", "error")
            }
            else {
                const myCar = c.filter(x => x.id === myRent[0].codeCar)                

                const myType = type.filter(x => x.id === parseInt(myCar[0].typeToDrive))

                const allPrice = parseInt((myCar[0].umountPetrul - info.umountPetrulLeft)) * myType[0].price

                let arr = myRent[0].time.split(":")
                let h = (parseInt(parseInt(`${dd.getHours()}`) - arr[0]) * 60) - arr[1];

                let y = myCar[0].priceForHaer

                let g = (y / 60) * (h)

                let i = 0;
                for (; i < b.length; i++);
                i = i + 1;
                const newBack = {
                    id: i,
                    codeRant: myRent.id,
                    dateBack: `${dd.getDate()}/${dd.getMonth() + 1}/${dd.getFullYear()}`,
                    timeBack: `${dd.getHours()}:${dd.getMinutes()}`,
                    left: info.umountPetrulLeft,
                    pay: "562",
                    payed: true
                }

                console.log(myCar);
                
                const newCar =
                {
                    id: myCar[0].id,
                    numLisens: myCar[0].numLisens,
                    degem: myCar[0].degem,
                    numSits: myCar[0].numSits,
                    year: myCar[0].year,
                    pic: myCar[0].pic,
                    typeToDrive: myCar[0].typeToDrive,
                    priceForHaer: myCar[0].priceForHaer,
                    needPerKm: myCar[0].needPerKm,
                    umountPetrul: info.umountPetrulLeft,
                    street: info.street,
                    city: info.city,
                    uvadebul: true
                }

                let o
                for (o = 0; o < c.length; o++) {
                    if (c[o].id === myCar[0].id)
                        break;
                }
                console.log(o);
                console.log(c[o]);

                dis(setCar(newCar, o))                

                dis(addBack(newBack))
                
                if (pay1){
                    swal(`${g + allPrice} :המחיר הוא`, '!!!!!!!שלום וכל טוב', 'success')
                    navigate('/Home/')

                }
                else
                    if (pay) {
                        swal(`${g + allPrice} :המחיר הוא`, '!!!!!!!שלום וכל טוב', 'success')
                        navigate('/Card/')
                    }
                    else {
                        swal(`!תשלום לא אושר`, `בחר צורת תשלום`, `error`)
                    }
            }
        }
        else {
            swal('Oophlvpss!', 'Missing info... 😞😥😔', 'error')
        }

    }
    const checkCity = (value) => {
        let nameRegex = /^[a-zA-Zא-ת]/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: 'שם לא תקין' })
            setFlag(false)
        }
        else {
            setErrors({ ...errors, username: '' })
            setFlag(true)
        }
    }
    const checCode = (value) => {
        let nameRegex = /^([0-9]{4,10}$)/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, tz: ' קוד לא תקינה' })
            setFlag1(false)
        }
        else {
            setErrors({ ...errors, tz: '' })
            setFlag1(true)
        }
    }
    const checkStreet = (value) => {
        let nameRegex = /^[a-zA-Zא-ת]/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, street: 'שם לא תקין' })
            setFlag2(false)
        }
        else {
            setErrors({ ...errors, street: '' })
            setFlag2(true)
        }
    }
    const checkpetrul = (value) => {
        let nameRegex = /^[0-9]/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, street: 'כמות לא תקינה' })
            setFlag3(false)
        }
        else {
            setErrors({ ...errors, street: '' })
            setFlag3(true)
        }
    }
    return (
        <div className="backing-container">
            <form className="backing-form" onSubmit={finish}>
                <h2 className="form-title">החזרת רכבים</h2>
                <input
                    className={`form-input ${errors.tz ? 'input-error' : ''}`}
                    id="code"
                    placeholder="קוד השאלה"
                    onChange={(e) => checCode(e.target.value)}
                />
                <p className="error-message">{errors.tz}</p>

                <input
                    className={`form-input ${errors.username ? 'input-error' : ''}`}
                    id="city"
                    placeholder="עיר"
                    onChange={(e) => checkCity(e.target.value)}
                />
                <p className="error-message">{errors.username}</p>


                <input
                    className={`form-input ${errors.street ? 'input-error' : ''}`}
                    id="street"
                    placeholder="רחוב"
                    onChange={(e) => checkStreet(e.target.value)}
                />
                <p className="error-message">{errors.tz}</p>

                <input
                    className={`form-input ${errors.petrul ? 'input-error' : ''}`}
                    id="street"
                    placeholder="יתרה דלק"
                    onChange={(e) => checkpetrul(e.target.value)}
                />
                <p className="error-message">{errors.username}</p>

                <div className="button-group">
                    <button className="submit-button" type="submit">שלח</button>
                    <button className="new-details-button" type="button" onClick={() => ot()}>פרטים ישנים</button>
                    <button className="new-details-button" type="button" onClick={() => ok()}>פרטים חדשים</button>

                </div>

            </form>
        </div>
    )
}