import React from 'react';
import './contact.css';


function Contact(){
    
      return (
  
        <div className="main_text1">
          <h1>Shawn Lim</h1>
          <div className="contents1">shawnlim0110@gmail.com</div>
          <div className="service">
            <div className="food_photo">
              <img src="./Altai-mountains.jpg" />
            </div>
            <div className="contents2">
              <h2>About</h2><br/>
              <h5>Education:</h5> Korean Cyber University 2018-2021.<br/> 
              -Bachelor of software engineering<br /><br/>
              <h5>Skills:</h5> 
              Lanbuages: HTMl, CSS, Javascript, React<br/>
              Database Tool: SQL <br/>
              Other Git/Github: <a href= "https://github.com/sl0110">https://github.com/sl0110 </a> <br/>
              Project:  HTML + CSS blog<a href= "https://sl0110.github.io/Blog/">(https://sl0110.github.io/Blog)</a>
            
            </div>
          </div>
        </div>
      );
    };

  export default Contact;