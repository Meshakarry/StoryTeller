import React, { useState } from "react";
import {Form,Button} from "semantic-ui-react";
import './Login.css';


export default function Login(){
      
  
      function handleChange(){
        return console.log("kurcina");
      }
      
    return (
      <React.Fragment>
      <p>Ovdje ide slika neka nesto</p>
      <h3>Prijavite se na storyteller</h3>
      <div className="form">
      <Form className="forma">
        
        <Form.Field>
          <Form.Input className='input_user' fluid label="Username" placeholder="Username"  />
        </Form.Field>
        <Form.Field>
          <Form.Input fluid label="Password" placeholder="Password"
          
           />
        </Form.Field>

        <Form.Button attached='bottom'   
        style={{color:"white",
        backgroundColor:" rgb(128, 0, 255)"}} 
        className="frm-button"
          
           > Prijava</Form.Button>
      

      </Form>
     
          </div>
          </React.Fragment>
    )



}