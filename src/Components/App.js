import React, {Fragment} from 'react';
import Home from './Home/Home';
import Services from './Services/Services';
import ProofReading from './ProofReading/ProofReading';
import Podcast from './Podcast/Podcast';
import NavBar from './Layout/NavBar';
import FooterBar from './Layout/FooterBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Fragment>
  
    <Router>
     <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/services'>
          <Services />
        </Route>
        <Route exact path='/proofreading'>
          <ProofReading />
        </Route>
        <Route exact path='/Podcast'>
          <Podcast />
        </Route>
        </Switch>
        <FooterBar />
    </Router>
 </Fragment>
  
  );
}

export default App;