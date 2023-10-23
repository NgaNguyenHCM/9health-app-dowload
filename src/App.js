import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';
import DownloadApp from "./downloadApp";

function App() {
  return (
          <Switch>
              <Route exact path="/home" component={DownloadApp}/>
              <Route render={() => <Redirect to="/home" />} />
          </Switch>
  );
}

export default App;
