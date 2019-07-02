import React from 'react'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'
import { Form, Col,Button, Card, } from 'react-bootstrap'


class UserLogin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '', 
            notice: '',
            redirect: false,
            validated: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
  
    
    handleSubmit(e) {
        e.preventDefault()
        const formData = {
            email: this.state.email,
            password: this.state.password
        }
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        this.setState({ validated: true });

       // console.log(this.state.validated)
        if(this.state.validated === true){
            axios.post('/users/login', formData)
            .then(response => {
                axios.defaults.headers['x-auth'] = response.data.token
                localStorage.setItem('token', response.data.token)
                this.props.handleIsAuthenticated(true)
                this.setState(() => ({ redirect: true }))
                // this.props.history.push('/contacts')
            })
            .catch(err => {
            // console.log('error',err)
                this.setState(() => ({
                    notice: err.response.data.notice 
                }))
            })
        }
    }

    handleChange(e) {
        e.persist()
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    render() {
        const { validated } = this.state;
        //console.log(this.props)
        if(this.state.redirect) {
            return <Redirect to="/home" />
        }
        return (
            <div style={{padding:'140px'}}><center>
                <Card style={{padding:'40px'}}>
              
                    <center>
                        <h1>Welcome back.</h1>
                        <p></p>
                        <h2>Login</h2>
                        { this.state.notice && <p> { this.state.notice } </p> }
                        <Form as={Col} md="6" noValidate 
                        validated={validated}>
                        <Form.Group as={Col} md="8" controlId="formBasicEmail">
                                {/* <Form.Label> Email </Form.Label> */}
                                <Form.Control type="text" value={this.state.email} onChange={this.handleChange} name="email" placeholder="Your email" required />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Email
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group as={Col} md="8" controlId="formBasicPassword">
                                {/* <Form.Label>Password</Form.Label> */}
                                <Form.Control type="password" value={this.state.password} onChange={this.handleChange} name="password" placeholder="Password" required />
                                <Form.Control.Feedback type="invalid">
                                    Please Enter Password
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                                Continue
                            </Button>
                        
                        </Form>
                        <br></br>
                    <p>No Account ? <Link to="/register">Create one</Link></p>
                    <p></p>
                    </center>
                    </Card>
                    </center>
                
           
                
               
                        {/* <form onSubmit={this.handleSubmit}>
                            <label>
                                email
                                <input type="text" value={this.state.email} onChange={this.handleChange} name="email" />
                            </label> <br />

                            <label>
                                password
                                <input type="password" value={this.state.password} onChange={this.handleChange} name="password" />
                            </label> <br />

                            <input type="submit" />
                        </form> */}
               
            </div>
        )
    }
}

export default UserLogin

