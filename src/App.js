import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Sidebar from "./components/Sidebar";
function App() {
    return (
        <Router>
            <div className="App">
                <Sidebar />
                <Switch>
                    <Route exact path="/" component={Dashboard} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
