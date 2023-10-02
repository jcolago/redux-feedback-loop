import React, {useEffect} from "react";
import axios from "axios";
import { TableRow, TableCell, Button } from "@mui/material";

export default function AdminListItem({ feedback, adminFetch }) {

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

    return(
        <>
        {feedback.flagged === false ? (
            <TableRow>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell><Button onClick={() =>handleFollowup(feedback.id)}>Followup</Button> <Button onClick={() =>handleDelete(feedback.id)}>Delete</Button></TableCell>
            </TableRow> ) : (<TableRow style={{backgroundColor: "red", color: "white"}}>
                <TableCell>{feedback.feeling}</TableCell>
                <TableCell>{feedback.understanding}</TableCell>
                <TableCell>{feedback.support}</TableCell>
                <TableCell>{feedback.comments}</TableCell>
                <TableCell> <Button onClick={() =>handleDelete(feedback.id)}>Delete</Button></TableCell>
            </TableRow>
        )}
        </>
    )
    
}