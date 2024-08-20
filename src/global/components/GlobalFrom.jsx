// GlobalForm.js
import React from "react";
import { Button } from "@mui/material";

const GlobalForm = ({ onSubmit, buttonText = "Submit", children }) => {
    return (
        <form onSubmit={onSubmit}>
            {children}
            <br />
            <Button variant="contained" type="submit">
                {buttonText}
            </Button>
        </form>
    );
};

export default GlobalForm;