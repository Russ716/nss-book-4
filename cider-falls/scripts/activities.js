import { getActivities, getActivityNames, getAreas } from "./database.js"
const tasks = getActivities()
const taskNames = getActivityNames()
const locations = getAreas()

export const taskList = () => {
    let taskHTML = `<div class="services">Available park services: (Click to see service location.)<br>`
    for (const task of taskNames) {
        if (task.id < 7) {

            taskHTML += ` <div id="task--${task.id}">| ${task.name} | </div>`
        }
    }
    taskHTML += "</div>"
    return taskHTML
}
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("task")) {
            const [, taskId] = itemClicked.id.split("--")
            for (const task of taskNames) {
                if (task.id === parseInt(taskId)) {
                    const taskLocator = filterTasksLocationByTask(task)
                    window.alert(`${task.name} is currently available in the ${taskLocator} section of the park.`)
                }
            }
        }
    }
)
const filterTasksLocationByTask = (place) => {
    let places = []
    for (const area of locations) {
        if (place.area.includes(area.location)) {
            //! place = activityNames
            places.push(area.name)
        }
    }
    return places
}
/*
guests: [{ id: 1, name: "Alphonse Meron", area: 2 },
{ id: 2, name: "Damara Pentecust", area: 4 }]
activities: [{ id: 1, activityId: 10, guestId: 5 },
{ id: 2, activityId: 5, guestId: 1 }]
activityNames: [{ id: 1, name: "rafting", area: "NE" },
{ id: 2, name: "canoeing", area: "NE" }]
areas: [{ id: 1, name: "Chamfort River", location: "NE" },
{ id: 2, name: "Lost Wolf Hiking Trail", location: "North" }]
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
        if (itemClicked.id.startsWith("task")) {
            //^when you click an area
            const [, taskId] = itemClicked.id.split("--")
            //^ look at line 54
            for (const area of locations) {
                if (area.id === parseInt(areaId)) {
                    const taskLocator = filterTasksLocationByTask(area)
                    //! for each one of the 6 areas, jump to 10
                    window.alert(`${area.name} has currently ${guestTracker} guests inside.`)
                }
            }
        }
    }
)*/