//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Button, TextField } from "@mui/material";
import "./Support.css"
import GlobalCard from "../../global/components/GlobalCard";
//Function for Support page
export default function Support() {
    //Local state used for supportReducer dispatch
    const [newSupport, setNewSupport] = useState(0);
    //Selector used to update state of reducer
    const support = useSelector((state) => state.supportReducer);
    //Instanciate useDispatch and useHistory for use
    const dispatch = useDispatch();
    const history = useHistory();
    //Runs function on click of next button. Validates data then dispatches to supportReducer to set state. Then sends the user to /comments.
    const handleClick = (event) => {
        event.preventDefault();

        if (!newSupport || newSupport > 5 || newSupport < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_SUPPORT",
            payload: newSupport
        });
        history.push("/comments")
    };
    //Updates state of supportReducer when update button is clicked and sends the user to /review
    const handleUpdate = (event) => {
        event.preventDefault();

        if (!newSupport || newSupport > 5 || newSupport < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_SUPPORT",
            payload: newSupport
        });
        history.push("/review")
    };
    //Elements displayed in Support component. Conditionally renders an update section depending on reducer state
    return (
        <div className="support_div">

            {Number(support) === 0 ? (
                <GlobalCard title="Page 3 of 4">
                    <form onSubmit={handleClick}>
                        <p>How well are you being supported?</p>
                        <TextField style={{ width: "400px" }} label="Number" variant="outlined" type="number" placeholder="Enter a number between 1 and 5" onChange={(event) => setNewSupport(event.target.value)}></TextField>
                        <br />
                        <br />
                        <Button variant="contained" type="submit">Next</Button>
                    </form>
                </GlobalCard>
                ) : (
                    <GlobalCard title="Page 3 of 4">
                        <form onSubmit={handleUpdate}>
                            <p>How well are you being supported?</p>
                            <TextField style={{ width: "400px" }} label="Number" variant="outlined" type="number" placeholder={support} onChange={(event) => setNewSupport(event.target.value)}></TextField>
                            <br />
                            <br />
                            <Button variant="contained" type="submit">Update</Button>
                        </form>
                    </GlobalCard>
                )}
        </div>
    )
}