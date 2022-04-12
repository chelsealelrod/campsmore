import React, { useContext, useEffect, useState } from "react"
import { ReservationContext } from "./ReservationProvider"
import "./Reservation.css"
import { useHistory } from "react-router-dom"


export const ReservationList = () => {
  
  const { getReservations, reservations } = useContext(ReservationContext)
  const  history = useHistory()


  useEffect(() => {
    getReservations()
  }, [reservations])


  return (
  
    <section className="reservations">
        <button className="reservation__button" onClick={() => history.push("/reservations/create")}>
                Add Reservation
            </button>
      {
        reservations.map(reservation => {
          return (
            <div className="reservation" id={`reservation--${reservation.id}`}>
              { parseInt(localStorage.getItem("camp__user"))}
              <h3 className="form__list__header">Submitted Successfully! </h3>
              <div class="thank_you">Thank you,
              <p>{ reservation.firstName }<br></br>
              { reservation.lastName }<br></br>
              { reservation.email }</p>
              {/* <p>{ reservation.gender }</p> */}
              <p className="camp__Name">for your reservation at:<br></br>
              { reservation.campName }</p>
              {/* { reservation.campType } */}
              <p>Camp Site: { reservation.siteNumber }</p>
              { reservation.paymentType }
              { reservation.startDate }
              { reservation.endDate }
            </div>
            </div>
          )
        })
      }
    </section>
  )
}