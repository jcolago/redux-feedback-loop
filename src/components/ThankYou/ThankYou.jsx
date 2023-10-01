//Imports used for component
import React from "react";
import { useHistory } from "react-router-dom";
//Function to display ThankYou page
export default function ThankYou() {
    //History used in handleClick function
    const history = useHistory();
    //Runs on click of button. Sends user back to "/"
    const handleClick = () => {
        history.push("/");
    }
    //Elements displayed on ThankYou component
    return (
        <div className="thank-you">
            <h2>Thank You For Your Feedback!</h2>
            <button onClick={handleClick}>Leave New Feedback</button>
        </div>
    )
}