import {Link, useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import './AddCustomer/AddCustomer.css';
import Select from 'react-select';
import customerApi from '../../api/customerApi';

export default function EditCustomer({currentCustomer}) {
    const [name, setName] = useState(currentCustomer.name);
    const [address, setAddress] = useState(currentCustomer.address);
    const [birthday, setBirthday] = useState(currentCustomer.birthday);
    const [jobTitle, setJobTitle] = useState(currentCustomer.job_title);
    const [phone, setPhone] = useState(currentCustomer.phone);
    const [warningText, setWarningText] = useState('');
    const [selectedOption, setSelectedOption] = useState({
        value: currentCustomer.gender,
        label: currentCustomer.gender ? 'Male' : 'Female'
    });

    const navigate = useNavigate();


    const options = [{value: true, label: 'Male'}, {value: false, label: 'Female'}]

    const handleEdit = async () => {
        console.log(selectedOption);
        const response = await customerApi.update({
            id: currentCustomer.id,
            name,
            phone,
            birthday,
            gender: selectedOption.value,
            address,
            job_title: jobTitle
        })
        if (response.status === 200) {
            navigate('/');
        } else {
            setWarningText(response.error.replaceAll('_', ' '));
        }
    }

    const handleChange = (option) => {
        setSelectedOption(option);
    }

    return (<div className="addForm">
        <label><b>Name</b></label>
        <input type="text" defaultValue={currentCustomer.name} onChange={e => setName(e.target.value)}
               placeholder="Your name"/> <br/>

        <label><b>Address</b></label>
        <input type="text" defaultValue={currentCustomer.address} onChange={e => setAddress(e.target.value)}
               placeholder="Your address"/> <br/>

        <lable><b>Gender</b></lable>
        <Select
            options={options}
            defaultValue={{
                value: currentCustomer.gender, label: currentCustomer.gender ? 'Male' : 'Female'
            }}
            onChange={handleChange}/>
        <br/>

        <label><b>Birthday</b></label>
        <input type="text" defaultValue={currentCustomer.birthday} onChange={e => setBirthday(e.target.value)}
               placeholder="Your birthday"/> <br/>

        <label><b>Phone</b></label>
        <input type="text" defaultValue={currentCustomer.phone} onChange={e => setPhone(e.target.value)}
               placeholder="Your phone number"/> <br/>

        <label><b>Job Title</b></label>
        <input type="text" defaultValue={currentCustomer.job_title} onChange={e => setJobTitle(e.target.value)}
               placeholder="Your job title"/> <br/>
        <b>{warningText}</b><br/>

        <button onClick={handleEdit}>Edit</button>
        <br/>
        <Link to="/">Cancel!</Link>
    </div>);
}