import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from './Components/form';
import result from './Components/result';

function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" component={Form}></Route>
        <Route exact path="/result" component={result}></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
