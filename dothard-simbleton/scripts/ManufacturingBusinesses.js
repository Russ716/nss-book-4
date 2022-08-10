import { getBusinesses } from "./database.js"
let businesses = getBusinesses()
const onlyManufacturing = (office) => {
    if (office.companyIndustry === "Manufacturing") {
        return true
    } return false
} //? companyIndustry: "Manufacturing",
export const businessesManufacturing = () => {
    const filteredBusinesses = businesses.filter(onlyManufacturing)
    return filteredBusinesses
}
export const businessMFList = () => {
    const filterMFOnly = businessesManufacturing()
    let businessMFListHTML = ""
    // Iterate the business array
    filterMFOnly.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            businessMFListHTML += `
                <section class="businesses--manufacturing">
                    <h2 class="business__name">${businessObject.companyName}</h2>
                    <div class="business__address">
                    ${businessObject.addressFullStreet}<br>
                    ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<hr>
                    </div>
                </section>`
        }
    )
    return businessMFListHTML
}