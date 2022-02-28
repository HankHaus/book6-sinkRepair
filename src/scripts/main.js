//imports functions from other modules
import { fetchRequests } from "./dataAccess.js";
import { SinkRepair } from "./SinkRepair.js"





//defines a variable, mainContainer
const mainContainer = document.querySelector("#container")
//this selects the html tag which has an id=container





//defines a function, render
const render = () => {

    //invokes the fetchRequests function
    fetchRequests()
    
    //once you get the return value of the fetchRequests function,
    .then(


        () => {
            //Q: what does this line do?
            //A:

            //sets the html of the tag with id=container to the return value of the 
            //SinkRepair function
            mainContainer.innerHTML = SinkRepair()
        }
    )
}





//invokes the render funciton
render()





//invokes the render function once "stateChanged" has been broadcasted
mainContainer.addEventListener(
    "stateChanged",
    customEvent => {
        render()
    }
)