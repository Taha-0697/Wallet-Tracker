import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Transaction from "./Pages/Transaction/Transaction";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/transaction/:transactionId" component={Transaction} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
