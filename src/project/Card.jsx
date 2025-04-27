
import { useDispatch, useSelector } from 'react-redux';
import { useState } from "react";
import swal from "sweetalert";
import './style.css'
import { useNavigate } from 'react-router';

export const Card = () => {

   const nav=useNavigate()
    
    const [flag, setFlag] = useState(false)
    const [flag1, setFlag1] = useState(false)
    const [flag2, setFlag2] = useState(false)
    const [errors, setErrors] = useState({})

    const checknumCard = (value) => {
        let nameRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, numCard: 'מספר אשראי לא תקין' })
        }
        else {
            setErrors({ ...errors, numCard: '' })
            setFlag(true)
        }
    }

    const checkEx = (value) => {
        let nameRegex = /[0-9]{4}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, ex: 'תאריך לא תקין' })
        }
        else {
            setErrors({ ...errors, ex: '' })
            setFlag1(true)
        }
    }

    const checkCvv = (value) => {
        let nameRegex = /^\d{3}$/

        if (!value.match(nameRegex)) {
            setErrors({ ...errors, cvv: 'שלוש ספרות לא תקינות' })
        }
        else {
            setErrors({ ...errors, cvv: '' })
            setFlag2(true)
        }
    }
    const send = (event) => {

        event.preventDefault();

        if (flag && flag1 && flag2){
            swal(`הפרטים נקלטו בהצלחה`, 'תודה שבחרת לנוע איתנו!! 😊😄😁😍', 'success')
            nav("/Home/")
        }
        else
            swal(`  לא כל הפרטים הוכנסו כרואי`, 'בדוק שוב   !! ', 'error')
    }

    return <>

        <h4>Login</h4>
        <form onSubmit={(e) => send(e)}>
            <label htmlFor="numCard">num card:</label><br></br>
            <input id="numCard" placeholder="1111-2222-3333-4444" onChange={(e) => checknumCard(e.target.value)}></input><br></br>
            <p style={{ color: 'red' }}>{errors.numCard}</p>

            <label htmlFor="ex">Ex:</label><br></br>
            <input id="ex" placeholder="00/00" onChange={(e) => checkEx(e.target.value)}></input><br></br>
            <p style={{ color: 'red' }}>{errors.ex}</p>

            <label >cvv:</label><br></br>
            <input id="cvv" placeholder="000" onChange={(e) => checkCvv(e.target.value)}></input><br></br>
            <p style={{ color: 'red' }}>{errors.cvv}</p>

            <input type={'submit'}></input>

        </form>

    </>
}