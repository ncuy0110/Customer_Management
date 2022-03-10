import './css/App.css';

function App() {
  return (
    <div className="App">
        <div className="login-form">
            <h1>Welcome!</h1>
            <div>
                <label>Username</label>
                <input type="text" name="username"/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" name="password"/>
            </div>
            <button className="btn-login">Login</button>
        </div>
    </div>
  );
}

export default App;
