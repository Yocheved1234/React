import { Link, NavLink } from 'react-router-dom'
import './style.css'
import { useSelector } from 'react-redux'

export const Nav = () => {

    const name = useSelector(store => store.currentUser);

    const get = () => {
        if (name.username === 'Chaim') {
            return <NavLink to="/Boss" className="link" activeClassName="active">Boss</NavLink>
        }
    }

    return <>
        <div className="nav">

            <NavLink to="" className="link" activeClassName="active">Home</NavLink>
            <NavLink to="/Login" className="link" activeClassName="active">Login</NavLink>
            <NavLink to="/Car" className="link" activeClassName="active">Car</NavLink>
            <NavLink to="/Backing" className="link" activeClassName="active">Return</NavLink>
            <NavLink to="/Contact" className="link" activeClassName="active">Costum</NavLink>
            <NavLink to="/Users" className="link" activeClassName="active">Users</NavLink>
            <h3>{get()}</h3>
            <h3>{name.username}</h3>

        </div>
    </>
}