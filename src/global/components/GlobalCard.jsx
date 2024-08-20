import React from "react";
import { Card } from "@mui/material";

const GlobalCard = ({ title, children, minWidth = "500px", padding = "10px", ...props }) => {
    return (
        <Card style={{ minWidth, padding }} variant="outlined" {...props}>
            {title && (
                <div>
                    <h2>{title}</h2>
                </div>
            )}
            {children}
        </Card>
    );
};

export default GlobalCard;
