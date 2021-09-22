import { CampGroundContext } from "./CampProvider"
import { CampDetail } from "./CampDetail"
import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom";

export const CampGroundList = () => {
    const { parks, getTnParks, searchParks } = useContext(CampGroundContext)
    const [filteredParks, setFiltered] = useState([])
    // const { searchParks } = (event) => {
    //     setSearchTerms(event.target.value)
    //     getTnParks()
    // }
    const history = useHistory()

    useEffect(() => {
        getTnParks()
    }, [])
    


    return (
        <>
        <section className ="parks__list">
            {
                parks.map(park => {
                    return <CampDetail key={park.id} park={park} />
                })
            }
        </section>
     
        </>
    ) }


