import React, { useEffect, useState } from "react"



export const TicketList = () => {
    const [tickets, updateTickets] = useState([])

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
        <ul>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <br/><li>{ticket.description} 
                            <br/>Submitted by {ticket.customer.name}
                                and worked on by {ticket.employee.name}</li>
                        </div>
                        
                    }
                )
            }
        </ul>
        </>
    )
}
