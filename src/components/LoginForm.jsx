import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'

const LoginForm = props => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [formSubmitted, setFromSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        setFromSubmitted(true)
    }
    return(
        <div>
            <form className = "container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name='firstName' className='form-control' value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name='lasstName' className='form-control' value={lastName} onChange={(e) => setlastName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name='email' className='form-control' value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name='password' className='form-control' value={password} onChange={(e) => setpassword(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name='confirmPassword' className='form-control' value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                </div>
                <input type="submit" value="Submit" className='btn btn-warning'/>
            </form>
            {
                formSubmitted ? 
            <div>
                <h1>Name: {lastName}, {firstName}</h1>
                <h2>Email: {email}</h2>
                <h2>Current Password: {password}</h2>
            </div> : ''
            }
    
        </div>
    );
}

export default LoginForm;