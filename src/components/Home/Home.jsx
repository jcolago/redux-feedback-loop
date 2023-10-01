//Imports for uses
import React from "react";
import { useHistory } from "react-router-dom";
//Home page function
export default function Home() {
    //Instanciate history for use in handleClick function
    const history = useHistory();
    //Runs of click of begen button, sends user to /feelings
    const handleClick = () => {
        history.push("/feelings");
    }
    //Elements to be displayed on Home component
    return (
        <div className="home-page">
            <h2>Welcome to the Feedback Form. Please click the button to begin!</h2>
            <button onClick={handleClick}>Click to begin!</button>
        </div>
    )
}