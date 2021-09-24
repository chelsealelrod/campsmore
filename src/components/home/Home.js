import React from "react";
import "./Home.css"

export const Home = () => {
        
return (
<>
        <div className="home">

  <h2>Welcome to Camp S'More! Browse from several different
   CampGrounds, make a quick reservation to a Campsite, 
   or find out any info on all things Camping!</h2>
   
   </div>

           <section className="home__page">
   <div className="camping__tip__links">
        <h2 className="links">Here are some helpful resources for starting your camping trip:</h2>
           <a href ="https://www.campingwithstyle.co.uk/camping-the-ultimate-list-of-camping-tips-camping-hacks-tips/">
                   Camping With Style</a>
           <a href="https://www.rei.com/blog/camp/22-camp-hacks-from-rei-experts">
                   Camp Hacks from REI experts</a>
           <a href="https://www.thegonegoat.com/gear/camping-tips-for-beginners">thegonegoat.com - The Wildly-Useful Camping Tips, 
           Tricks and Guide for beginners</a>

           <div className="photo">
           <img className="photo__home" src="https://images.unsplash.com/photo-1470246973918-29a93221c455?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"
            alt=""  />
   </div>

   </div>
        </section>
        </>
    

)
}