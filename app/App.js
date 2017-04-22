// import React from 'react';
// import styles from './App.css';


import React from 'react';
import {render} from 'react-dom';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';

import {Root} from "./components/Root";
import {Home} from "./components/Home";

import Form1 from './components/Form1';

// require('react-html5video/dist/ReactHtml5Video.css');
// require('react-html5video/dist/ReactHtml5Video.js');


export default class App extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
        <Router history={browserHistory}>
          <Route path={"/"} component={Root}>
            <IndexRoute component={Home}/>
            <Route path={"form"} component={Form1}/>
          </Route>
        </Router>
    );
  }
}
