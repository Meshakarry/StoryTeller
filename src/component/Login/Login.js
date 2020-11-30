import React from "react";



export default function Login(){
    
    return (
          <form>
            <div className="form-group">
           <label>Username</label>
             <input type="text" placeholder="username" className='form-control'></input> 
             <small className="form-text text-muted" >We will keep your privacy</small>
             </div>
             <div className="form-group">
           <label>Password</label>
             <input type="text" placeholder="password" className='form-control'></input> 
            
             </div>

             
             
          </form>
    )



}