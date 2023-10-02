//Imports used for component
import React from "react";
import { useHistory } from "react-router-dom";
import { Card, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import "./ThankYou.css"
//Function to display ThankYou page
export default function ThankYou() {
    //History used in handleClick function
    const history = useHistory();
    const dispatch = useDispatch();
    //Runs on click of button. Sends user back to "/"
    const handleClick = () => {
        history.push("/");
        //Resets reducers for new feedback
        dispatch({ type: "CLEAR_FEELINGS" });
        dispatch({ type: "CLEAR_UNDERSTANDING" });
        dispatch({ type: "CLEAR_SUPPORT" });
        dispatch({ type: "CLEAR_COMMENTS" });
    }
    //Elements displayed on ThankYou component
    return (
        <div className="thank-you">
            <Card style={{ minWidth: "500px", padding: "10px" }} variant="outlined">
                <h2>Thank You For Your Feedback!</h2>
                <Button variant="contained" onClick={handleClick}>Leave New Feedback</Button>
            </Card>
        </div>
    )
}