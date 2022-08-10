import { taskList } from "./activities.js";
import { areaList } from "./areas.js";
import { personList } from "./guests.js";

const mainContainer = document.querySelector("#container")

const applicationHTML = `
${taskList()}
${areaList()}
`

mainContainer.innerHTML = applicationHTML





// !What are the main resources (i.e. tables)? Design your ERD first.
//^ A table for guests. A table for Activities that links to areas. A table for Areas. A table for each area. 
//! What are the properties of each resource?
//^ unique ID#. Area links to available activities. Activities links to guest. 
//! What is the relationship between the resources? If it's many-to-many, what additional data must you design in your ERD?
//! Which modules should you create?
// main, database, guests, areas, activities. index.html. styles.css. 
//! What is the responsibility of each module?
//! What functions should be in which modules?
//! What is the responsibility of each function?
//! What should each function return?
//! What is the specific algorithm for each function? Does the function need parameters? Should it return something?
//TODOWhen the title of any area is clicked, the current number of park guests in that area should be displayed.
// get code from Brewed Awakening/ Dog Walker to use the click event listener
