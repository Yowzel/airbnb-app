import React from "react"
import photogrid from './photogrid.PNG';

export default function Hero() {
    return (
        <section>
            <img class="photogrid" src={photogrid} alt="photos"/>

            <h1 class="experiences">Online Experiences</h1>

            <p class="join">Join unique interactive activites led by 
            one-of-a-kind hosts-all without leaving
            home.
            </p>
        </section>
    )
}