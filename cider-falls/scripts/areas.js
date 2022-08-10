import { getActivities, getGuests, getActivityNames, getAreas } from "./database.js";
const people = getGuests()
const wherePeople = getActivities()
const locations = getAreas()
const funThings = getActivityNames()
//! comments start at 26
// guests: [{ id: 1, name: "Alphonse Meron", area: 2 },
// { id: 2, name: "Damara Pentecust", area: 4 }]
// activities: [{ id: 1, activityId: 10, guestId: 5 },
// { id: 2, activityId: 5, guestId: 1 }]
// activityNames: [{ id: 1, name: "rafting", area: "NE" },
// { id: 2, name: "canoeing", area: "NE" }]
// areas: [{ id: 1, name: "Chamfort River", location: "NE" },
// { id: 2, name: "Lost Wolf Hiking Trail", location: "North" }]
const filterGuestLocationByGuest = (place) => {
    let count = 0

    //^ for each person in the park
    for (const person of people) {
        if (person.area === place.id) {
            count++;
            //^ add one person to the count
        }
        //TODO add hotel and restaurant to LODGE
        //TODO add Office Park and Playgrounds to CAMPGROUNDS
    }
    return count
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("area")) {
            //^when you click an area
            const [, areaId] = itemClicked.id.split("--")
            //^ look at line 54
            for (const area of locations) {
                if (area.id === parseInt(areaId)) {
                    const guestTracker = filterGuestLocationByGuest(area)
                    //! for each one of the 6 areas, jump to 10
                    window.alert(`${area.name} has currently ${guestTracker} guests inside.`)
                }
            }
        }
    }
)

export const areaList = () => {
    let i = 0
    let areasHTML = `<div class="grid">`
    for (const area of locations) {
        if (area.id < 4) {
            i++;
            areasHTML += `<div class="flex-container"><div id="area--${area.id}">${area.name}</div></div>`
        }
        if ((area.id > 3) && (area.id < 7)) {
            i++;
            areasHTML += `<div class="flex-container"><div id="area--${area.id}">${area.name}</div></div>`
        }
    }
    areasHTML += `</div>`
    return areasHTML
}
