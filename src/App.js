import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import About from './containers/About'

import './App.css';
import MyProvider from './Context/Context';
import Footer from './components/Footer/Footer';


function App() {

  
  return (
    <MyProvider>
      <div className="container-fluid">
        <BrowserRouter>
          <Switch>
            <Route  path="/about" component={About} />
            <Route  path="/"  component={Homepage} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </MyProvider>
  );
}

export default App;
