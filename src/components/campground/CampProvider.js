import React, { useState, useEffect, createContext } from "react"
import { parksKey } from "../../apikeys"


export const CampGroundContext = createContext()

// export const NpsUrl = `https://developer.nps.gov/api/v1/campgrounds?api_key=${parksKey}`;
export const CampProvider = (props) => {
    const [parks, setParks] = useState([])
    const [searchTerms, setSearchTerms] = useState("")

    const getTnParks = () => {
        return fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=TN&api_key=${parksKey}`)
            .then(res => res.json())
            .then(parks => {
                setParks(parks.data)
            })
    }


    const getParkById = (parkId) => {
        return fetch(`https://developer.nps.gov/api/v1/campgrounds?stateCode=TN&api_key=${parksKey}`)
        .then(res => res.json())
}




return (
    <CampGroundContext.Provider value={{
        getTnParks, getParkById, searchTerms, setSearchTerms, parks
    }}>
        {props.children}
    </CampGroundContext.Provider>
)
}