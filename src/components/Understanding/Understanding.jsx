//Imports for react and redux
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/";
import { Card, Button, TextField } from "@mui/material";
import "./Understanding.css"


//Function for Understanding component
export default function Understanding() {
    //State used for dispatch to understandingReducer
    const [newUnderstanding, setNewUnderstanding] = useState(0);
    //Selector used for update 
    const understanding = useSelector((state) => state.understandingReducer);
    //Instanciate useDispatch and useHistory
    const dispatch = useDispatch();
    const history = useHistory();
    //Function runs on clikc of next button. Validates data before sending dispatch to set understandingReducer state. Then sends the user to /support
    const handleClick = (event) => {
        event.preventDefault();

        if (!newUnderstanding || newUnderstanding > 5 || newUnderstanding < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_UNDERSTANDING",
            payload: newUnderstanding
        });

        history.push("/support");
    }
    //Updates state of understandingReducer
    const handleUpdate = (event) => {
        event.preventDefault();

        if (!newUnderstanding || newUnderstanding > 5 || newUnderstanding < 1) {
            alert("Please enter a number between 1 and 5 before moving to next page");
            return;
        }

        dispatch({
            type: "SET_UNDERSTANDING",
            payload: newUnderstanding
        });

        history.push("/review");
    }
    //Elements displayed in Understanding component. Conditionally renders an update section depending on reducer state
    return (
        <div className="understanding_div">
            {Number(understanding) === 0 ? (
                <Card style={{ minWidth: "500px", padding: "10px" }} variant="outlined">
                    <div>
                        <h2>Page 2 of 4</h2>
                    </div>
                    <form onSubmit={handleClick}>
                        <p>How well are you understanding the content?</p>
                        <TextField style={{ width: "400px" }} label="Number" variant="outlined" placeholder="Enter a number between 1 and 5" onChange={(event) => setNewUnderstanding(event.target.value)}></TextField>
                        <br />
                        <br />
                        <Button variant="contained" type="submit"> Next</Button>
                    </form>
                </Card>) :
                (
                    <Card style={{ minWidth: "500px", padding: "10px" }} variant="outlined">
                        <div>Ï
                            <h2>Page 2 of 4</h2>
                        </div>
                        <form onSubmit={handleUpdate}>
                            <p>How well are you understanding the content?</p>
                            <TextField style={{ width: "400px" }} label="Number" variant="outlined" placeholder={understanding} onChange={(event) => setNewUnderstanding(event.target.value)}></TextField>
                            <br />
                            <br />
                            <Button variant="contained" > Update </Button>
                        </form>
                    </Card>
                )}

        </div>
    )
}