import React, { useState } from "react";
import {Form,Button} from "semantic-ui-react";
import './Login.css';


export default function Login(){
      
  
      function handleChange(){
        return console.log("");
      }

      function handleSubmit(){
        return console.log("");
      }
      
    return (
      <React.Fragment>
      <p>Ovdje ide slika neka nesto</p>
      <h3><i>Prijavite se na storyteller</i></h3>
      <div className="form">
      <Form className="forma">

    <Form.Field>
      <Form.Input  focus type="text" label="username" style={{}} />
    </Form.Field>
    <Form.Field>
    <Form.Input type="text" focus label="password" style={{}} />
    
    </Form.Field>
    
    <Button type='submit'>Submit</Button>
  </Form>
  </div>
          </React.Fragment>
    )



}