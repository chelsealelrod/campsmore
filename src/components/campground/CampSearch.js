import { parksKey } from "../../apikeys";
import { CampGroundContext } from "./CampProvider"
import React, { useContext, useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom";



export const CampSearch = () => {
    const { getTnParks, setSearchTerms } = useContext(CampGroundContext)
    const history = useHistory()
    const [parks, setParks] = useState([])
  
    const searchResults = (event) => {
      event.preventDefault()
      if (event.target[0].value !== "") {
      getTnParks(event.target[0].value)
      } else {
        window.alert("")
      }
    }
  
    return (
      <>
        <form onSubmit={searchResults}>
          <input type="text" placeholder="Camp Search" />
          <input type="submit" />
        </form>
        <div>
          {
            parks.map(park =>
              <div>
                { parks.data.name }
              
                <button>Search</button>
              </div>
              )
          }
          </div>
      </>
    )
  }