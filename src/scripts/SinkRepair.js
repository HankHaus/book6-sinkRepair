//imports functions from other modules
import { Requests } from "./Requests.js"
import { ServiceForm } from "./ServiceForm.js"






//defines and exports a function, SinkRepair, which returns html
export const SinkRepair = () => {

    //returns html
    return `
    <h1>Maude and Merle's Sink Repair</h1>
    <selection class="serviceForm">
    ${ServiceForm()}
    </selection>
    
    <selection class="serviceRequests">
    <h2>Service Requests</h2>
    ${Requests()}
    </section>`
}





//defines and exports a function, convertRequestToListElement, which accepts
//a single request as a parameter
export const convertRequestToListElement = (request) => {

    //returns modified html
    return `
    <li>
        ${request.description}
        <button class="request__delete"
                id="request--${request.id}">
            Delete
        </button>
    </li>`
//request.description and request.id access the properties "description" and "id" on
//the request object that gets passed as an argument
}
