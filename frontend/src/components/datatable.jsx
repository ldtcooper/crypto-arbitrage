import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { useSelector } from 'react-redux';

import { selectCurrentData, selectInputVal } from '../reducers';

import { toTitleString } from '../utils'; 

function DataTable() {
    const currency = useSelector(selectInputVal('currency'));
    const data = useSelector(selectCurrentData());
    const headers = data.length === 0 ? [] : Object.keys(data[0]);
    
    return (
        data.length === 0 ? <Typography variant="h4" component="h2">Select a currency and exchanges</Typography> : (
            <TableContainer component={Paper} sx={{}}>
                <Typography variant="h4" component="h2">{currency}</Typography>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {
                                headers.map((header, idx) => (
                                    <TableCell key={`header${idx}`} align="left">
                                        {toTitleString(header)}
                                    </TableCell>
                                ))
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {
                                    Object.keys(row).map((k, i) => (
                                        <TableCell align="left" key={`row${i}`}>{row[k]}</TableCell>
                                    ))
                                }
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    );
}
export default DataTable;