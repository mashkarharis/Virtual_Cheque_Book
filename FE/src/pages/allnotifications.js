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


function AllNotifications(props) {
    const [reqlist, setReqlist] = useState([]);
    const [toloaded , setToloaded] = useState(true);
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
        API_Service.getAllNotificationByID(JSON.parse(SessionService.getdata()).user_id,(res) => {
            if (res === 'ERROR') {
                console.log('-----')
            } else {
                console.log(res);
                setReqlist(res.data.data)

            }

        });

    }
    if(toloaded){
        load();
        setToloaded(false);
        
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
                            <TableCell>Notification ID</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Title</TableCell>
                            <TableCell align="right">Message</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {reqlist.map((row) => (
                            <TableRow key={row.notification_id}>

                                <TableCell align="right">{row.notification_id}</TableCell>
                                <TableCell align="right">{row.date}</TableCell>
                                <TableCell align="right">{row.title}</TableCell>
                                <TableCell align="right">{row.message}</TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}

export default AllNotifications;
