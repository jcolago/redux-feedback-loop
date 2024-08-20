//Imports for react, redux, and axios
import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Card, Button } from "@mui/material";
import "./Review.css"
import GlobalCard from "../../global/components/GlobalCard";

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
//Global variable for use in multiple functions
    const feedbackObj = {
        feeling: feelings,
        understanding: understanding,
        support: support,
        comments: comments
    }
    //Runs on click of submit button. Alerts use of success.
    const handleClick = () => {

        //Data validation for feedback form
        if (!feedbackObj.feeling || !feedbackObj.understanding || !feedbackObj.support) {
            alert("Please fill out feelings, understanding, and support sections before submitting");
            return;
        }

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
    //Function runs as part of the handleClick function. Takes reducer info and puts it all into an object and sends to server. Then sends the user to the ThankYou page.
    const submitFeedback = () => {
        axios
            .post('/feedback', feedbackObj)
            .then((response) => {
                console.log(response.data);

                history.push("/thankyou");
            })
            .catch((error) => {
                console.log('Error in submitting feedback', error);
            })
    }
    //Elements that are displayed in Review component
    return (
        <div className="review">
            <GlobalCard title="Review your feedback">
                <h3>Feelings: {feelings}</h3>
                < Button variant="outlined" onClick={updateFeelings}>Update</Button>
                <h3>Understanding: {understanding}</h3><Button variant="outlined" onClick={updateUnderstanding}>Update</Button>
                <h3>Support: {support}</h3><Button variant="outlined" onClick={updateSupport}>Update</Button>
                <h3>Comments: {comments}</h3><Button variant="outlined" onClick={updateComments}>Update</Button>
                <br />
                <br />
                <hr />
                <Button className="submitButton" variant="contained" onClick={handleClick}>Submit</Button>
            </GlobalCard>
        </div>
    )
}