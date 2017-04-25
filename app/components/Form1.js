import React from 'react';
import Axios from 'axios';
import styles from '../styles/App.css';
import {Home} from "./Home";
import { browserHistory , Router, Redirect} from 'react-router';
import history from './history'
export default class Form1 extends React.Component{
    constructor(props, context) {
        super(props);
        this.context = context;
        this.state = {name: '' , email:'', password:'', confirm_password:'', redirect:false};
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
        let self = this;
        e.preventDefault();
        var body = {
            name:this.state.name,
            email:this.state.email,
            password:this.state.password,
            confirm_password:this.state.confirm_password
        }
        Axios.post('http://localhost:1339/signup' , body)
          .then((response)=> {
                console.log(this.state ,"this is state")
                this.setState({ redirect: true });

          })
          .catch( (err)=> {
            console.log(err);
          });
  }


  

    render() {

          
         if (this.state.redirect) {
           return(<Home / >)
         }
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
