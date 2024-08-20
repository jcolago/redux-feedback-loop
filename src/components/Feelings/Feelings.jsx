//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TextField } from "@mui/material";
import GlobalCard from "../../global/components/GlobalCard"
import "./Feelings.css"
import { handleFormSubmit, validateValue } from "../../global/functions/formHandlers";

export default function Feelings() {
    //Local state used for sending to feelings reducer
    const [newFeelings, setNewFeelings] = useState(0);
    //Selector used for update
    const feelings = useSelector((state) => state.feelingsReducer);
    //Instanciates useDispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    //Global functions to handle dispatches and redirects
    const dispatchAction = (newValue) => {
        dispatch({
            type: "SET_FEELINGS",
            payload: newValue,
        });
    };

    const redirectToUnderstanding = () => history.push("/understanding");
    const redirectToReview = () => history.push("/review");

    //Elements displayed in Feelins component. Conditionally renders an update section depending on reducer state
    return (
        <div className="feelings_div">
            {Number(feelings) === 0 ? (
                <GlobalCard title="Page 1 of 4">
                    <GlobalForm
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit(newFeelings, validateValue, dispatchAction, redirectToUnderstanding);
                        }}
                        buttonText="Next"
                    >
                        <p>How are you feeling today?</p>
                        <TextField
                            style={{ width: "400px" }}
                            label="Number"
                            variant="outlined"
                            type="number"
                            placeholder="Enter a number between 1 and 5"
                            onChange={(event) => setNewFeelings(event.target.value)}
                        />
                    </GlobalForm>
                </GlobalCard>
            ) : (
                <GlobalCard title="Page 1 of 4">
                    <GlobalForm
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleFormSubmit(newFeelings, validateValue, dispatchAction, redirectToReview);
                        }}
                        buttonText="Update"
                    >
                        <p>How are you feeling today?</p>
                        <TextField
                            style={{ width: "400px" }}
                            label="Number"
                            variant="outlined"
                            type="number"
                            placeholder={feelings}
                            onChange={(event) => setNewFeelings(event.target.value)}
                        />
                    </GlobalForm>
                </GlobalCard>
            )}
        </div>
    )
}