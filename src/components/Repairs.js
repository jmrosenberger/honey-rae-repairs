import React from "react"
import { CustomerList } from "./customers/CustomerList.js"
import { EmployeeList } from "./employees/EmployeeList.js"

 // ------  || THIS MODULE IS FOR DETERMINING WHAT ORDER EVERYTHING RENDERS ||  ----- //
// ------   ||    IN HTML. ALL FUNCTIONALITY SHOULD GO IN OTHER MODULES.    || ----- //


export const Repairs = () => {
    
    return (
        <>
        <h1>Honey Rae's Repair Shop</h1>
        <CustomerList />
        <EmployeeList />
        </>
    )
}
