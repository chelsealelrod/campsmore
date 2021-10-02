import { CampGroundContext } from "./CampProvider"
import { CampDetail } from "./CampDetail"
import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom";
import { CampSearch } from "./CampSearch";

export const CampGroundList = () => {
    const history = useHistory()
    const [ filteredParks, setFiltered] = useState([])
    const { parks, getTnParks, searchParks } = useContext(CampGroundContext)
    
    // const { searchParks } = (event) => {
    //     setSearchTerms(event.target.value)
    //     getTnParks()
    // }
   

    useEffect(() => {
        getTnParks()
    }, [])
    
useEffect(() => {
    if (searchParks !== "") {
        const subset = parks.filter(park => park.name.toLowerCase().includes(searchParks.toLowerCase()))
        setFiltered(subset)
      } else {
        // If the search field is blank, display all parks
        setFiltered(parks)
      }
    }, [searchParks])


    return (
        <>
        <section className ="parks__list">
            <CampSearch/><br></br>
            {
                filteredParks.map(park => {
                    return <CampDetail key={park.id} park={park} />
                })
            }
        </section>
     
        </>
    ) 

        }