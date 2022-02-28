const applicationState = {

}





//sets the url as the value for the variable API
const API = "http://localhost:8088"





//defines and exports a function, fetchRequests
export const fetchRequests = () => {

    //passes in the url += /requests as the argument for the fetch
    return fetch(`${API}/requests`)
        //is it because fetch is a built in, so were saying "fetch whatever i pass in to the parenthases"?
        //A: yes

        //Q: what is the return statement doing here?
        //A: 


        //once the data has been "fetched", this takes the incoming data, response, and parses the json into javascript
        .then(response => response.json())

        //once the incoming data has been parsed as js,
        .then(

            //serviceRequests represents incoming data that has been parsed as json
            (serviceRequests) => {

                //this accesses the applicationState object at the top of this module,
                //adds a property named requests, and sets its value as the value serviceRequests,
                //which is the parsed data
                applicationState.requests = serviceRequests
            }
        )
}




const mainContainer = document.querySelector("#container")





//defines and exports a function, getRequests
export const getRequests = () => {

    //returns a copy of the requests property on the applicationState object
    return applicationState.requests.map(request => ({ ...request }))
}




//defines and exports a function, sendRequest, which accepts a single service request from the user
export const sendRequest = (userServiceRequest) => {

    //defines an object, fetchOptions
    const fetchOptions = {


        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userServiceRequest)
        //please explain the above code
        //A: 

    }





    //please explain the code below
    return fetch(`${API}/requests`, fetchOptions)
        //.then(response => response.json())
        .then(() => {
            mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
        })
}





export const deleteRequest = (id) => {

    //Q: please explain the line below
    return fetch(`${API}/requests/${id}`, { method: "DELETE" })
        //A:

        //once the above has been completed, broadcast "stateChanged"
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}