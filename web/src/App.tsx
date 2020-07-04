import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Employer, Employee } from "./components";

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/employee" component={() => <Employee />} />
      <Route path="/employer" component={() => <Employer />} />
    </Switch>
  </Router>
);

export default App;
