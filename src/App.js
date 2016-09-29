import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import {
        Button,
        ButtonGroup,
        Form,
        FormGroup,
        ControlLabel,
        FormControl,
        HelpBlock,
        Checkbox,
        Radio,
        Grid,
        Row,
        Col
        } from 'react-bootstrap';

class App extends Component {
  
  state = {
    name:"",
    color:"",
    movies:[],
    gender:"",
    description:"",
    genre:[]
  };
  
  onChange = (fieldName)=>{
    return(event)=> {
      var state = this.state;
      state[fieldName] = event.target.value;
      this.setState(state);
    }
  };
  
   checkboxChange = (fieldName)=>{
     return (event)=> {
       var targetArray = this.state[fieldName];
       if(targetArray.indexOf(event.target.value) >=0 )
       targetArray.splice(
         targetArray.indexOf(event.target.value),
         1
       );
       else
       targetArray.push(event.target.value);
       
       var state = this.state;
        state[fieldName] = targetArray;
        this.setState(state);
     }
   }
   
  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h2>Student Survey</h2>
        </div>
        <p className="jumbotron">
        <Grid>
        <Row>
        {/*...................................................................*/}
          <Col md={6}>
          <Form>
        <FormGroup>
          <ControlLabel>Your name please . . . .</ControlLabel>
          <FormControl type = "text" placeholder = "Enter your name here" value = {this.state.name} onChange = {this.onChange('name')}/>
          <HelpBlock>This is to identify you</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Choose your favorite color</ControlLabel>
          <FormControl componentClass = "select" 
                       placeholder = "Choose color here"
                       value = {this.state.color} onChange = {this.onChange('color')}>
            <option value = "Red">Red</option>
            <option value = "Green">Green</option>
            <option value = "Blue">Blue</option>
            <option value = "White">White</option>
            <option value = "Black">Black</option>
          </FormControl>
          <HelpBlock>Pick one (ex. Green)</HelpBlock>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Favorite Movies</ControlLabel>
            <Checkbox value = "Harry Potter" checked = {this.state.movies.indexOf('Harry Potter')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Harry Potter Series</Checkbox>
            <Checkbox value = "Game of Thrones" checked = {this.state.movies.indexOf('Game of Thrones')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Game Of Thrones</Checkbox>
            <Checkbox value = "Twilight Series" checked = {this.state.movies.indexOf('Twilight Series')>=0 ? true:false} onChange = {this.checkboxChange('movies')}>Twilight Series</Checkbox>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Gender</ControlLabel>
            <Radio name = "gender" value = "Male" onChange = {this.onChange('gender')}>Male</Radio>
            <Radio name = "gender" value = "Female" onChange = {this.onChange('gender')}>Female</Radio>
        </FormGroup>
        {/*
          <ButtonGroup>
            <Button bsStyle = "info">Info Button
            </Button>
          <Button bsStyle = "primary">Primary Button
          </Button>
          <Button bsStyle = "warning">Warning Button
          </Button>
          <Button bsStyle = "danger">Error Button
          </Button>
          </ButtonGroup>
        */}
          </Form>
          
          <FormGroup>
          <ControlLabel>Describe yourself</ControlLabel>
          <FormControl type = "text" value = {this.state.description} onChange = {this.onChange('description')}/>
          <HelpBlock>For them to know more about you.</HelpBlock>
        </FormGroup>
          
          <FormGroup>
          <ControlLabel>Favorite Movie Genre</ControlLabel>
            <Checkbox value = "Action" checked = {this.state.genre.indexOf('Action')>=0 ? true:false} onChange = {this.checkboxChange('genre')}>Action</Checkbox>
            <Checkbox value = "Slice of life" checked = {this.state.genre.indexOf('Slice of life')>=0 ? true:false} onChange = {this.checkboxChange('genre')}>Slice of life</Checkbox>
            <Checkbox value = "Mystery" checked = {this.state.genre.indexOf('Mystery')>=0 ? true:false} onChange = {this.checkboxChange('genre')}>Mystery</Checkbox>
            <Checkbox value = "Comedy" checked = {this.state.genre.indexOf('Comedy')>=0 ? true:false} onChange = {this.checkboxChange('genre')}>Comedy</Checkbox>
        </FormGroup>
          
          <FormGroup>
          <ControlLabel>Relationship Status</ControlLabel>
            <Radio name = "status" value = "In a relationship" onChange = {this.onChange('status')}>In a relationship</Radio>
            <Radio name = "status" value = "In a complicated relationship" onChange = {this.onChange('status')}>In a complicated relationship</Radio>
            <Radio name = "status" value = "Single" onChange = {this.onChange('status')}>Single</Radio>
        </FormGroup>
          
          </Col>
          {/*...................................................................*/}
          <Col md={6}>
          Your name is <strong>{this.state.name}</strong><br/><br/>
          Your favorite color is <strong>{this.state.color}</strong><br/><br/>
          Your favorite movies is/are <strong>{this.state.movies.map((item,i)=>{
            return <div>
              <span className = "label label-danger"><span className = "glyphicon glyphicon-tag"></span> {item}</span>
            </div>
          })
        }</strong><br/><br/>
          You are a <strong>{this.state.gender}</strong><br/><br/>
          Your description: <strong>{this.state.description}</strong><br/><br/>
          Your favorite movies genre is/are: <strong>{this.state.genre.map((item,i)=>{
            return <div>
              <span className = "label label-warning"><span className = "glyphicon glyphicon-tag"></span> {item}</span>
            </div>
          })
        }</strong><br/><br/>
        You are currently <strong>{this.state.status}</strong><br/><br/>
          </Col>
          {/*...................................................................*/}
        </Row>
        </Grid>
        
        </p>
      </div>
    );
  }
}

export default App;
