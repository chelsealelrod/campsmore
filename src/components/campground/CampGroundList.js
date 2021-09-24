import { CampGroundContext } from "./CampProvider"
import { CampDetail } from "./CampDetail"
import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom";
import { CampSearch } from "./CampSearch";

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
    

    if (searchParks !== "") {
        const subset = parks.filter(park => park.name.toLowerCase().includes(searchParks.toLowerCase()))
        setFiltered(subset)
      } else {
        // If the search field is blank, display all animals
        setFiltered(parks)
      }
    }, [searchParks])


    return (
        <>
        <section className ="parks__list">
            <CampSearch/><br></br>
            {
                parks.map(park => {
                    return <CampDetail key={park.id} park={park} />
                })
            }
        
        </section>
     
        </>
    ) 

        }
