import React, { Component } from 'react';
import UserService from '../service/UserService.js';

class Login extends Component {
    constructor(){
        super();
        this.state = {
            name : "",
            password : "",
            hasLoginFailed : false,
            showSuccessMsg : false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
        this.register = this.register.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    register(){
        this.props.history.push('/register');
    }

    loginClicked(event){
        event.preventDefault();
        console.log(this.state);
        const usr = UserService.getUser(this.state.name);
        if(this.state.name===usr.name && this.state.password===usr.password){
            this.props.history.push(`/welcome/${this.state.name}`)
            console.log(this.props.history)
            // console.log(this.state.username)
            sessionStorage.setItem("User",this.state.name);
            // this.setState({
            //     showSuccessMsg : true,
            //     hasLoginFailed : false})
        }else{
            this.setState({
                showSuccessMsg : false,
                hasLoginFailed : true})
        }
    }

    render() { 
        return ( 
            <div> 
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccessMsg && <div>Login Success</div>}
                <div className='container float-left'>
                    <form onSubmit={this.loginClicked}>
                    <div className="form-group">
                        User Name :
                        <input type="text" className="form-control" id="name" name='name' placeholder="Enter Username" onChange={this.handleChange} required/>  
                    </div>
                    <div className="form-group">
                        Password
                        <input type="password" className="form-control" id="password" name='password' placeholder="Password" minLength="6" onChange={this.handleChange} required/>
                    </div>
                    <button type="submit" className="btn btn-success m-2">Login</button>
                    <button className="btn btn-primary m-2" onClick={this.register}>Register</button>
                </form>
                </div>
            </div>
         );
    }
}

export default Login;