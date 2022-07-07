import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/login' component={Login} />
      <Route exact path='/signup' component={SignUp} />
    </Switch>
  </BrowserRouter>
);

export default App;
