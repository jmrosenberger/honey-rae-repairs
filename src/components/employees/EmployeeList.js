import React, { useEffect, useState } from "react"
import { useHistory, Link } from "react-router-dom"
import { getAllEmployees } from "../ApiManager"

export const EmployeeList = () => {
    const [employees, changeEmployee] = useState([])
    const [specialties, setSpecial] = useState("")

    const history = useHistory()

    useEffect(
        () => {
            getAllEmployees()
                .then((data) => {
                    changeEmployee(data)
                })
        },
        []
    )

    useEffect(() => {
        const employeeSpecialties = employees.map(employee => employee.specialty)
             setSpecial(employeeSpecialties.join(", "))
            
        }, [employees])


    return (
        <>
            <div className="employee employee__hireButton">
        <button onClick={() => history.push("/employees/create")}>Hire Employee</button>

        </div>
            <div className="employee employee__specialties"><u><b>
                Specialties:</b></u> { specialties }
                
            </div>
            {
                employees.map(
                    (employee) => {
                        return <p className="employee employee__name" key={`employee--${employee.id}`}>
                            <Link to={`/employees/${employee.id}`}>{employee.name}</Link></p>
                    }
                )
            }
        </>
    )
}
