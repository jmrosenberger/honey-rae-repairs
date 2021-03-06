import React, { useState } from "react"
import { useHistory } from "react-router-dom";

export const EmployeeForm = () => {
    
    const [employee, updateEmployee] = useState({
        name: "",
        specialty: ""
    });
    const history = useHistory()

    const hireEmployee = (event) => {
        event.preventDefault()
        const newEmployee = {
            name: employee.name,
            specialty: employee.specialty,
            dateHired: Date()
        }
        const fetchOption = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEmployee)
        }

        return fetch("http://localhost:8088/employees", fetchOption)
        .then(() => {
            history.push("/employees")
        })
        
    }

    return (
        
        <form className="employee employee__hireForm">
            <h2 className="hireForm__title">New Employee</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.name = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Full name"
                         />
                </div>
                <div className="form-group">
                    <label htmlFor="specialty">Specialty:</label>
                    <input
                        onChange={
                            (event) => {
                                const copy = {...employee}
                                copy.specialty = event.target.value
                                updateEmployee(copy)
                            }
                        }
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Technical Specialty"
                         />
                </div>
            </fieldset>
            
            <button className="btn btn-primary" onClick={hireEmployee}>
                Finish Hiring
            </button>
        </form>
        
    )
}