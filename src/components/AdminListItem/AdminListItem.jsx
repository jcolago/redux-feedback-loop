//Imports from react, redux, and MUI
import React from "react";
import axios from "axios";
import { TableRow, TableCell, Button } from "@mui/material";
// import Swal from 'sweetalert2';
//Function for AdminListItem, accepts props for list items
export default function AdminListItem({ feedback, adminFetch }) {

    //Dispatch for delete route, runs on click of delete button
    const handleDelete = () => {
        axios
            .delete(`/feedback/${feedback.id}`)
            .then((respose) => {
                adminFetch();
            })
            .catch((error) => {
                console.log('Error in deleting feedback', error)
            });
    }
    //Put route that flags a feedback row for followup
    const handleFollowup = () => {
        axios
            .put(`/feedback/${feedback.id}`)
            .then((respose) => {
                adminFetch();
            })
            .catch((error) => {
                console.log('Error in updating feedback', error)
            });
    }
    //Components to conditionally render depending on if flagged is true or false in the database
    return (
        <>
            {feedback.flagged === false ? (
                <TableRow style={{ padding: "10px", border: "2px solid black" }}>
                    <TableCell>{feedback.feeling}</TableCell>
                    <TableCell>{feedback.understanding}</TableCell>
                    <TableCell>{feedback.support}</TableCell>
                    <TableCell>{feedback.comments}</TableCell>
                    <TableCell><Button variant="contained" onClick={() => handleFollowup(feedback.id)}>Followup</Button> <Button variant="contained" onClick={() => handleDelete(feedback.id)}>Delete</Button></TableCell>
                </TableRow>) : (<TableRow style={{ backgroundColor: "red", padding: "10px", border: "2px solid black" }}>
                    <TableCell style={{ color: "white" }}>{feedback.feeling}</TableCell>
                    <TableCell style={{ color: "white" }}>{feedback.understanding}</TableCell>
                    <TableCell style={{ color: "white" }}>{feedback.support}</TableCell>
                    <TableCell style={{ color: "white" }}>{feedback.comments}</TableCell>
                    <TableCell> <Button variant="contained" onClick={() => handleDelete(feedback.id)}>Delete</Button></TableCell>
                </TableRow>
            )}
        </>
    )

}