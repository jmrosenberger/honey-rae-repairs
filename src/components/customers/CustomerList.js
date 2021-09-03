import React, { useEffect, useState } from "react"
import "./Customers.css"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            getAllCustomers()
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer")
            }
            else {
                updateMessage(`You have ${customers.length} customers`)
            }
        },
        [customers]
    )

    return (
        <>
        <div className="customers customer__list"><u><b>{totalCustomerMessage}</b></u></div>
            {
                customers.slice(0, 5).map(
                    (customerObject) => {
                        return <p className="customers customer__name" key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                    }
                )
            }
        </>
    )
}
