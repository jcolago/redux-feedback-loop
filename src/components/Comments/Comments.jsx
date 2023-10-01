//Imports from react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

//Function for Comments page
export default function Comments() {
    //Local state used for dispatch to commentsReducer
    const [newComments, setNewComments] = useState("");
    //Instanciate useDispatch and useHistory for use
    const dispatch = useDispatch();
    const history = useHistory();
    //Function runs on click of next button. Sends dispatch for set commentsReducer state. No validation needed for this page. Then sends user to /review.
    const handleClick = (event) => {
        event.preventDefault();

        dispatch({
            type: "SET_COMMENTS",
            payload: newComments
        });
        history.push("/review")
    };
    //Elements displayed in Comments element
    return (
        <div className="feelings_div">
            <div>
                <h2>Page 4 of 4</h2>
            </div>
            <form onSubmit={handleClick}>
                <p>Any comments you would like to share?</p>
                <input type="text" placeholder="Enter comment here" onChange={(event) => setNewComments(event.target.value)}></input>
                <button type="submit">Next</button>
            </form>
        </div>
    )
}