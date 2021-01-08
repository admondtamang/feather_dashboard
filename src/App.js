import "./App.css";
import { Login } from "./pages";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard";

import { persistor, store } from "./redux/store";
import Sidebar from "./components/Sidebar";
function App() {
    return (
        <Provider store={store}>
            <Router>
                <div className="App">
                    <Sidebar />
                    <Switch>
                        {/* <Route exact path="/" component={Login} /> */}
                        <Route exact path="/" component={Dashboard} />
                    </Switch>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
