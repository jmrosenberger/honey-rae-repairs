import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const Ticket = () => {
    const [ ticket, assignTicket ] = useState({})

    const { ticketId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/serviceTickets/${ticketId}?_expand=customer&_expand=employee`)
            .then(response => response.json())
            .then((data) => {
                assignTicket(data)
            })
        },
        [ ticketId ]
    )

    return (
        <>

            <h2>Ticket Details</h2>
            <section className="ticket">
                <h3 className="ticket__description">{ticket.description}</h3>
                <div className="ticket__customer"><b>Customer Name:</b> {ticket.customer?.name}</div>
                <br />
                <div className="ticket__employee"><b>Assigned To:</b>  {ticket.employee?.name}</div>
            </section>
        </>
    )
} 