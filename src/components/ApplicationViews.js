import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from "./customers/CustomerList"
import { EmployeeList } from "./employees/EmployeeList"
import { EmployeeForm } from "./employees/EmployeeForm"
import { Employee } from "./employees/Employee"
import { TicketList } from "./serviceTickets/TicketList"
import { Ticket } from "./serviceTickets/Ticket.js"
import { TicketForm } from "./serviceTickets/TicketForm"


export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/customers">
                <CustomerList />
            </Route>

            <Route exact path="/serviceTickets">
                <TicketList />
            </Route>

            <Route path="/serviceTickets/create">
                <TicketForm />
            </Route>

            <Route exact path="/serviceTickets/:ticketId(\d+)">
                <Ticket />
            </Route>

            <Route exact path="/employees">
                <EmployeeList />
            </Route>

            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>

            <Route path="/employees/create">
                <EmployeeForm />
            </Route>

            
        </>
    )
}
