import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Comments() {
    const [newComments, setNewComments] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {
        event.preventDefault();

        dispatch({
            type: "SET_COMMENTS",
            payload: newComments
        });
        history.push("/review")
    };

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