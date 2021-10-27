import Experience from "containers/client/Experience/Experience";
import Home from "containers/client/Home/Home";
import OnlineExperience from "containers/client/OnlineExperience/OnlineExperience";
import Place from "containers/client/Place/Place";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/place" component={Place} />
          <Route path="/experience" component={Experience} />
          <Route path="/onlineexperience" component={OnlineExperience} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
