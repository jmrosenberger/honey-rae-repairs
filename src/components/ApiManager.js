
export const getAllEmployees = () => {
    return fetch ("http://localhost:8088/employees")
    .then(response => response.json())
}


export const getAllCustomers = () => {
    return fetch ("http://localhost:8088/customers")
    .then(response => response.json())
}

export const getAllTickets = () => {

    return fetch ("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
        .then(response => response.json())
       
}