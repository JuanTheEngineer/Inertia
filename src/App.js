import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Signup from './Signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PlanDetails from './PlanDetails';
import NotFound from './NotFound';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/plans/:id">
              <PlanDetails />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
