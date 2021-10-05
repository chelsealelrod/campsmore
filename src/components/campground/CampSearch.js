import { CampGroundContext } from "./CampProvider"
import React, { useContext, useEffect, useState } from "react"
// import { useHistory, Link } from "react-router-dom";



export const CampSearch = () => {
  const { setSearchTerms } = useContext(CampGroundContext)
  // const history = useHistory()
  // const [parks, setParks] = useState([])

  // const searchResults = (event) => {
  //   event.preventDefault()
  //   if (event.target[0].value !== "") {
  //     getTnParks(event.target[0].value)
  //   } else {
  //     window.alert("")
  //   }
  // }

  return (
    <>
              <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for a Camp... " />
                 { <button className="search__button" onClick={setSearchTerms}>Search</button> } 
              {/* <input type="text"
                className="input--wide"
                onKeyUp={(event) => searchResults(event.target.value)}
                placeholder="Search for a CampGround... " />
                <button onClick={setSearchTerms}>Search</button> */}
    
      {/* <div>
        {
          parks.map(park =>
            <div>
              {parks.name}
              Camp Search:
              <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for a CampGround... " />
                 { <button onClick={setSearchTerms}>Search</button> } 
              </div>
      )
          }
    </div> */}
      </>
    )
  }