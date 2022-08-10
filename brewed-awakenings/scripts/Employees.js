import { getEmployees, getOrders } from "./database.js"
const employees = getEmployees()
const salesData = getOrders()
const filterEmployeeOrdersByEmployee = (worker) => {
    let sales = 0
    for (const sale of salesData) {
        if (sale.employeeId === worker.id) {
            sales++;
;
        }
    }
    return sales
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            for (const employee of employees) {
                if (employee.id === parseInt(employeeId)) {
                    const salesRecord = filterEmployeeOrdersByEmployee(employee)
                    window.alert(`${employee.name} has sold ${salesRecord} products.`)
                }
            }
        }
    }
)


export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.id}">${employee.name}</li>`
    } //^ changed "employeeId" to employee.id

    html += "</ul>"

    return html // added "l"
}

