import Customer from '../../containers/Customer/Customer';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {useEffect, useState} from 'react';
import customerApi from '../../api/customerApi';
import {Navigate, useNavigate} from 'react-router-dom';
import './TableCustomer.css';

export default function TableCustomer({auth, customers, setCustomers}) {
    useEffect(() => {
        let response = null;

        async function fetchData() {
            response = await customerApi.getAll(localStorage.getItem('accessToken'));
        }

        fetchData().then(r => setCustomers(response.data.customers));
    }, [setCustomers]);


    const [name, setName] = useState('');
    let navigate = useNavigate();

    const handleAddCustomer = () => {
        navigate('/customers/new');
    }

    const handleSearch = async () => {
        const response = await customerApi.search(name);
        if (response.status === 200) {
            const data = response.data;
            setCustomers(data.customers);
        }
    }

    const handleKeyPress = async (e) => {
        if (e.key === 'Enter')
            await handleSearch();
    }
    if (auth.token == null)
        return <Navigate to="/login"/>
    return (
        <div className="tableData">
            <button className="btnAdd" onClick={handleAddCustomer}>Add customer</button>
            <div className="search">
                <input
                    className="inputSearch"
                    onKeyPress={handleKeyPress}
                    onChange={(e) => setName(e.target.value)}
                    type="name"
                    placeholder="Enter customer's name"/>
                <button className="btnSearch" onClick={handleSearch}>Search</button>
            </div>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Gender</TableCell>
                            <TableCell align="right">Birthday</TableCell>
                            <TableCell align="right">Job title</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {

                            customers?
                                customers.map((customer) => (
                                    <Customer customer={customer}/>
                                )):''
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}