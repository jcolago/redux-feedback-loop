//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/";
import { TextField } from "@mui/material";
import "./Understanding.css"
import GlobalCard from "../../global/components/GlobalCard";
import GlobalForm from "../../global/components/GlobalFrom";
import { handleFormSubmit, validateValue } from "../../global/functions/formHandlers";


//Function for Understanding component
export default function Understanding() {
    //State used for dispatch to understandingReducer
    const [newUnderstanding, setNewUnderstanding] = useState(0);
    //Selector used for update 
    const understanding = useSelector((state) => state.understandingReducer);
    //Instanciate useDispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    //Form handlers and redirects
    const dispatchAction = (newValue) => {
        dispatch({
            type: "SET_UNDERSTANDING",
            payload: newValue,
        });
    };

    const redirectToUnderstanding = () => history.push("/support");
    const redirectToReview = () => history.push("/review");
   
    //Elements displayed in Understanding component. Conditionally renders an update section depending on reducer state
    return (
        <div className="understanding_div">
            {Number(understanding) === 0 ? (
                <GlobalCard title="Page 2 of 4">
                    <GlobalForm 
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit(newUnderstanding, validateValue, dispatchAction, redirectToReview);
                        }}
                        buttonText="Next"
                    >
                        <p>How well are you understanding the content?</p>
                        <TextField
                            style={{ width: "400px" }}
                            label="Number"
                            variant="outlined" placeholder="Enter a number between 1 and 5"
                            onChange={(event) => setNewUnderstanding(event.target.value)}
                        />
                    </GlobalForm>
                </GlobalCard>
            ) : (
                <GlobalCard title="Page 2 of 4">
                    <GlobalForm 
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit(newUnderstanding, validateValue, dispatchAction, redirectToUnderstanding);
                        }}
                        buttonText="Update"
                    >
                        <p>How well are you understanding the content?</p>
                        <TextField
                            style={{ width: "400px" }}
                            label="Number"
                            variant="outlined"
                            placeholder={understanding}
                            onChange={(event) => setNewUnderstanding(event.target.value)}
                        />
                    </GlobalForm>
                </GlobalCard>
            )}
        </div>
    )
}