import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import "./Tickets.css";
import { getAllTickets } from "../ApiManager";


export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const history = useHistory()

    useEffect(
        () => {
            getAllTickets()
                .then((tickets) => {
                    updateTickets(tickets)
                })
        },
        []
    )

    const deleteTicket = (id) => {
        fetch(`http://localhost:8088/serviceTickets/${id}`, {
            method: "DELETE"
        })
            .then(() => {
                getAllTickets()
                    .then((tickets) => {
                        updateTickets(tickets)
                    })
            })
    }

    return (
        <>
            <div>
                <button className="createTicket" onClick={() => history.push("/serviceTickets/create")}>Create Ticket</button>
            </div>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`ticket ${ticket.emergency ? "emergency" : "ticket"}`}>
                                {ticket.emergency ? "🚑" : ""}
                                <Link to={`/serviceTickets/${ticket.id}`}>{ticket.description}</Link> -
                                submitted by {ticket.customer.name} and worked on by {ticket.employee.name}
                            </p>
                            <button className="ticket ticket__delete"
                                onClick={() => {
                                    deleteTicket(ticket.id)
                                }}>Delete</button>

                            <hr className={`dotted`}></hr>

                        </div>

                    })}
        </>
    )
}
