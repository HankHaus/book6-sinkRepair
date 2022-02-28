//imports functions from other modules
import { getRequests, deleteRequest } from "./dataAccess.js";
import { convertRequestToListElement } from "./SinkRepair.js";




//defines and exports a function, Requests
export const Requests = () => {

    //defines a variable, requests, which has the value of the return value of the 
    //getRequests function
    const requests = getRequests()

    //defines a variable, html 
    let html = `
    <ul>
    ${requests.map(convertRequestToListElement).join("")}
    </ul>`
    // ${requests.map(convertRequestToListElement).join("")}
    // we are calling .map() on the variable, requests, and saying,
    //for each item in the requests array, invoke the convertRequestToListElement function on it
    //the .join("") says join each newly created list element with an empty string between them
  

    //returns the modifed html
    return html
}






const mainContainer = document.querySelector("#container")


//if the user clicks on something with an id that starts with "request--"
//then invoke the delete request funbciton with that requests id passed in to identify which one will be deleted
mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("request--")) {
        const [,requestId] = click.target.id.split("--")
        deleteRequest(parseInt(requestId))
    }
})