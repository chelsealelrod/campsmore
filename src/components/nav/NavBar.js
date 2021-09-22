import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import { useHistory } from "react-router-dom"
import camplogo from '../images/camplogo.png'


export const NavBar = (props) => {

// const history = useHistory()

//     const Logout = () => {
//         sessionStorage.removeItem("user")
//         history.push("/login")

        // const logout = () => {
        //     sessionStorage.clear();
        //     window.location.href = `/`;


            return (
                <nav className="whole_navBar">
                    {/* <img className="logo_marsh" src={camplogo} /> */}
                <ul className="navbar">
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
                    {/* <li className="aNavLink">
                        <Link className="" onClick={Logout}>Logout</Link>
                    </li> */}
                    <li className="navbar__item">
                <Link className="navbar__link" to="/login">Logout</Link></li>
            

                </ul >
                </nav>
            )
    }