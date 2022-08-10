import { getBusinesses } from "./database.js"

/*Build a function named the same inside it that uses .map() to generate an HTML representation of each purchasing agent. 
    Display the agent's name, company, and phone number.
Then use the .join("") method to concatenate all of the individual strings into a single string.
*/

// const agentHTMLRepresentations = businesses.map(
//     // Your callback function goes here
//     (business) => {
//         return business.purchasingAgent
//     }
// )
// const finalHTML = agentHTMLRepresentations.join("")

// return finalHTML

export const agentList = () => {
    let businesses = getBusinesses()
    let agentListHTML = ""
    // Iterate the agent array
    businesses.forEach(
        // This function will be invoked on each iteration
        (businessObject) => {
            agentListHTML += `
                <section class="agents">
                    <h2 class="agent__name">${businessObject.purchasingAgent.nameFirst} ${businessObject.purchasingAgent.nameLast}</h2>
                    <div class="agent__work">
                    <h3>${businessObject.companyName}</h3>
                    <b>${businessObject.phoneWork}<hr></b>
                    </div>
                </section>`
        }
    )
    return agentListHTML
}