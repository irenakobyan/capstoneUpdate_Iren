import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function GetCafe() {
    const classes = useStyles();

    const [cafes, setCafes] = useState([]);

    async function fetchCafesFromServer() {
        const result = await axios.get('http://localhost:8050/cafes');
        console.log(result);
        setCafes(result.data);
    }

    useEffect(() => {
        fetchCafesFromServer();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">User First Name</TableCell>
                        <TableCell align="right">User Last Name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {cafes.map((user) => (
                        <TableRow key={user._id}>
                            <TableCell component="th" scope="row">
                                {user.name}
                            </TableCell>
                            <TableCell align="right">{user.district}</TableCell>
                            <TableCell align="right">{user.street_name}</TableCell>
                            <TableCell align="right">{user.street_name}</TableCell>
                            <img src={user.selectedFile}></img>
                            
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
