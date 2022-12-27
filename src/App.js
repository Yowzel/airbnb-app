import React from "react"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function App() {

    const cards = data.map(item => {
        return (
            <Card
                key = {item.id}
                item = {item}
            />
        )

    }) 

    return (
        
        <div>
            <Navbar/>
            <Hero/>
            <section class="cards-list">
                {cards}
            </section>
        </div>
        
             
    )
}