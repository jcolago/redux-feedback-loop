//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
//Function for Support page
export default function Support() {
    //Local state used for supportReducer dispatch
    const [newSupport, setNewSupport] = useState(0);
    //Instanciate useDispatch and useHistory for use
    const dispatch = useDispatch();
    const history = useHistory();
    //Runs function on click of next button. Validates data then dispatches to supportReducer to set state. Then sends the user to /comments.
    const handleClick = (event) => {
        event.preventDefault();

        if (!newSupport || newSupport > 5 || newSupport < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_SUPPORT",
            payload: newSupport
        });
        history.push("/comments")
    };
    //Elements displayed in Support component
    return (
        <div className="support_div">
            <div>
                <h2>Page 3 of 4</h2>
            </div>
            <form onSubmit={handleClick}>
                <p>How wel are you being supported?</p>
                <input type="number" placeholder="Enter a number between 1 and 5" onChange={(event) => setNewSupport(event.target.value)}></input>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}