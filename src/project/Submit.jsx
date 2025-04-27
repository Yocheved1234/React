import { useState } from "react";
import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { addUser, setCurrentUser } from "./redux/Actions";
import './style.css'

export const Submit = () => {

    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [flag3, setFlag3] = useState(false)


    const check1 = () => {
        setFlag(true)
    }

    const check2 = () => {
        setFlag(false)
    }

    const check3 = () => {
        setFlag1(true)
    }

    const check4 = () => {
        setFlag1(false)
    }

    const check5 = () => {
        setFlag2(true)
    }

    const check6 = () => {
        setFlag2(false)
    }

    const check7 = () => {
        setFlag3(true)
    }

    const check8 = () => {
        setFlag3(false)
    }

    const [errors, setErrors] = useState({})

    const checkName = (value) => {
        let nameRegex = /^[a-zA-Zא-ת]{2,25}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, username: 'שם לא תקין' })
            check2()
        }
        else {
            setErrors({ ...errors, username: '' })
            check1()
        }
    }

    const checktz = (value) => {
        let nameRegex = /^(?:[0-9]{8}[0-9]|[0-9]{9})$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, tz: 'תעודת זהות לא תקינה' })
            check4()
        }
        else {
            setErrors({ ...errors, tz: '' })
            check3()
        }
    }

    const checkphone = (value) => {
        let nameRegex = /^0\d([\d]{0,1})([-]{0,1})\d{7}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, userphone: 'מספר טלפון לא תקין' })
            check6()
        }
        else {
            setErrors({ ...errors, userphone: '' })
            check5()
        }
    }

    const checkPass = (value) => {
        let nameRegex = /^[0-9]{4,10}/
        if (!value.match(nameRegex)) {
            setErrors({ ...errors, password: 'קוד לא תקין' })
            check8()
        }
        else {
            setErrors({ ...errors, password: '' })
            check7()
        }
    }

    const checknumCard = (value) => {
        let nameRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, numCard: 'מספר אשראי לא תקין' })
        }
        else {
            setErrors({ ...errors, numCard: '' })
        }
    }

    const checkEx = (value) => {
        let nameRegex = /^(0[1-9]|1[0-2])\/\d{4}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, ex: 'תאריך לא תקין' })
        }
        else {
            setErrors({ ...errors, ex: '' })
        }
    }

    const checkCvv = (value) => {
        let nameRegex = /^\d{3}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, cvv: 'שלוש ספרות לא תקינות' })
        }
        else {
            setErrors({ ...errors, cvv: '' })
        }
    }

    const navigate = useNavigate()

    const dis = useDispatch()
    const u = useSelector(x => x.users)
    const c = useSelector(x => x.sendurrentUser)

    const send = (event) => {

        event.preventDefault();

        let i;
        for (i = 0; i < u.length; i++);
        i = i + 1
        console.log(i);

        const user = {
            id: i,

            username: event.target[0].value,
            tz: event.target[1].value,
            phone: event.target[2].value,
            password: event.target[3].value,
            numCard: event.target[4].value,
            ex: event.target[5].value,
            cvv: event.target[6].value,
            typeUser: '2'
        }

        if (flag && flag1 && flag2 && flag3) {
            swal(`Hello ${user.username}`, 'login successfully! 😊😄😁😍', 'success')
            dis(setCurrentUser(user))
            dis(addUser(user))

            navigate('/Car/')
        }
        else {
            swal('Oopss!', 'Missing info... 😞😥😔', 'error')
        }
    }
    return (
        <div className="submit-form">
            <h4 className="submit-form__title">Login</h4>
            <form onSubmit={send} className="submit-form__fields">
                <label htmlFor="username" className="submit-form__label">User name:*</label>
                <input
                    id="username"
                    className="submit-form__input"
                    placeholder="Input username"
                    onChange={(e) => checkName(e.target.value)}
                />
                <p className="submit-form__error">{errors.username}</p>

                <label htmlFor="tz" className="submit-form__label">User tz:*</label>
                <input
                    id="tz"
                    className="submit-form__input"
                    placeholder="Input tz"
                    onChange={(e) => checktz(e.target.value)}
                />
                <p className="submit-form__error">{errors.tz}</p>

                <label htmlFor="userphone" className="submit-form__label">User phone:*</label>
                <input
                    id="userphone"
                    className="submit-form__input"
                    placeholder="Input user phone"
                    onChange={(e) => checkphone(e.target.value)}
                />
                <p className="submit-form__error">{errors.userphone}</p>

                <label htmlFor="password" className="submit-form__label">Password:*</label>
                <input
                    id="password"
                    type="password"
                    className="submit-form__input"
                    placeholder="Input password"
                    onChange={(e) => checkPass(e.target.value)}
                />
                <p className="submit-form__error">{errors.password}</p>

                <label htmlFor="numCard" className="submit-form__label">Num card:</label>
                <input
                    id="numCard"
                    className="submit-form__input"
                    placeholder="1111-2222-3333-4444"
                    onChange={(e) => checknumCard(e.target.value)}
                />
                <p className="submit-form__error">{errors.numCard}</p>

                <label htmlFor="ex" className="submit-form__label">Ex:</label>
                <input
                    id="ex"
                    className="submit-form__input"
                    placeholder="00/00"
                    onChange={(e) => checkEx(e.target.value)}
                />
                <p className="submit-form__error">{errors.ex}</p>

                <label htmlFor="cvv" className="submit-form__label">CVV:</label>
                <input
                    id="cvv"
                    className="submit-form__input"
                    placeholder="000"
                    onChange={(e) => checkCvv(e.target.value)}
                />
                <p className="submit-form__error">{errors.cvv}</p>

                <input type="submit" className="submit-form__submit-button" />
            </form>
        </div>
    );
}