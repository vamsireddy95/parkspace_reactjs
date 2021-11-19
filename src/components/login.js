import React from 'react';
import {Link} from 'react-router-dom';

const Login = ({ title }) => {
    return (
        <div>
            <h6 className="park_space">{title}</h6><br />
            <div>
                <input  type="text" name="email" className="email" placeholder="Email" />
                <input  type="password" name="password" className="password" placeholder="Password" />  
                <Link to="/dashboard"><button name="submit" className="submitt"> Login</button></Link>
                <p className="account">Don't have an account? <span className="sign_up">Sign Up</span></p>
                <p className="forgot_password">Forgot password</p>
            </div>
        </div>
    )
}

export default Login;