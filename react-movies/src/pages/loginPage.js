import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);


    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null); 
        setSuccess(null);

        try {
            const response = await fetch('http://localhost:8080/api/users?action=login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.msg);
                localStorage.setItem('token', data.token); 
                localStorage.setItem('username', username);
                
                
                navigate('/home')
            } else {
                setError(data.msg);
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <TextField
                        style={{margin:'10px'}}
                        label="Username"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div>
                    <TextField
                        style={{margin:'10px'}}
                        label="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <Button style={{backgroundColor:'rgb(156,39,176)', color:"white", margin:'10px'}} type="submit">Login</Button>
                <Button style={{backgroundColor:'rgb(156,39,176)', color:"white", margin:'10px'}} href='/register'>Register</Button>
            </form>
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default Login;
