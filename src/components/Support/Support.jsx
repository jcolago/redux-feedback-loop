import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Support() {

    const [newSupport, setNewSupport] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

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