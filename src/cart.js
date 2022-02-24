import React from 'react';
import {Table} from 'react-bootstrap';
import { connect, useDispatch, useSelector } from 'react-redux';
import './detail.scss';

function Cart(props){

  let state = useSelector((state) => state.reducer)
  console.log(state.reducer)
  let dispatch = useDispatch();
    return (
      <div>
        <Table responsive>
          
          <tr>
            <th>#</th>
            <th>Product Title</th>
            <th>Quantity</th>
            <th>Change</th>
          </tr>
          <tbody>
          { props.state.map((a,i)=>{
            return (
            <tr key={i}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.quan}</td>
              
              <td><button onClick={()=>{ props.dispatch({type: '수량증가', 데이터 : i  }) }}> + </button>
              <button onClick={()=>{ props.dispatch({type: '수량감소',  데이터 : i }) }}> - </button>  
            </td>

           
            </tr>
            )
          })  }
        </tbody>
        </Table>


        { props.alert열렸니 ===true ?
          (<div className ="my-alert">
              <h3><p>Get 20% off now!</p></h3>
              <button onClick={()=>{ props.dispatch({type: 'alert닫기'})}}>X</button>
          </div>)
          : null
        }
      </div>
    )
  }


  function state를props화(state){
    console.log(state); 
    return {
        state : state.reducer,
        alert열렸니 : state.reducer2
   }
}

export default connect(state를props화)(Cart)


//export default Cart;