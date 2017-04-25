import React from 'react';
import Axios from 'axios';
import styles from '../styles/App.css';
import { browserHistory , Router} from 'react-router';
export default class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.prfile = this.props.profile
    }

    render() {
        return ( 
            <h1>You are logged in now</h1>
        )
    }
}
