const database = {
    guests: [{ id: 1, name: "Alphonse Meron", area: 2 },
    { id: 2, name: "Damara Pentecust", area: 4 },
    { id: 3, name: "Anna Bowton", area: 4 },
    { id: 4, name: "Hunfredo Drynan", area: 6 },
    { id: 5, name: "Elmira Bick", area: 6 },
    { id: 6, name: "Bernie Dreger", area: 3 },
    {
        id: 7, name: "Rolando Gault", area: 1
    }, {
        id: 8, name: "Tiffanie Tubby", area: 6
    }, {
        id: 9, name: "Tomlin Cutill", area: 1
    }, {
        id: 10, name: "Arv Biddle", area: 6
    }, {
        id: 11, name: "Barney Northrup", area: 3
    }, {
        id: 12, name: "Alexander 'Sandy' McSouthers", area: 5
    }, {
        id: 13, name: "Sam Westing", area: 2
    }, {
        id: 14, name: "Julian R. Eastman", area: 2
    }],
    activities: [{
        id: 1, activityId: 10, guestId: 5
    }, {
        id: 2, activityId: 5, guestId: 1
    }, {
        id: 3, activityId: 2, guestId: 7
    }, {
        id: 4, activityId: 8, guestId: 4
    }, {
        id: 5, activityId: 9, guestId: 11
    }, {
        id: 6, activityId: 8, guestId: 12
    }, {
        id: 7, activityId: 5, guestId: 8
    }, {
        id: 8, activityId: 2, guestId: 9
    }, {
        id: 9, activityId: 3, guestId: 2
    }, {
        id: 10, activityId: 9, guestId: 6
    }, {
        id: 11, activityId: 4, guestId: 13
    }, {
        id: 12, activityId: 6, guestId: 14
    }, {
        id: 13, activityId: 10, guestId: 10
    }, {
        id: 14, activityId: 8, guestId: 12
    }, {
        id: 15, activityId: 3, guestId: 3
    }, {
        id: 16, activityId: 7, guestId: 4
    }, {
        id: 17, activityId: 4, guestId: 10
    }],
    activityNames: [{
        id: 1, name: "rafting", area: "NE"
    }, {
        id: 2, name: "canoeing", area: "NE"
    }, {
        id: 3, name: "fishing", area: "NE, SW"
    }, {
        id: 4, name: "hiking", area: "North, SW, SE"
    }, {
        id: 5, name: "picnicking", area: "North, SE, NE"
    }, {
        id: 6, name: "rock climbing", area: "North"
    }, {
        id: 7, name: "lodging", area: "NW, South"
    }, {
        id: 8, name: "parking", area: "NW, South"
    }, {
        id: 9, name: "information", area: "NW, South"
    }, {
        id: 10, name: "zip lines", area: "SE"
    }],
    areas: [{
        id: 1, name: "Chamfort River", location: "NE"
    }, {
        id: 2, name: "Lost Wolf Hiking Trail", location: "North"
    }, {
        id: 3, name: "Lodge", location: "NW"
    }, {
        id: 4, name: "Gander River", location: "SW"
    }, {
        id: 5, name: "Campgrounds", location: "South"
    }, {
        id: 6, name: "Pine Bluffs Trails", location: "SE"
    }, {
        id: 7, name: "Hotel", location: "NW"
    }, {
        id: 8, name: "Restaurant", location: "NW"
    }, {
        id: 9, name: "Office Park", location: "South"
    }, {
        id: 10, name: "Playgrounds", location: "South"
    }]
}
export const getAreas = () => {
    return database.areas.map(areas => ({ ...areas }))
}
export const getActivities = () => {
    return database.activities.map(activities => ({ ...activities }))
}
export const getGuests = () => {
    return database.guests.map(guests => ({ ...guests }))
}
export const getActivityNames = () => {
    return database.activityNames.map(activityNames => ({ ...activityNames }))
}