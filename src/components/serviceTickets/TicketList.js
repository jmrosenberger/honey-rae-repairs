import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import "./Tickets.css";



export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
                .then(res => res.json())
                .then((data) => {
                    updateTickets(data)
                })
        },
        []
    )


    return (
        <>
        <div>
        <button onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>

        </div>
        <ul>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`${ticket.emergency ? "emergency" : "ticket"}`}>
                                {ticket.emergency ? "🚑" : ""} {ticket.description} submitted by 
                                {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>

                        </div>
                        
                    }
                )
            }
        </ul>
        </>
    )
}
