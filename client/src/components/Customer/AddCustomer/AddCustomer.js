import {Link, Navigate, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import './AddCustomer.css'
import Select from 'react-select';
import customerApi from '../../../api/customerApi';

export default function AddCustomer({auth}) {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [birthday, setBirthday] = useState();
    const [jobTitle, setJobTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [warningText, setWarningText] = useState('');
    const [selectedOption, setSelectedOption] = useState({
        value: true,
        label: 'Male'
    });

    const navigate = useNavigate();

    const options = [{value: true, label: 'Male'}, {value: false, label: 'Female'}]

    if (auth.token == null) return <Navigate to="/login"/>
    const handleAdd = async () => {
        const response = await customerApi.create({
            token: auth.token,
            name,
            phone,
            birthday,
            gender: selectedOption.value,
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
            defaultValue={{value: true, label: 'Male'}}
            onChange={handleChange}/>
        <br/>

        <label><b>Birthday</b></label>
        <input type="text" onChange={e => setBirthday(e.target.value)} placeholder="Your birthday"/> <br/>

        <label><b>Phone</b></label>
        <input type="text" onChange={e => setPhone(e.target.value)} placeholder="Your phone number"/> <br/>

        <label><b>Job Title</b></label>
        <input type="text" onChange={e => setJobTitle(e.target.value)} placeholder="Your job title"/> <br/>
        <b>{warningText}</b><br/>

        <button onClick={handleAdd}>Add</button>
        <br/>
        <Link to="/">Cancel!</Link>
    </div>);
}