import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

export default function Review() {
    const history = useHistory();
    const dispatch = useDispatch();

    const feelings = useSelector((state) => state.feelingsReducer);
    const understanding = useSelector((state) => state.understandingReducer);
    const support = useSelector((state) => state.supportReducer);
    const comments = useSelector((state) => state.commentsReducer);

const handleClick = () =>{
    alert("Feedback has been submitted!");
    submitFeedback();
}

    const submitFeedback = () =>{
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
            dispatch({type: "CLEAR_FEELINGS"});
            dispatch({type: "CLEAR_UNDERSTANDING"});
            dispatch({type: "CLEAR_SUPPORT"});
            dispatch({type: "CLEAR_COMMENTS"});
        })
        .catch((error) =>{
            console.log('Error in submitting feedback', error);
        })
    }

    return (
        <div className="review">
            <div>
                <h2>Review Your Feedback</h2>
            </div>
            <h3>Feelings: {feelings}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <button onClick={handleClick}>Submit</button>
        </div>
    )
}