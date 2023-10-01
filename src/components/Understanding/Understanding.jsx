//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";


//Function for Understanding component
export default function Understanding() {
    //State used for dispatch to understandingReducer
    const [newUnderstanding, setNewUnderstanding] = useState(0);
    //Instanciate useDispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    //Function runs on clikc of next button. Validates data before sending dispatch to set understandingReducer state. Then sends the user to /support
    const handleClick = (event) => {
        event.preventDefault();

        if (!newUnderstanding || newUnderstanding > 5 || newUnderstanding < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_UNDERSTANDING",
            payload: newUnderstanding
        });

        history.push("/support");
    }
    //Elements displayed in Understanding component
    return (
        <div className="understanding_div">
            <div>
                <h2>Page 2 of 4</h2>
            </div>
            <form onSubmit={handleClick}>
                <p>How well are you understanding the content?</p>
                <input type="number" placeholder="Enter a number between 1 and 5" onChange={(event) => setNewUnderstanding(event.target.value)}></input>
                <button type="submit"> Next</button>
            </form>
        </div>
    )
}