import {Link, Navigate, useNavigate, useParams} from 'react-router-dom';
import React, {useState} from 'react';
import './AddCustomer/AddCustomer.css';
import Select from 'react-select';
import customerApi from '../../api/customerApi';

let customer;

export default function EditCustomer({auth}) {

    const {id} = useParams();
    console.log(id);

    const [name, setName] = useState(customer.name);
    const [address, setAddress] = useState(customer.address);
    const [gender, setGender] = useState(customer.gender);
    const [birthday, setBirthday] = useState(customer.birthday);
    const [jobTitle, setJobTitle] = useState(customer.job_title);
    const [phone, setPhone] = useState(customer.phone);
    const [warningText, setWarningText] = useState('');
    const [selectedOption, setSelectedOption] = useState(1);

    const navigate = useNavigate();


    const options = [{value: 1, label: 'Male'}, {value: 0, label: 'Female'}]

    if (auth.token == null) return <Navigate to="/login"/>
    const handleEdit = async () => {
        setGender(selectedOption === 1 ? true : false);
        const response = await customerApi.update({
            token: auth.token,
            name,
            phone,
            birthday,
            gender,
            address,
            job_title: jobTitle
        })
        if(response.status === 200) navigate('/');
        else {
            setWarningText(response.error.replaceAll('_', ' '));
        }
    }

    const handleChange = (option) => {
        setSelectedOption(option);
    }

    return (<div className="addForm">
        <label><b>Name</b></label>
        <input type="text" onChange={e => setName(e.target.value)} placeholder="Your name"/> <br/>

        <label><b>Address</b></label>
        <input type="text" onChange={e => setAddress(e.target.value)} placeholder="Your address"/> <br/>

        <lable><b>Gender</b></lable>
        <Select
            options={options}
            defaultValue={{value: 1, label: 'Male'}}
            onChange={handleChange}/>
        <br/>

        <label><b>Birthday</b></label>
        <input type="text" onChange={e => setBirthday(e.target.value)} placeholder="Your birthday"/> <br/>

        <label><b>Phone</b></label>
        <input type="text" onChange={e => setPhone(e.target.value)} placeholder="Your phone number"/> <br/>

        <label><b>Job Title</b></label>
        <input type="text" onChange={e => setJobTitle(e.target.value)} placeholder="Your job title"/> <br/>
        <b>{warningText}</b><br/>

        <button onClick={handleEdit}>Edit</button>
        <br/>
        <Link to="/">Cancel!</Link>
    </div>);
}