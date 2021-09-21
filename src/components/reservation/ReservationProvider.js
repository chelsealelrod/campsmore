import React, { useState, createContext } from "react"

export const ReservationContext = createContext()

// This component establishes what data can be used.
export const ReservationProvider = (props) => {
    const [reservations, setReservations] = useState([])

    const getReservations = () => {
        return fetch("http://localhost:8088/reservations?_expand=user")
        .then(res => res.json())
        .then(setReservations)
    }

    const addReservation = reservationObj => {
        return fetch("http://localhost:8088/reservations/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reservationObj)
        })
        .then(getReservations)
    }

 
    return (
        <ReservationContext.Provider value={{
            reservations, getReservations, addReservation
        }}>
            {props.children}
        </ReservationContext.Provider>
    )
}