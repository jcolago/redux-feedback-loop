//Imports for react, redux, and axios
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Card, Button } from "@mui/material";
import "./Review.css"

//Function to display Review page
export default function Review() {
    //Instanciate useHistory and useDispatch for use in functions
    const history = useHistory();
    const dispatch = useDispatch();
    //Variables used from the reducers to add to the full object on submit
    const feelings = useSelector((state) => state.feelingsReducer);
    const understanding = useSelector((state) => state.understandingReducer);
    const support = useSelector((state) => state.supportReducer);
    const comments = useSelector((state) => state.commentsReducer);

    //Runs on click of submit button. Alerts use of success.
    const handleClick = () => {
        alert("Feedback has been submitted!");
        submitFeedback();
    }
    //Functions used to send user back to a page of the form to update entry
    const updateFeelings = () => {
        history.push("/feelings");
    }

    const updateUnderstanding = () => {
        history.push("/understanding");
    }

    const updateSupport = () => {
        history.push("/support");
    }

    const updateComments = () => {
        history.push("/comments");
    }
    //Function runs as part of the handleClick function. Takes reducer info and puts it all into an object and sends to server. Then resets all reducer states and sends the user to the ThankYou page.
    const submitFeedback = () => {
        const feedbackObj = {
            feeling: feelings,
            understanding: understanding,
            support: support,
            comments: comments
        }
        axios
            .post('/feedback', feedbackObj)
            .then((response) => {
                console.log(response.data);

                history.push("/thankyou");
                dispatch({ type: "CLEAR_FEELINGS" });
                dispatch({ type: "CLEAR_UNDERSTANDING" });
                dispatch({ type: "CLEAR_SUPPORT" });
                dispatch({ type: "CLEAR_COMMENTS" });
            })
            .catch((error) => {
                console.log('Error in submitting feedback', error);
            })
    }
    //Elements that are displayed in Review component
    return (
        <div className="review">
            <Card style={{ minWidth: "500px", padding: "10px" }} variant="outlined">
                <div>
                    <h2>Review Your Feedback</h2>
                </div>
                <h3>Feelings: {feelings}</h3>
                < Button variant="outlined" onClick={updateFeelings}>Update</Button>
                <h3>Understanding: {understanding}</h3><Button variant="outlined" onClick={updateUnderstanding}>Update</Button>
                <h3>Support: {support}</h3><Button variant="outlined" onClick={updateSupport}>Update</Button>
                <h3>Comments: {comments}</h3><Button variant="outlined" onClick={updateComments}>Update</Button>
                <br />
                <br />
                <hr />
                <Button className="submitButton" variant="contained" onClick={handleClick}>Submit</Button>
            </Card>
        </div>
    )
}