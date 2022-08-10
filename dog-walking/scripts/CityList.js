import { getCities } from "./database.js"
const cities = getCities()

export const CityList = () => {
    let citiesHTML = "<ul>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }
    /*
    *Update the CityList module to invoke getCities() now and store its return value in cities.
*Update the for..of loop to iterate the array value of cities.
*Make sure you interpolate the name property of the city between the <li> tags.
    for (const walker of walkers) {
        citiesHTML += `<li>${walker.city}</li>`
    }*/

    citiesHTML += "</ul>"

    return citiesHTML
}

