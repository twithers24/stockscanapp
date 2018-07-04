import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import DeleteBtn from "../../components/DeleteBtn";
// import SaveBtn from "../../components/saveBtn";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import logo from "./stocklogo.PNG";
import "./signup.css";


class Home extends Component{
    state = {
        userName: "",
        password: ""

    }
   
    handleInputChange = (event) =>{
        console.log("Input change");
        const {name,value} = event.target;
        this.setState({
          [name]:value
        })
        console.log(this.state);
    }  
    handleFormSubmit = event =>{
        event.preventDefault();
        const content ={
            userName: this.state.userName,
            password: this.state.password
        }
        API.signUpUser(content)
        .then(res => {if(res.data==="User Exists"){alert(res.data)}})
        .catch(err => console.log(err));
        
      };  
   

    render() {
        return (
    <Container fluid>
    <br/>
    <Row>
        <img src={logo} className="centerImage" />
    </Row>
    <Row>
        
            
        
        
        <Col size="md-12 sm 12">
          <h1 className="signForm">Sign Up:</h1>
        <form  className="signForm">
          <Input name="userName" placeholder="enter Username"onChange={this.handleInputChange} />
          <Input name="password" placeholder="Enter Password"onChange={this.handleInputChange}/>
          <FormBtn
          onClick={this.handleFormSubmit}
          >Submit</FormBtn>
        </form>
        <button  className="btn btn-success text-white loginBttn">
            <a className= "text-white" href ="/">
            Login
            </a>
      </button>
        </Col>
     < br/>
     </Row>
      </Container>
    )}
        ////////////////////////component end
}

export default Home;