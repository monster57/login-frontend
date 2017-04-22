import React from 'react';
// This is style sheet link where we are importing css as a variable styles. If you want to access any class of that css file you have to write like below i have done styles.container
import styles from '../styles/App.css';
// require('react-html5video/dist/ReactHtml5Video.css');
// require('react-html5video/dist/ReactHtml5Video.js');

export class Root extends React.Component {
  render(){
    return(
      <div className={styles.container}>
        <div className={styles.background}>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
