import { getCities, getWalkerCities, getWalkers } from "./database.js"

const cities = getCities()
const walkerCities = getWalkerCities()
/*
First, define a function that will get all objects in the 
walkerCities array that are for the walker that was clicked on. 
It should return an array of all matching objects. */
// The function need the walker information, so define a parameter
const filterWalkerCitiesByWalker = (walker) => {
    // Define an empty array to store all of the assignment objects
    const assignments = []
    // Iterate the array value of walkerCities
    for (const assignment of walkerCities) {
        // Check if the primary key of the walker equals the foreign key on the assignment
        if (assignment.walkerId === walker.id) {
            // If it does, add the current object to the array of assignments
            assignments.push(assignment)
        }
    }
    // After the loop is done, return the assignments array
    return assignments
}


/*Then, define a function that take in the array of matching objects, 
    and use the cityId property on each one to find the matching city 
    name. It should return a string containing all the city names.
*/
// Define a function that builds a string of city names. Needs a paramter for assignments array.
const assignedCityNames = (assignments) => {
    // Define an empty string that will get appended with matching cities
    let cityNames = ""
    // Iterate the array of assignment objects
    for (const assignment of assignments) {
        // For each assignment, iterate the cities array to find the match
        for (const city of cities) {
            if (city.id === assignment.cityId) {
                // Add the name of the matching city to the string of city names
                cityNames = `${cityNames} and ${city.name}`
            }
        }
    }
    // After the loop is done, return the string
    return cityNames
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")
            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    const assignments = filterWalkerCitiesByWalker(walker)
                    const cities = assignedCityNames(assignments)
                    window.alert(`${walker.name} services ${cities}`)
                }
            }
        }
    }
)
const walkers = getWalkers()

export const Walkers = () => {
    let walkerHTML = "<ul>"
    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }
    walkerHTML += "</ul>"
    return walkerHTML
}