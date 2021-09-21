import React from "react"
import { Route } from "react-router-dom"
import { MessageProvider } from "./forum/MessageProvider"
import { MessageForm } from "./forum/MessageForm"
import { MessageList } from "./forum/MessageList"
import { ReservationForm } from "./reservation/ReservationForm"
import { ReservationProvider } from "./reservation/ReservationProvider"
import { ReservationList } from "./reservation/ReservationList"
import { CampProvider } from "./campground/CampProvider"
import { CampGroundList } from "./campground/CampGroundList"
import { CampSearch } from "./campground/CampSearch"
import { CampDetail } from "./campground/CampDetail"
import { Home } from "./home/Home"




export const ApplicationViews = () => {
    return (

        <>      <ReservationProvider>
                <MessageProvider>
                <CampProvider>

                   <Route exact path ="/forum">
                    <MessageList/>
                    </Route>

                    <Route exact path ="/forum/create">
                    <MessageForm/>
                    </Route>
               
                    <Route exact path = "/reservations/create">
                    <ReservationForm />
                    </Route >

                    <Route exact path = "/reservations">
                    <ReservationList />
                    </Route >

                    

                    <Route path = "/campgrounds">
                    <CampProvider />
                    <CampGroundList />
                    </Route>

                    <Route exact path = "/campgrounds/">
                    <CampDetail />
                    </Route >

                    </CampProvider>
                    </MessageProvider>
                </ReservationProvider>

                <Route path ="/home">
                    <Home />
                </Route>
        </>
    )
}
