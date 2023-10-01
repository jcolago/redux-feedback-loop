import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();

    const handleClick = () => {
        history.push("/feelings");
    }

    return(
    <div className="home-page">
        <h2>Welcome to the Feedback Form. Please click the button to begin!</h2>
        <button onClick={handleClick}>Click to begin!</button>
    </div>
    )
}