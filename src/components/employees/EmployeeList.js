import React, { useEffect, useState } from "react"



export const EmployeeList = () => {

    const [employees, assignEmployees] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/employees")
                .then(res => res.json())
                .then(
                    (employeeArray) => { 
                        assignEmployees(employeeArray)
                    }
                )
        },
        []
    )

    return (
        <>
        <h2><u>Employee List</u></h2>
        {
            employees.map(
                (employeeObject) => {
                    return <h4  key={`employee--${employeeObject.id}`}>{employeeObject.name}</h4>
                 }
            )
        }
        </>
    )
}
