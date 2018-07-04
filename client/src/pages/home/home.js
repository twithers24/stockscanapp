import React, { Component } from "react";
import  { Redirect } from 'react-router-dom';
import { Link } from "react-router-dom";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import "./form.css";
//import ArticleList from "./articleList";
//import ArticleListItem from "./articleListItem";


class Home extends Component{
    state = {
        userName: "",
        password: "",
        trumpText: [],
        x:0

    }
   componentDidMount(){
     this.trumpInput();
   }
    handleInputChange = (event) =>{
        console.log("Input change");
        const {name,value} = event.target;
        this.setState({
          [name]:value
        })
        console.log(this.state);
    } 
    xIncr=()=>{
      if(this.state.x<=6){
      this.setState({x:this.state.x+1});
      console.log(this.state.x);
      }
    }
    trumpInput = ()=>{
      
    
      API.getTrump()
      .then (res =>{
        console.log("Trump");
        console.log(res.data);
        
        this.setState({trumpText:res.data}, function(){
          return;
        });
        console.log("Trump Tweets: %O",this.state.trumpText);
       
      })
    } 
    handleFormSubmit = event =>{
        event.preventDefault();
        const content ={
            userName: this.state.userName,
            password: this.state.password
        }
       // console.log(content);
        API.signInUser(content)
        .then(res => {
            console.log("User Info %O", res.data);
            sessionStorage.id=res.data._id;
            if(sessionStorage.id.length>5){
                console.log("Next page please");
                window.location.href = "/stocks/"+sessionStorage.id;
              
            }
        })
        .catch(err => console.log(err));
    
      };  
    render() {
        return (
    <Container fluid>
    <br/>      
    <Row>
        <div className="col-sm-3">
        
        
        </div>  
        <div className="col-md-6">  
        <Col size="md-12 sm 12">
          <h1>Login:</h1>
        <form className="form">
          <Input name="userName" className="form" placeholder="enter Username"onChange={this.handleInputChange} />
          <Input name="password" placeholder="Enter Password"onChange={this.handleInputChange}/>
          <FormBtn href="/stock"
          onClick={this.handleFormSubmit}
          >Submit</FormBtn>
        </form>
        {/* <button>
        <a href ="/signup">
        Sign UP!
        </a>
        </button> */}
        <button  className="btn btn-success text-white">
            <a className= "text-white" href ="/signup">
            Sign Up!
            </a>
      </button>
        </Col>
       </div>
       <div className="col-sm-3"></div> 
     < br/>
     </Row>
     <Row>
      <Col size="md-6 sm-12">
        
        </Col>
        </Row>
        {/* {this.state.stockRec.length ? (
          <List>
            {this.state.stockRec.map((stock, index) => (
              <ListItem index={index}  key={index}>

               
                  <strong>
                    {stock.stockSymbol.toUpperCase()}
                    <br /> 
                    <div name={stock.stockSymbol} > Price: {this.state.refreshPrice} </div>
                  </strong>
               
                <br />
                <SaveBtn id={index} onClick={this.savestock}>Save</SaveBtn>
                
              </ListItem>
            ))}
  
            
          </List>
        ) : (
          <h3>No Results to Display</h3>
        )} */}
      
      
      </Container>
    )}
        ////////////////////////component end
}

export default Home;