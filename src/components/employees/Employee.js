import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import "./Employees.css"


export const Employee = () => {
    const [ employee, assignEmployee ] = useState({})

    const { employeeId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
            .then(response => response.json())
            .then((data) => {
                assignEmployee(data)
            })
        },
        [ employeeId ]
    )

    return (
        <>

            <h2 className="employee__heading">Employee Details</h2>
            <section className="employee">
                <h3 className="employee__name">{employee.name}</h3>
                <div className="employee__specialty"><b>Specialty</b>: {employee.specialty}</div>
            </section>
        </>
    )
} 