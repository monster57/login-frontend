import React from 'react';
import Axios from 'axios';
import styles from '../styles/App.css';
import { browserHistory , Router} from 'react-router';
export default class Form1 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {name: '' , email:'', password:'', confirm_password:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    setValue(field, event) {
        var object = {};
        object[field] = event.target.value;
        this.setState(object);
    }
    

    login(){
        browserHistory.push('/');
    }

    handleSubmit(e) {
        e.preventDefault();
        var body = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            confirm_password:this.state.confirm_password
        }
        Axios.post('http://localhost:1339/signup' , body)
          .then(function (response) {
            Router.transitionTo('/')
          })
          .catch(function (err) {
            console.log(err);
          });
        console.log(this.state);
  }


  

    render() {
        return ( 
            <form onSubmit={this.handleSubmit}>
                <div class="form-group">
                    <label for="name">Full Name:</label>
                    <input type="text" value={this.state.name} onChange={this.setValue.bind(this, 'name')} />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input type="email" value={this.state.email} onChange={this.setValue.bind(this,'email')} />
                </div>
                <div class="form-group">
                    <label for="password">Password:</label>
                    <input type="password" value={this.state.password} onChange={this.setValue.bind(this, 'password')} />
                </div>
                <div class="form-group">
                    <label for="confirm_password">Confirm Password:</label>
                    <input type="password" value={this.state.confirm_password} onChange={this.setValue.bind(this, 'confirm_password')} />
                </div>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
