import React from 'react';
import { browserHistory } from 'react-router';
import FacebookLogin from 'react-facebook-login';
import Axios from 'axios';

// import { default as Video, Controls, Play, Mute, Seek, Fullscreen, Time, Overlay } from 'react-html5video';

// require('react-html5video/dist/ReactHtml5Video.css');
// require('react-html5video/dist/ReactHtml5Video.js');
import styles from '../styles/App.css';


// require('../styles/ReactHtml5Video.css');
// require('../js/ReactHtml5Video.js');


// import '../styles/ReactHtml5Video.css';
// import '../js/ReactHtml5Video.js';

class LandingPage extends React.Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <h1>hello world</h1>
    );
  }
};


export class Home extends React.Component {
  constructor(){
    super();
  }

  profile(){
    browserHistory.push('/profile');
  }
  
  loginThroughFacebook(){
    Axios.get('http://localhost:1339/auth/facebook')
          .then(function (response) {
            console.log(response , "this is hahahah")

          })
          .catch(function (err) {
            console.log(err);
          });
  }
  register(){
    browserHistory.push('/form');
  }


  render(){
    return(
        <div className={styles.landinginfo}>

          <LandingPage />
              <button onClick={this.loginThroughFacebook} >Facebook Login</button>
              <button onClick={this.register} >register</button>

        </div>
    );
  }
}
