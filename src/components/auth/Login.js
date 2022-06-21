import React, { useRef } from "react"
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import campsmore from '../images/campsmore.png'
import "./Login.css"


export const Login = props => {
    const email = useRef()
    const existDialog = useRef()
    const history = useHistory()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(res => res.json())
            .then(user => user.length ? user[0] : false)
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists) {
                    localStorage.setItem("camp__user", exists.id)
                    history.push("/home")
                } else {
                    existDialog.current.showModal()
                }
            })
    }
    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={existDialog}>
                <div>User does not exist</div>
                <button className="button--close" onClick={e => existDialog.current.close()}>Close</button>
            </dialog>
            <div>
                <img className="logo" src={campsmore} alt="" />
            </div>
            <div className="login">


                            <form className="form--login" onSubmit={handleLogin}>

                                <label htmlFor="inputEmail"> Email address </label>
                                <input ref={email} type="email"
                                    id="email"
                                    className="form-control"
                                    placeholder="Email address"
                                    required autoFocus />

                                <fieldset className="button--area">
                                    <button className="sign__in" type="submit">
                                        Sign in
                                    </button>
                                </fieldset>

                            </form>
                                <h3>Or</h3>

                            <section className="link--register">
                                <h2>Not a Member yet?</h2>
                                <Link to="/register">Sign Up</Link>
                            </section>
            
            </div>

        </main>

    )

}

