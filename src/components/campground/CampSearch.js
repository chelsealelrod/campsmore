import { CampGroundContext } from "./CampProvider"
import React, { useContext, useEffect, useState } from "react"


export const CampSearch = () => {
  const { setSearchTerms } = useContext(CampGroundContext)

  return (
    <>
              <input type="text"
                className="input--wide"
                onKeyUp={(event) => setSearchTerms(event.target.value)}
                placeholder="Search for a Camp... " />
                 { <button className="search__button" onClick={setSearchTerms}>Search</button> } 
      </>
    )
  }