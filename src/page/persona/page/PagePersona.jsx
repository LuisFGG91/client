/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid, Typography } from '@mui/material';
import Navbar from "../../../components/Navbar";
import axios from "axios";


const PagePersona = () => {

    const [listPersona, setListPersona] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPesonasList();
    }, []);

    const fetchPesonasList = async () => {
        try {
            const resultPersona = await axios.get("http://localhost:8110/api/persona/get")
            setListPersona(resultPersona);
        } catch (error) {
            console.log(error);
        }
    }

    const createPersona = async () => {
        navigate("/persona/create")
    }

return (
    <div>
        <Navbar pageTitle =" Listado de perseonas"/>
        <Container fixed style={{ marginTop: '20px', marginBottom: '20px' }}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid>
                    <Typography variant="h4">Listado de personas</Typography>
                </Grid>
            </Grid>
            <Grid item xs={2}>
                <Button variant="contained" color="primary" onClick={createPersona}>
                    <Typography variant="p">
                        Agregar Persona
                    </Typography>
                </Button>
            </Grid>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                First Name
                            </TableCell>
                            <TableCell>
                                Last Name
                            </TableCell>
                            <TableCell>
                                Email
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {listPersona.map((PagePersona, index =>
                            <TableRow key={index}>
                                <TableCell>
                                    {persona.firstName}
                                </TableCell>
                                <TableCell>
                                    {persona.lastName}
                                </TableCell>
                                <TableCell>
                                    {persona.email}
                                </TableCell>
                                <TableCell>
                                    <Button variant="outlined">
                                        Update
                                    </Button>
                                    <Button variant="outlined">
                                        Update
                                    </Button>
                                    <Button variant="outlined">
                                        Update
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    </div>
);
}

export default PagePersona;
