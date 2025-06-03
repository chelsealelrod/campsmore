import React, { useContext, useEffect, useState } from "react"
import { ReservationContext } from "./ReservationProvider"
import "./Reservation.css"
import { useHistory, useParams } from "react-router-dom";



export const ReservationForm = () => {

  const { addReservation, newReservation, getReservations, getUsersById } = useContext(ReservationContext)
  const [isLoading, setIsLoading] = useState(false);
  const [userId, setUser] = useState({});



  const [reservation, setReservation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    campName: "",
    campType: "",
    siteNumber: 0,
    paymentType: "",
    startDate: null,
    endDate: null,
    userId: parseInt(localStorage.getItem("camp__user"))
  });

  const { reservationId } = useParams();
  const history = useHistory();

  useEffect(() => {
    getReservations()
  }, [reservation])



  const handleSaveForm = (event) => {
    event.preventDefault()

    setIsLoading(false)
    if (!reservation === 0 || !reservation === 0) {
      window.alert("")
    } else {
      const newReservation = {
        firstName: reservation.firstName,
        lastName: reservation.lastName,
        email: reservation.email,
        gender: reservation.gender,
        campName: reservation.campName,
        campType: reservation.campType,
        siteNumber: reservation.siteNumber,
        paymentType: reservation.paymentType,
        startDate: null,
        endDate: null,
        userId: 1
      }

      addReservation(newReservation)
        .then(() => {
          history.push("/reservations")
          setIsLoading(false)
        })
    }
  }

  const handleControlledFirstName = (event) => {
    const newReservation = { ...reservation }
    newReservation.firstName = event.target.value
    setReservation(newReservation);
  };

  const handleControlledLastName = (event) => {
    const newReservation = { ...reservation }
    newReservation.lastName = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledEmail = (event) => {
    const newReservation = { ...reservation }
    newReservation.email = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledGender = (event) => {
    const newReservation = { ...reservation }
    newReservation.gender = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledCampName = (event) => {
    const newReservation = { ...reservation }
    newReservation.campName = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledSiteNumber = (event) => {
    const newReservation = { ...reservation }
    newReservation.siteNumber = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledCampType = (event) => {
    const newReservation = { ...reservation }
    newReservation.campType = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledPaymentType = (event) => {
    const newReservation = { ...reservation }
    newReservation.paymentType = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledStartDate = (event) => {
    const newReservation = { ...reservation }
    newReservation.startDate = event.target.value;
    setReservation(newReservation);
  };

  const handleControlledEndDate = (event) => {
    const newReservation = { ...reservation }
    newReservation.endDate = event.target.value;
    setReservation(newReservation);
  };



  return (

    <form className="reservForm">
      <h2 className="ReservForm__title">New Reservation</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">First Name:</label>
          <input type="text" id="firstName" required autoFocus className="form-control"
            placeholder="First name" value={reservation.firstName}
            onChange={handleControlledFirstName} />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Last Name:</label>
          <input type="text" id="lastName" required autoFocus className="form-control"
            placeholder="Last name" value={reservation.lastName}
            onChange={handleControlledLastName} />
        </div>
      </fieldset>
      <fieldset>
      <div className="form-group">
      <label htmlFor="email">Email: </label>
      <input type ="text" id="email" className="form-control" value={reservation.email}
      onChange={handleControlledEmail} />
      </div>
    </fieldset>
      <fieldset>
      <div className="form-group">
      <label htmlFor="gender">Gender: </label>
      <select name="gender" required autoFocus className="form-control"
      value={ reservation.gender }
      onChange={handleControlledGender}>
      <option value="female">Female</option>
      <option value="male">Male</option>
      <option value="non-binary">Non-Binary</option>
      </select>
      </div>
      </fieldset>
      <fieldset>
      <div className="form-group">
      <label htmlFor="name">Camp Name: </label>
      <input type ="text" id="campName" required autoFocus className="form-control"
      value= {reservation.campName}
      placeholder="Camp name"
      onChange={handleControlledCampName} />
      </div>
      </fieldset>
      <fieldset>
      <div className="form-group">
      <label htmlFor="siteNumber">Camp Site Number</label>
      <input type ="text" id="siteNumber" required autoFocus className="form-control"
      value= {reservation.siteNumber}
      placeholder="Camp Site Number"
      onChange={handleControlledSiteNumber} />
      </div>
      </fieldset>
      <fieldset>
      <div>
      <label htmlFor="campType">Camp Type</label><br></br>
      <input type ="checkbox" id="type" name="campType" value={reservation.campType}
      onChange={handleControlledCampType} />
      <label htmlFor="tent">Tent</label>
      <input type ="checkbox" id="type" name="campType" value="campType" />
      <label htmlFor="RvCamper">RV/Camper</label>

      </div>
      </fieldset>
      <fieldset>
      <div className="form-group">
      <label htmlFor="paymentType">Payment Type</label>
      <input type ="text" id="payment" name="payment" required autoFocus className="form-control"
      value={reservation.paymentType}
      placeholder="Payment Type"
      onChange={handleControlledPaymentType} />
      </div>

      </fieldset>
      <fieldset>
      <div className="date">
      <label for="start">Start date: </label>

      <input type ="date" id="start" className="trip-start"
      onChange={handleControlledStartDate}
      value= {reservation.startDate}
      min="2021-10-01" max="2026-12-31" />

      <label for="start">End date: </label>

      <input type ="date" id="end" className="trip-end"
      onChange={handleControlledEndDate}
      value={reservation.endDate}
      min="2021-10-01" max="2026-12-31" />

      </div>
      </fieldset>
      <button className="btn btn-primary"
      disabled={isLoading}
      onClick={event => handleSaveForm(event)}>
    {reservationId?<>Save Reservation</>: <>Submit Reservation</>}



      </button>
    </form>

  )
}

