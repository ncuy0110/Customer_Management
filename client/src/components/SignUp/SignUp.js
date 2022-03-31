import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import '../Login/Login.css';
import authApi from '../../api/authApi';
import {Navigate} from 'react-router-dom';

export default function SignUp({auth, loginSuccess}) {
    const [warningText, setWarningText] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSignUp = async () => {
        if(username.length<8) {
            setWarningText('username is required with minimum 8 characters!');
            return;
        }
        if(password.length<8) {
            setWarningText('password is required with minimum 8 characters!');
            return;
        }
        setWarningText('');

        const response = await authApi.register({username, password, phone, address, name});
        if(response.status === 200) {
            const data = response.data;
            loginSuccess({token: data.accessToken, username: data.username});
        }else{
            setWarningText('Register failed!');
        }
    }

    if(auth.token != null)
        return <Navigate to="/"/>

    return (
        <div className="loginForm">
            <label><b>Username</b></label>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Your username"/> <br/>

            <label><b>Password</b></label>
            <input type="password" onChange={e => setPassword(e.target.value)} placeholder="Your password"/> <br/>

            <label><b>Name</b></label>
            <input type="text" onChange={e => setName(e.target.value)} placeholder="Your name"/> <br/>

            <label><b>Address</b></label>
            <input type="text" onChange={e => setAddress(e.target.value)} placeholder="Your address"/> <br/>

            <label><b>Phone</b></label>
            <input type="text" onChange={e => setPhone(e.target.value)} placeholder="Your phone number"/> <br/>
            <b>{warningText}</b><br/>

            <button onClick={handleSignUp}>Sign Up</button>
            <br/>
            <Link to="/login">Login your account!</Link>
        </div>
    );
}