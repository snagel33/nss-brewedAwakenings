import { getEmployees, getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [,employeeId] = itemClicked.id.split("--")
            let numberOrders = 0;
            let currentEmployee = "";
            for (const employee of employees) {

                if (employee.id === parseInt(employeeId)) {
                    currentEmployee = employee.name
                    numberOrders = orders.filter(
                        order => (order.employeeId === parseInt(employeeId))
                        ).length
                }
            }
                window.alert(`${currentEmployee} sold ${numberOrders} products`)
                
        }
    }
)

const employees = getEmployees()
const orders = getOrders()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

