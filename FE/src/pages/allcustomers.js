import React, { useState } from 'react';
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme,
    Center,
    Button,
} from '@chakra-ui/react';
import MainSection from '../components/MainSection';
import Footer from '../components/Footer';
import SessionService from '../Services/SessionService';
import { Redirect } from 'react-router-dom';
import { makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import API_Service from '../Services/API_Service';


function AllCustomers(props) {
    const [reqlist, setReqlist] = useState([]);
    const islogged = SessionService.isAuthenticated();
    console.log(islogged);

    if (!islogged) {
        return (
            <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
            />
        );
    }

    const load = () => {
        API_Service.getAllDataCustomerTable((res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                setReqlist(res.data.data)

            }

        });

    }
    console.log(reqlist);



    return (
        <>

            <div style={{ margin: `50px`, display: `flex`, flexDirection: `row`, justifyContent: `center` }}>
                <div className="e-card e-card-horizontal" style={{ width: `400px` }}>
                    <img src="" alt="Sample" style={{ height: `80px` }} />
                    <div className="e-card-stacked">
                        <div className="e-card-header">
                            <div className="e-card-header-caption">
                            </div>
                        </div>
                        <div className="e-card-content">
                        </div>
                    </div>
                </div>
            </div>
            <Button onClick={load}>LOAD</Button>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer ID</TableCell>
                            <TableCell align="right">Account No</TableCell>
                            <TableCell align="right">NIC</TableCell>
                            <TableCell align="right">Full Name</TableCell>
                            <TableCell align="right">City</TableCell>


                            <TableCell align="right">Postal Code</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Date of Birth</TableCell>
                            <TableCell align="right">Created Date</TableCell>
                            <TableCell align="right">Contact</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {reqlist.map((row) => (
                            <TableRow key={row.customer_id}>

                                <TableCell align="right">{row.customer_id}</TableCell>
                                <TableCell align="right">{row.account_no}</TableCell>
                                <TableCell align="right">{row.NIC}</TableCell>
                                <TableCell align="right">{row.full_name}</TableCell>

                                <TableCell align="right">{row.city}</TableCell>
                                <TableCell align="right">{row.postal_code}</TableCell>
                                <TableCell align="right">{row.gender}</TableCell>
                                <TableCell align="right">{row.email}</TableCell>
                                <TableCell align="right">{row.dob}</TableCell>
                                <TableCell align="right">{row.created_date}</TableCell>
                                <TableCell align="right">{row.contact_primary}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

export default AllCustomers;
