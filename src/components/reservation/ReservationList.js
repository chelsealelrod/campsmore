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
              <div>Thank you,<br></br>
              { reservation.firstName }
              </div>
              { reservation.lastName }
              <br></br>
              { reservation.email }
              <br></br>
              <h4>for your reservation at</h4>
              { reservation.gender }
              { reservation.campName }
              <h4>Campsite</h4>
              { reservation.campType }
              { reservation.siteNumber }
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