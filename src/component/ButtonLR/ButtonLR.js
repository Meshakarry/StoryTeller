import React from "react";
import './ButtonLR.css';
   

 

  export default function ButtonLR(props){
  

       
     return (

        <button onClick={props.click}className={'button '+ props.type + ' btn-block'}>{props.children}</button>

     )
  


  }