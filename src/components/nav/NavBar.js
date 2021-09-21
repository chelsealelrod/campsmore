import React from "react"
import { Link } from "react-router-dom"
import { List } from 'semantic-ui-react'
import "./NavBar.css"


export const NavBar = (props) => {
    return (
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
           
        </ul >
    )
}