import React from 'react';
import { AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    
    
    
    return (
    <AppBar position="static" sx={{ backgroundColor: "#006b81" }}>
        <Container>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: "whitesmoke" }}>
                    Luis
                </Typography>
                <div className="buttonHeader">
                    <Button color="inherit" >
                        Logout
                    </Button>
                </div>
            </Toolbar>
        </Container>
    </AppBar>
    )
}
export default Navbar