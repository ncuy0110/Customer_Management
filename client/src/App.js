import './App.css';
import Login from './containers/Login';
import TableCustomer from './containers/Customer/TableCustomer';
import {Routes, Route} from 'react-router-dom';
import SignUp from './containers/SignUp';
import {useEffect} from 'react';
import AddCustomer from './containers/Customer/AddCustomer';
import EditCustomer from './containers/Customer/EditCustomer';

export default function App({auth, loginSuccess}) {
    const handleLogout = () => {
        loginSuccess({token: null, username: ''});
    }
    useEffect(() => {
        loginSuccess({token: localStorage.getItem('accessToken'), username: localStorage.getItem('username')});
    }, [loginSuccess]);
    return (<div className="App">
            <div className="navbar">
                <ul>
                    <li>
                        <div>Customer management</div>
                    </li>
                    <li className="username">
                        {auth.username}
                        <button className="active" onClick={handleLogout}>{auth.username ? 'Log out' : 'Login'}</button>
                    </li>
                </ul>
            </div>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/" element={<TableCustomer/>}/>
                <Route path="/customers/new" element={<AddCustomer/>}/>
                <Route path="customers/edit/:id" element={<EditCustomer/>}/>
            </Routes>
        </div>);
}