
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
import { useState } from 'react';






function Getpaid(props) {
    const [firstload, setFirstload] = useState(true);
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
        API_Service.getAllgetReceivedCheque(JSON.parse(SessionService.getdata()).user_id, (res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                setReqlist(res.data.data)
            }

        });

    }
    const getpaid = (id) => {
        API_Service.approve(id, JSON.parse(SessionService.getdata()).user_id, (res) => {
            load();
        });
    }
    const refund = (id) => {
        API_Service.reject(id, JSON.parse(SessionService.getdata()).user_id, (res) => {
            load();
        });
    }

    if (firstload) {
        load();
        setFirstload(false);
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

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="right">Cheque ID</TableCell>
                            <TableCell align="right">Sender ID</TableCell>
                            <TableCell align="right">Amount</TableCell>


                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Note</TableCell>
                            <TableCell align="right">Action</TableCell>

                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {reqlist.map((row) => {
                            if (row.status == "PENDING") {
                                return (
                                    <TableRow key={row.cheque_id}>

                                        <TableCell align="right">{row.cheque_id}</TableCell>
                                        <TableCell align="right">{row.sender_id}</TableCell>
                                        <TableCell align="right">{row.amount}</TableCell>

                                        <TableCell align="right">{row.date}</TableCell>
                                        <TableCell align="right">{row.note}</TableCell>
                                        {                                      
                                        
                                        
                                        (+new Date(row.date)<=+new Date())?<div>
                                            <TableCell align="right"><Button color="green" onClick={() => { getpaid(row.customer_id) }} >Get Paid</Button></TableCell>
                                            <TableCell align="right"><Button color="red" onClick={() => { refund(row.customer_id) }}>Refund</Button></TableCell>
                                        </div>:<div>
                                        <TableCell align="right"><Button disabled={true} color="green" onClick={() => { getpaid(row.customer_id) }} >Get Paid</Button></TableCell>
                                        <TableCell align="right"><Button disabled={true} color="red" onClick={() => { refund(row.customer_id) }}>Refund</Button></TableCell>
                                        </div>
                                        
                                        
                                        }
                                        



                                    </TableRow>);
                            }
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

export default Getpaid;
