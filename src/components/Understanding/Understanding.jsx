import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";



export default function Understanding() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newUnderstanding, setNewUnderstanding] = useState(0);

    const handleClick = (event) => {
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

return (
    <div className="understanding_div">
        <div>
            <h2>Page 2 of 4</h2>
        </div>
        <form>
            <p>How well are you understanding the content?</p>
            <input placeholder="Enter a number between 1 and 5" onChange={(event) => setNewUnderstanding(event.target.value)}></input>
            <button onClick={handleClick}> Next</button>
        </form>
    </div>
)
}