import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router-dom"
import camplogo from '../images/camplogo1.png'


export const NavBar = (props) => {

    const history = useHistory()

    const Logout = () => {
        localStorage.removeItem("camp__user")
        history.push("/home")
    }


    return (
        <nav className="whole_navBar">
           
            <ul className="navbar">
            <img className="logo_marsh" src={camplogo} />
                <li className="navbar__item active">
                    <Link className="navbar__link" to="/home" >
                        <i aria-hidden="true" class="tree icon"></i>Home</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/forum">
                        <i aria-hidden="true" class="comment alternate"></i>Forum</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/reservations/">Reservations</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/campgrounds">CampGrounds</Link>
                </li>
                <li className="navbar__item">
                    <a className="navbar__link" onClick={Logout}>Logout</a></li>


            </ul >
        </nav>
    )
}