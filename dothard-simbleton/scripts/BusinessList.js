import { getBusinesses } from "./database.js"

/*Build a function named the same inside it that uses .forEach() to generate an HTML representation of each business 
h1 active businesses
h2 business name
p address road
p address city/state/zip

Invoke the function in the correct place in main.js to view your results on the DOM.
*/
const businessArray = getBusinesses()
export const businessList = () => {
    let businessListHTML = "<h1>Active Businesses</h1>"
    // Iterate the business array
    businessArray.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            businessListHTML += `
                <section class="business">
                    <h2 class="business__name">${businessObject.companyName}</h2>
                    <div class="business__address">
                    ${businessObject.addressFullStreet}<br>
                    ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<hr>
                    </div>
                </section>`
        }
    )
    return businessListHTML
}

document
    .querySelector("#content")
    .addEventListener(
        "keypress",
        (keyPressEvent) => {
            const companySearchResultArticle = document.querySelector(".foundBusinesses")
            if (keyPressEvent.charCode === 13) {
                const foundBusiness = businessArray.find(business => {
                    if (business.companyName.includes(keyPressEvent.target.value)) {
                        return business
                    }
                })
                // Your callback function goes here
                companySearchResultArticle.innerHTML = `<article class="foundBusinesses">
                <h2 class="business__name">${foundBusiness.companyName}</h2>
                    <div class="business__address">
                    ${foundBusiness.addressFullStreet}<br>
                    ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}<hr>
                    </div>
                </article>`
            }
        });