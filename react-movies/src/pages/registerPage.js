import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import Alert from '@mui/material/Alert';
import TextField from '@mui/material/TextField';

const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [, setSuccess] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState('');

    
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setError(null); 
        setSuccess(null);
        if (password !== confirmPassword){
            setError("The two passwords are different");
            return;
        }
        try {
            const response = await fetch('http://localhost:8080/api/users?action=register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess(data.msg);
                navigate('/login')
            }else {
                setError(data.msg);
            }
        } catch (err) {
            console.error('Error during login:', err);
            setError('Something went wrong. Please try again.');
        }
    };

    return (
        <div>
            <h2>Register</h2>
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
                <div>
                    <TextField
                        style={{margin:'10px'}}
                        label="ConfirmPassword"
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <Button style={{backgroundColor:'rgb(156,39,176)', color:"white", margin:'10px'}} type="submit">Register</Button>
                <Button style={{backgroundColor:'rgb(156,39,176)', color:"white", margin:'10px'}} href='/login'>Return to Login</Button>
            </form>
            {error && <Alert severity="error">{error}</Alert>}
        </div>
    );
};

export default Register;
