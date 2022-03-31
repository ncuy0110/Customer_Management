import React, {useState} from 'react';
import authApi from '../../api/authApi';
import {Link, Navigate} from 'react-router-dom';
import './Login.css';

export default function Login({auth, loginSuccess}) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    if(auth.token != null)
        return <Navigate to="/"/>

    const handleLogin = async (e) => {
        const response = await authApi.login({username, password});
        if (response.status === 200) {
            const data = response.data;
            loginSuccess({username: data.username, token: data.accessToken})
        }
    }

    const handleKeyPress = async (e) => {
        console.log(e.keyCode);
        if (e.key === 'Enter') {
            await handleLogin();
        }
    }

    return (
        <div className="loginForm">
            <label><b>Username</b></label>
            <input type="text" onChange={e => setUsername(e.target.value)} placeholder="Your username"/> <br/>
            <label><b>Password</b></label>
            <input
                type="password"
                onChange={e => setPassword(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Your password"/> <br/>
            <button
                onClick={handleLogin}
                type="submit">
                Login
            </button>
            <br/>
            <Link to="/signup">Create new account</Link>
        </div>
    );
}