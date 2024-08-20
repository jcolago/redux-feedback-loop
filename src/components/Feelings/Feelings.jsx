//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import { GlobalCard } from "../../global/components/GlobalCard"
import "./Feelings.css"

export default function Feelings() {
    //Local state used for sending to feelings reducer
    const [newFeelings, setNewFeelings] = useState(0);
    //Selector used for update
    const feelings = useSelector((state) => state.feelingsReducer);
    //Instanciates useDispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    //Function runs on click of next button. Validates data and sends dispatch to feelingsReducer. Then sends user to /understanding
    const handleClick = (event) => {
        event.preventDefault();

        if (!newFeelings || newFeelings > 5 || newFeelings < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_FEELINGS",
            payload: newFeelings
        });
        history.push("/understanding")
    };
    //Updates state of feelingsReducer on click of update button and sends user to /review
    const handleUpdate = (event) => {
        event.preventDefault();

        if (!newFeelings || newFeelings > 5 || newFeelings < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_FEELINGS",
            payload: newFeelings
        });
        history.push("/review");
    };
    //Elements displayed in Feelins component. Conditionally renders an update section depending on reducer state
    return (
        <div className="feelings_div">
            {Number(feelings) === 0 ? (
                <GlobalCard title="Page 1 of 4">
                    <form onSubmit={handleClick}>
                        <p>How are you feeling today?</p>
                        <TextField style={{ width: "400px" }} label="Number" variant="outlined" type="number" placeholder="Enter a number between 1 and 5" onChange={(event) => setNewFeelings(event.target.value)}></TextField>
                        <br />
                        <br />
                        <Button variant="contained" type="submit">Next </Button>
                    </form>
                </GlobalCard>) :
                (
                    <GlobalCard title="Page 1 of 4">
                        <form onSubmit={handleUpdate}>
                            <p>How are you feeling today?</p>
                            <TextField style={{ width: "400px" }} label="Number" variant="outlined" type="number" placeholder={feelings} onChange={(event) => setNewFeelings(event.target.value)}></TextField>
                            <br />
                            <br />
                            <Button variant="contained" type="submit">Update</Button>
                        </form>
                    </GlobalCard>
                )}

        </div>
    )
}