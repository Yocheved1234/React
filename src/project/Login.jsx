import swal from "sweetalert";
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentUser } from "./redux/Actions";
import { useNavigate } from "react-router-dom";
import './style.css'
import { useState } from "react";

export const Login = () => {

    const [isSubmitting, setIsSubmitting] = useState(false); 

    const navigate = useNavigate()
    const users = useSelector(store => store.users)
    const dis = useDispatch()

    const send = (event) => {
        event.preventDefault();
        const user = {
            username: event.target[0].value,
            password: event.target[1].value
        }

        let u = users.filter(x => x.username === user.username && x.password === user.password)[0]
        if (u) {
            if (u.typeUser === '1') {
                navigate('/Boss/')
                dis(setCurrentUser(u))
                console.log(setCurrentUser(u[0]));
            }
            else {
                swal(`Hello ${user.username}`, 'login successfully! 😊😄😁😍', 'success')
                dis(setCurrentUser(u))
                navigate('/Car/')
            }
        }
        else {
            swal('משתמש לא מזוהה במערכת', 'לחץ אישור לכניסה למערכת', 'errore')
            navigate('/Submit/')
        }

    }

    // return <>
    //     <h4>Login</h4>
    //     <form onSubmit={(e) => send(e)}>
    //         <label htmlFor="username">user name:</label><br></br>
    //         <input id="username" placeholder="input username"></input><br></br>

    //         <label htmlFor="password">password:</label><br></br>
    //         <input id="password" type="password" placeholder="input password"></input><br></br>

    //         <input type={'submit'}></input>
    //     </form>
    // 
    return <>
        <div className="login-container">
        <form className="login-form" onSubmit={(e) => send(e)}>
            <h4 className="login-header">Login</h4>
            <label htmlFor="username">User Name:</label>
            <input id="username" placeholder="Input username" type="text" required />
            
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" placeholder="Input password" required />
            
            <input 
                type="submit" 
                value={isSubmitting ? 'Submitting...' : 'Login'} 
                disabled={isSubmitting} 
            />
        </form>
    </div>
    </>


}