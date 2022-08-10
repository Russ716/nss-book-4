//Build a function named the same inside it that uses .filter() to generate a list of companies located in New York (NY).
import { getBusinesses } from "./database.js"
let businesses = getBusinesses()
const onlyNewYork = (office) => {
    if (office.addressStateCode === "NY") {
        return true
    }
    return false
}
export const businessesNewYork = () => {
    const filteredBusinesses = businesses.filter(onlyNewYork)
    return filteredBusinesses
}

export const businessNYList = () => {
    const filterNYOnly = businessesNewYork()
    let businessNYListHTML = ""
    // Iterate the business array
    filterNYOnly.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            businessNYListHTML += `
                <section class="businesses--newYork">
                    <h2 class="business__name">${businessObject.companyName}</h2>
                    <div class="business__address">
                    ${businessObject.addressFullStreet}<br>
                    ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<hr>
                    </div>
                </section>`
        }
    )
    return businessNYListHTML
}