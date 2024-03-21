
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { axios } from "axios";
import {
    AppBar,
    Container,
    Toolbar,
    Button,
    TextField,
    TextareaAutosize,
    Grid,
    Paper,
    Typography,
    Box,
} from "@mui/material";
import Navbar from "../../../components/Navbar";


const CreatePersona = () => {
    const [firstName, setFirstName ] = useState("");
    const [lastName, setLastName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");


    return(

        <div>
            <Navbar pageTitle="List de Actors" />
            <Container fixed style={{ marginTop: '20px', marginBottom: '20px' }}>

                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={10}>
                        <Typography variant="h4">Add Actors </Typography>
                    </Grid>
                </Grid>
                <Box display="flex" justifyContent="center" mt={4}>
                    <Paper elevation={3} style={{ padding: "20px", maxWidth: "600px" }}>
                        <Grid container spacing={3}>
                            {/* Primera Columna */}
                            <Grid item xs={12} md={6}>
                                <Typography variant="h6" align="center">
                                    Actor Details
                                </Typography>
                                <TextField
                                    label="Actor Title"
                                    fullWidth
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    style={{ marginBottom: "10px" }}
                                />
                                <TextField
                                    label="Actor Rating"
                                    fullWidth
                                    type="number"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    style={{ marginBottom: "10px" }}
                                />
                            </Grid>
                        </Grid>

                        <Box mt={2}>

                            <Button variant="contained" style={{ marginTop: "10px", marginRight: "10px" }}>
                                Add Actor
                            </Button>

                            <Button variant="contained" color="secondary" style={{ marginTop: "10px" }} >
                                Cancelar
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </div>
    );

}

export default CreatePersona


