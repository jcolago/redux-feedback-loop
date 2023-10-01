//Imports from react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//Function for Comments page
export default function Comments() {
    //Local state used for dispatch to commentsReducer
    const [newComments, setNewComments] = useState("");
    //Selector used to update state of reducer
    const comments = useSelector((state) => state.commentsReducer);
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
    //Updates commentsReducer on click of update button and sends user to /review
    const handleUpdate = (event) => {
        event.preventDefault();

        dispatch({
            type: "SET_COMMENTS",
            payload: newComments
        });
        history.push("/review")
    };
    //Elements displayed in Comments element. Conditionally renders an update section depending on reducer state
    return (
        <div className="comments_div">
            <div>
                <h2>Page 4 of 4</h2>
            </div>
            {comments === "" ? (
                <form onSubmit={handleClick}>
                    <p>Any comments you would like to share?</p>
                    <input type="text" placeholder="Enter comment here" onChange={(event) => setNewComments(event.target.value)}></input>
                    <button type="submit">Next</button>
                </form>) :
                (
                    <form onSubmit={handleUpdate}>
                        <p>Any comments you would like to share?</p>
                        <input type="text" placeholder={comments} onChange={(event) => setNewComments(event.target.value)}></input>
                        <button type="submit">Update</button>
                    </form>
                )}
        </div>
    )
}