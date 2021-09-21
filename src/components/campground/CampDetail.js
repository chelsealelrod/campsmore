import React, { useContext, useEffect, useState } from "react";
import { CampGroundContext } from "./CampProvider";
import "./CampGround.css";
import { useParams, useHistory } from "react-router-dom";
import { parksKey } from "../../apikeys";

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
    {/* <section className="park">
        <h2 className="park__name">Name:{ props.park.data.name }</h2> 
        <div className="park__description">Description:{ props.park.data.description }</div>
        <div className="park__reservationInfo">Reservation Info: { props.data.reservationInfo }</div>
        <div className="park__regulations">Regulations: { props.data.regulationsOverview }</div>
        <div className="park__amenities">Amenities: {props.data.amenities }</div>
        <div className="park__operatingHours">Operating Hours: { props.data.operatingHours }</div>
        <div className="park__addresse">Address: {props.data.parks[0].addresses[0].line1}</div>
        <div className="numberOfSitesReservable">Number of Sites Reservable: { props.data.numberOfSitesReservable }</div>
        <div className="accessability">Accessibility: {props.data.accessibility }</div>
        <div className="accessRoads">Access Roads: { props.data.accessRoads }</div>
        <div className="classifications">Classifications: {props.data.classifications }</div>

    </section> */}
        
    </>
    )
}