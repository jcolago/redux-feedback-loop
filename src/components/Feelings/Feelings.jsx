import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Feelings() {
    const [newFeelings, setNewFeelings] = useState(0);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = (event) => {


        if (!newFeelings || newFeelings > 5 || newFeelings < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_FEELINGS",
            payload: newFeelings
        });
        history.push("/understanding")
    };

    return (
        <div className="feelings_div">
            <div>
                <h2>Page 1 of 4</h2>
            </div>
            <form>
                <p>How are you feeling today?</p>
                <input type="number" placeholder="Enter a number between 1 and 5" onChange={(event) => setNewFeelings(event.target.value)}></input>
                <button onClick={handleClick}>Next</button>
            </form>
        </div>
    )
}