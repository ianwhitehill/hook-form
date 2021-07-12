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
    const NameValid = input => {
        if(input.length >= 2){
            return true
        }
        return false
    }
    const EmailValid = input => {
        if(input.length >= 5){
            return true
        }
        return false
    }
    const PasswordValid = input => {
        if(input.length >= 8){
            return true
        }
        return false
    }
    const ConfirmValid = (input, input2) => {
        if(input2 == input){
            return true
        }
        return false
    }
    return(
        <div>
            <form className = "container" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First Name: </label>
                    <input type="text" name='firstName' className='form-control' value={firstName} onChange={(e) => setfirstName(e.target.value)}/>
                    {NameValid(firstName) ? '' : <p className='text-danger'>Name requires 2 or characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last Name: </label>
                    <input type="text" name='lasstName' className='form-control' value={lastName} onChange={(e) => setlastName(e.target.value)}/>
                    {NameValid(lastName) ? '' : <p className='text-danger'>Name requires 2 or more characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="text" name='email' className='form-control' value={email} onChange={(e) => setemail(e.target.value)}/>
                    {EmailValid(email) ? '' : <p className='text-danger'>Email requires 5 or more characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="text" name='password' className='form-control' value={password} onChange={(e) => setpassword(e.target.value)}/>
                    {PasswordValid(password) ? '' : <p className='text-danger'>Password requires 8 or more characters</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name='confirmPassword' className='form-control' value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}/>
                    {ConfirmValid(confirmPassword, password) ? '' : <p className='text-danger'>Must match password</p>}
                </div>
                <input disabled={!ConfirmValid(confirmPassword, password) || !EmailValid(email) || !PasswordValid(password) || !NameValid(lastName) || !NameValid(firstName)} type="submit" value="Submit" className='btn btn-warning'/>
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