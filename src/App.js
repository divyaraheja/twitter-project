
import './App.css';


import './style.css';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';


import SideBar from "./pages/SideBar";
import Trends from "./Components/Trends";

import Login from "./pages/Login";
import Twittes from './Components/Twittes';
import Signup from './pages/Signup';
import Profile from "./pages/Profile";



function App ()  {
    return (
        <Router>
            <div className="twitter">
                <Route path="/" exact component={Login}>
                </Route>
                <Route path="/signup" component={Signup}>
                </Route>
                <Route path="/profile" component={Profile}>
                </Route>
           
                
            </div>
        </Router>
            
            
  );
}

function NavBar() {
    return <div >Hello</div>
}
export default App;
