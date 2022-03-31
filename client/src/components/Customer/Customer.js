import {TableCell, TableRow} from '@mui/material';
import customerApi from '../../api/customerApi';
import './Customer.css';
import {useNavigate} from 'react-router-dom';

export default function Customer({customer, customers, setCustomers}) {
    const handleDelete = async () => {
        const response = await customerApi.delete(customer.id, localStorage.getItem('accessToken'));
        customers = customers.filter(function (item) {
            return item.id !== customer.id;
        });
        if (response.status === 200)
            setCustomers(customers);
    }

    let navigate = useNavigate();

    const handleEdit = () => {
        navigate('/customers/edit/', {
            params: {
                id: customer.id
            }
        });
    }

    return <TableRow
        key={customer.id}
        sx={{'&:last-child td, &:last-child th': {border: 0}}}
    >
        <TableCell component="th" scope="row"> {customer.name} </TableCell>
        <TableCell align="right">{customer.address}</TableCell>
        <TableCell align="right">{customer.gender ? 'Male' : 'Female'}</TableCell>
        <TableCell align="right">{customer.birthday}</TableCell>
        <TableCell align="right">{customer.job_title}</TableCell>
        <TableCell align="right">{customer.phone}</TableCell>
        <TableCell align="right">
            <button className="btnEdit" onClick={handleEdit}>Edit</button>
            <button className="btnEdit" onClick={handleDelete}>Delete</button>
        </TableCell>
    </TableRow>
}