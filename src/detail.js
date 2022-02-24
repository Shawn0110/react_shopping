import React, { useState, useEffect, useContext } from 'react';
import { Navbar, Container, Nav, NavDropdown, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import './detail.scss';
import {재고context} from './App.js';
import { CSSTransition } from "react-transition-group";
import { connect } from 'react-redux';


let box = styled.div`
padding : 20px;
padding-top : 30px;
`;

let 제목 = styled.h4`
font-size : 25px;
color : ${ props => props.색상 }
`;

function Detail(props){

  let [alert, alert변경] = useState(true);
  let [inputData, inputData변경] = useState('');
  let [스위치, 스위치변경] = useState('false');
  
  let[탭, 탭변경] = useState(0);

   // 재고 Context 범위 내에 있기 때문에 useContext로 받아와서 사용
  let 재고 = useContext(재고context); 
    
  useEffect(()=>{ let 타이머 = setTimeout(()=>{ alert변경(false) }, 2000);
  console.log('안녕');
  return ()=>{ clearTimeout(타이머)}

  },[]);


  let { id } = useParams();
   // params를 통해서 사용자가 detail/2라고 적었다면 2를 id 값으로 받아와서 데이터 바인딩 할수 있게끔 사용해주는 변수
    // detail/2 접속시 => props.shies[id].price 
    // 하드코딩을 통한 데이터 바인딩이 아니라 유동적으로 user가 입력한 값을 받아와서 사용이 가능하다. 
    // {id, id2} 를 통해서 사용자가 입력한 값을 가져 올 수 있다. 

  
  let history = useHistory();
  
  // 방문 기록을 저장해 놓는 Object, goBack()을 통해서 뒤로가기 버튼 개발

    // 가격 정렬 이후에 영구적인 id와 user가 URL창에 입력한 id와의 비교를 통해 같은 페이지를 detail 페이지에 전송
   
  
  let 찾은상품 = props.shoes.find(x => x.id == id)
  
  return (
    <div className="container">
    <box>
      <제목 className='red'> Product Details</제목>
       </box>
         {
        alert === true ?(
          <div className="my-alert">
           <p>Only few left!</p>
          </div>)
          : null
      }

      <div className="row">
        <div className="col-md-6"> 
        <img src={require('./shoes'+ (찾은상품.id + 1) +'.jpg')} width="100%" />
     
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>Price: {찾은상품.price}</p>

          <Info 재고={props.재고}></Info>


          <button className="btn btn-danger" onClick={()=>{
             props.재고변경([9,11,12]);
             props.dispatch({type: '항목추가', 데이터 : {id:찾은상품.id, name:찾은상품.title, quan : 1}});
             history.push('/cart'); 
             }}>Buy Now</button>
             &nbsp; 
          <button className="btn btn-danger" onClick={()=>{history.push('/')}}>Go Back</button> 
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0" >
  <Nav.Item>
    <Nav.Link eventKey="link-0" onClick={()=>{ 스위치변경(false); 탭변경(0)}}>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
   <Nav.Link eventKey="link-1" onClick={()=>{ 스위치변경(false); 탭변경(1)}}>Option 2</Nav.Link>
  </Nav.Item>   
 </Nav>
      <CSSTransition in={스위치} classNames="wow" timeout={500}>
      <TabContent 탭={탭} 스위치변경={스위치변경} /> 
      </CSSTransition>
  </div>  
  )
}

function TabContent(props){
  
  useEffect(()=>{
    props.스위치변경(true);
  });

  if (props.탭 === 0) {
     return <div>1st Page.</div>
  } else if (props.탭 === 1){
    return <div>2nd Page. </div>
  } else if (props.탭 === 2){
    return <div>3rd Page. </div>
  }
}


function Info(props){
  return (
    <p>Quantity : {props.재고[0]}</p>
  )
}
  
function state를props화(state){
  console.log(state); 
  return {
      state : state.reducer,
      alert열렸니 : state.reducer2
  }
}

export default connect(state를props화)(Detail)
 