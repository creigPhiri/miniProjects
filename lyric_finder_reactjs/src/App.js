import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Index from "./components/layouts/Index"
import Lyrics from "./components/Lyrics/Lyrics"

import {Provider} from "./Context"

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment >
          <Navbar />
            <div className="container" >
              <Switch>
                <Route exact path={"/"} component={Index} />
                <Route exact path={"/lyrics/track/:id"} component={Lyrics} />
              </Switch>
            </div>
        </React.Fragment>
      </Router>
      </Provider>
  );
}

export default App;
