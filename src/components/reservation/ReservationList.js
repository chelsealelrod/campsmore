import React, { useContext, useEffect, useState } from "react"
import { ReservationContext } from "./ReservationProvider"
import "./Reservation.css"
import { useHistory } from "react-router-dom"


export const ReservationList = () => {
  
  const { getReservations, reservations } = useContext(ReservationContext)
  const  history = useHistory()


  useEffect(() => {
    console.log("ReservationList: useEffect - getReservations")
    getReservations()
  }, [reservations])


  return (
  
    <section className="reservations">
        <button onClick={() => history.push("/reservations/create")}>
                Add Reservation
            </button>
      {
        reservations.map(reservation => {
          return (
            <div className="reservation" id={`reservation--${reservation.id}`}>
              { parseInt(localStorage.getItem("camp__user"))}
              <h3 className="form__list__header">Submitted Successfully! </h3>
              <div class="thank_you">Thank you,<br></br>
              <p>{ reservation.firstName }</p>
              </div>
              <p>{ reservation.lastName }</p>
              <p>{ reservation.email }</p>
              {/* <p>{ reservation.gender }</p> */}
              <p>for your reservation at:</p>
              <p className="camp__Name">{ reservation.campName }</p>
              {/* { reservation.campType } */}
              <p>Camp Site: { reservation.siteNumber }</p>
              { reservation.paymentType }
              { reservation.startDate }
              { reservation.endDate }
            </div>
          )
        })
      }
    </section>
  )
}