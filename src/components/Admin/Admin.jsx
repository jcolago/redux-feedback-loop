//Imports from react, redux, and MUI
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableHead, TableRow, TableContainer, Paper, TableCell } from "@mui/material";
//Import AdminListItem for use and Admin.css
import AdminListItem from "../AdminListItem/AdminListItem"
import "./Admin.css"

export default function Admin({ adminFetch }) {
    //Uses admin reducer to map over the array and list the table items
    const adminList = useSelector((store) => store.adminReducer)
    //Loads feedback list on page load
    useEffect(() => {
        adminFetch()
    },
        []
    )
    //Elements used for the Admin page
    return (
        <TableContainer component={Paper} >
            <Table style={{ minWidth: "500px", padding: "10px", border: "2px solid black" }}>
                <TableHead style={{ padding: "10px", border: "2px solid black" }}>
                    <TableRow style={{ padding: "10px", border: "2px solid black" }} >
                        <TableCell>Feeling</TableCell>
                        <TableCell>Understanding</TableCell>
                        <TableCell>Support</TableCell>
                        <TableCell>Comments</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {adminList.map((feedback) => {
                        return (<AdminListItem key={feedback.id} feedback={feedback} adminFetch={adminFetch} />);
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}