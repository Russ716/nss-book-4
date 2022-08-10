import { getGuests } from "./database.js"

let people = getGuests()
export const personList = () => {
    let personHTML = `<ul>`
    for (const person of people) {
        // if (person.id < 7) {
            personHTML += `<li>${person.name}</li>`
        // }
    }
    personHTML += "</ul>"
    return personHTML
}