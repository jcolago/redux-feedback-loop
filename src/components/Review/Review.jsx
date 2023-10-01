import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Review() {
    const feelings = useSelector((state) => state.feelingsReducer);
    const understanding = useSelector((state) => state.understandingReducer);
    const support = useSelector((state) => state.supportReducer);
    const comments = useSelector((state) => state.commentsReducer);

    return (
        <div className="review">
            <div>
                <h2>Review Your Feedback</h2>
            </div>
            <h3>Feelings: {feelings}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comments}</h3>
            <button>Submit</button>
        </div>
    )
}