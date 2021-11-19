import React from 'react';
import {Link} from 'react-router-dom'

const PaymentGateway = () => {
    return (
        <>
            <span className="park_space">Payment Gateway</span><br />
            <form>
                <input  type="text" name="email" className="cardNumber" placeholder="card number" />
                <input  type="date" className="password" placeholder="expiry" />
                <input type="number" className="email" placeholder="CVV" /> 
                <Link to="/payment_confirmed"><button name="submit" className="submitt"> Pay</button></Link>
            </form>
        </>
    )
}

export default PaymentGateway;