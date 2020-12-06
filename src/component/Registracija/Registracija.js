import React from "react";
 import '../Registracija/Registracija.css'
import DatePicker, { registerLocale } from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";
import RegState from "./Registracija_state"
import { FormControl, Input, InputLabel } from "@material-ui/core";


//DODAT MESSAGE ZA ERROR I SUCCESS
//DODAT LINK ZA LOGIN AKO SI VEC REGISTROVAN
//DODAT MATERIAL UI
//URADIT CSS
//HASHIRAT PASSWORD (OVDJE ILI NA MODELIMA)
//zabraniti korisniku da dva puta pritisne login
  

export default function Registracija(props){
  
  const{handleChange,user,handleSubmit,loading}=RegState();
  
  const[disabled,setDisabled]=React.useState(true);
  const [startDate, setStartDate] = React.useState(user.BirthDate);
    
  


        React.useEffect(()=>{
          //za objekat tipa User provjerava da li su atributi svi popunjeni 
          //ne->setDisabled(true) tj onemoguci button
            const isUser=Object.values(user).every(el=>Boolean(el));
            isUser?setDisabled(false):setDisabled(true);
        },[user])

 return(
        <div>

          <h2>Naslovetina neka nesto jebes ga</h2>
          <form onSubmit={handleSubmit}>
          

           <FormControl>
          <InputLabel htmlFor="firstname">FirstName</InputLabel>
           
          <Input 
           id="firstname"
            type="text"
             placeholder="Firstname"
              required 
              name="FirstName" 
              value={user.FirstName}
              onChange={handleChange}
              id="firstname" />

            
            
</FormControl>
<br/>
<FormControl>
          <InputLabel htmlFor="lastname">LastName</InputLabel>
            
           <Input 
          id="lastname"
          type="text"
          placeholder="Lastname" 
          required 
          name="LastName"
           value={user.LastName}
           onChange={handleChange}
          />

           
          </FormControl>
          <br/>
          <FormControl>
           <InputLabel htmlFor="username">UserName</InputLabel>
          
          

            <Input 
            id="username"
            type="text"
             placeholder="Username"
             required
              name="userName"
               value={user.userName}
              onChange={handleChange}
               
               />
            </FormControl>
            <br/>
            <FormControl>

          <InputLabel htmlFor="password">Password</InputLabel>
            
            
           
            <Input 
            type="password"
            
            placeholder="password"
             required 
             name="password" 
             value={user.password}
             onChange={handleChange}
             
             />
           </FormControl>
           <br/>
           <FormControl>
           <InputLabel htmlFor="phonenumber">Phonenumber</InputLabel>
          
            

            <Input 
            id="phonenumber"
            type="text" 
            placeholder="Phonenumber"
             required
              name="PhoneNumber"
               value={user.PhoneNumber}
              onChange={handleChange}
               
               />
           </FormControl>
           <br/>
           <FormControl>
             
             <label>BirthDate</label>
           
            <DatePicker 
           
            selected={startDate} 
              onChange={date=>setStartDate(date)}
              
              
          
            
             />

            </FormControl>
            <br/>
            


          <input type="submit" className="frm-button" disabled={loading || disabled}  ></input>
          </form>
          </div>
  )
}