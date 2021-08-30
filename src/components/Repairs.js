import React from "react"
import { NavBar } from "./nav/NavBar.js"
import { ApplicationViews } from "./ApplicationViews.js"
import "./Repairs.css"
 // ------  || THIS MODULE IS FOR DETERMINING WHAT ORDER EVERYTHING RENDERS ||  ----- //
// ------   ||    IN HTML. ALL FUNCTIONALITY SHOULD GO IN OTHER MODULES.    || ----- //


export const Repairs = () => {
    
    return (
        <>
        <NavBar />
        <h1>Honey Rae's Repair Shop</h1>
        <ApplicationViews />
        </>
    )
}
