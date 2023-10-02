//Imports for uses
import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "@mui/material";
import "./Home.css"
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
            <Card style={{ minWidth: "500px", padding: "10px" }}>
                <h2>Welcome to the Feedback Form. Please click the button to begin!</h2>
                <Button variant="contained" onClick={handleClick}>Click to begin!</Button>
            </Card>
        </div>
    )
}