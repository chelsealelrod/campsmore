import React, { useContext, useEffect, useState } from "react";
import { CampGroundContext } from "./CampProvider";
import "./CampGround.css";
import { useParams, useHistory } from "react-router-dom";

export const CampDetail = (props) => {
    const { parks } = useContext(CampGroundContext)
    const [ thisPark, setPark ] = useState({})

   
    const { parkId } = useParams()

    const history = useHistory()

   

    useEffect(() => {
        if(props.park) {
            setPark(props.park)
        } else {

        const thisPark = parks.find(a => parks.id === 
            parseInt(parkId)) || { }
        }
        setPark(thisPark)
    }, [parkId])

    return (
       <> 
    <section className="park">
        <h2 className="park__name">Name:{ props.park.name }</h2> 
        <div className="park__description">Description:{ props.park.description }</div>
        <div className="park__reservationInfo">Reservation Info: { props.park.reservationInfo }</div>
        <div className="park__regulations">Regulations: { props.park.regulationsOverview }</div>
        <div className="park__amenities">Amenities: {props.park.amenities.audioDescription }</div>
        {/* <div className="park__operatingHours">Operating Hours: { props.park.operatingHours[0] }</div> */}
        {/* <div className="park__addresses">Address: {props.park.addresses[0].line1}</div>  */}
        {/* <div className="numberOfSitesReservable">Number of Sites Reservable: { props.park.numberOfSitesReservable }</div> */}
        {/* <div className="accessability">Accessibility: {props.park.accessibility }</div> */}
        {/* <div className="accessRoads">Access Roads: { props.park.accessRoads }</div> */}
        {/* <div className="classifications">Classifications: {props.park.classifications }</div>  */}

    </section>
        
    </>
    )
}