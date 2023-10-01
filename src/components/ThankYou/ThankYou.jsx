import React from "react";
import { useHistory } from "react-router-dom";

export default function ThankYou() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/");
    }

    return (
        <div className="thank-you">
            <h2>Thank You For Your Feedback!</h2>
            <button onClick={handleClick}>Leave New Feedback</button>
        </div>
    )
}