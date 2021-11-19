import logo from './logo.svg';
import './App.css';
import Login from './components/login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import AvailableParkingSpaces from './components/AvailableParkingSpaces';
import PaymentGateway from './components/PaymentGateway';
import Payment from './components/Payment';

function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/">
            <Login title="Park Space" />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/available">
            <AvailableParkingSpaces />
          </Route>
          <Route path="/payment_gateway">
            <PaymentGateway />
          </Route>
          <Route path="/payment_confirmed">
            <Payment />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
