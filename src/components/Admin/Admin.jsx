import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import {Table, TableBody, TableHead, TableRow, TableContainer, Paper, TableCell } from "@mui/material";
import AdminListItem from "../AdminListItem/AdminListItem"

export default function Admin({ adminFetch }) {
    
    const adminList = useSelector((store) => store.adminReducer)

    useEffect(() => {
        adminFetch()},
        []
    )

    return(
<TableContainer component={Paper}>
    <Table>
        <TableHead>
            <TableRow>
                <TableCell>Feeling</TableCell>
                <TableCell>Understanding</TableCell>
                <TableCell>Support</TableCell>
                <TableCell>Comments</TableCell>
                <TableCell>Actions</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {adminList.map((feedback) => {
                return ( <AdminListItem key={feedback.id} feedback={feedback} adminFetch={adminFetch} /> );
            })}
        </TableBody>
    </Table>
</TableContainer>
    )
}