import React, {useState, useContext} from 'react';
import './App.css';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import Data from './data.js';
import Detail from './detail.js';
import Contact from './contact.js';
import axios from 'axios';
import { useHistory, Link, Route, Switch } from 'react-router-dom';

import Cart from './cart.js';

export let 재고context = React.createContext();
//<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"/>//


function App() {

  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10,11,12]);



  return (
    <div className="App">
   <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand>Shoe Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to ="/">Home</Nav.Link>
        <Nav.Link as={Link} to ="/contact">Contact </Nav.Link>
       
      </Nav>
    </Navbar.Collapse>
  </Container>
  </Navbar>

  <Switch>
  <Route exact path="/">




  <div className="container mt-3">
  <div className="background">
    <h1>50% Season Off</h1> 
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a> 
  </div>
  </div>

  <div className="container">


  <재고context.Provider value={재고}>
    <div className="row">
    { 
    shoes.map((a,i)=>{
    return <Card shoes={shoes[i]} i={i} key={i}/>
     })
    } 
    </div>

    </재고context.Provider>
    <button className="btn btn-primary" onClick={()=>{

      
  axios.get('./data2.json')
  .then((result)=>{ console.log(result.data);
   shoes변경([...shoes, ...result.data ]); 
    })
  .catch(()=>{
    console.log('실패')
   })
    }}>More</button>
   </div> 
  </Route>
  <Route path="/detail/:id">
  <재고context.Provider value={재고}>

  <Detail shoes={shoes} 재고={재고} 재고변경={재고변경}/>
  </재고context.Provider>
  </Route>

  <Route path="/cart">
    <Cart></Cart>
  </Route>

  <Route path="/contact">
  <Contact></Contact>
  </Route> 

  

  </Switch>
  </div>
  );
}



function Card(props){

  let 재고 = useContext(재고context);
  let history = useHistory();
  return (
    
      <div className="col-md-4" onClick={()=>{history.push('/detail/' + props.i)}}>
        <img src={require('./shoes' + (props.i+1) + '.jpg')} alt='shoes' />
      <h4>{ props.shoes.title }</h4>
      <p>{ props.shoes.content } </p>
      <p>Price: { props.shoes.price }</p>
      <Test></Test>
      </div>
  )
}


function Test(){
  let 재고 = useContext(재고context);
  return <p>Quantity: {재고[0]}</p>
}


export default App;

