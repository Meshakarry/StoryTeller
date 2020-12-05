import axios from "axios";
import React from "react";
import '../Registracija/Registracija.css'
import DatePicker, { registerLocale } from "react-datepicker";
 
import "react-datepicker/dist/react-datepicker.css";

//DODAT MESSAGE ZA ERROR I SUCCESS
//DODAT LINK ZA LOGIN AKO SI VEC REGISTROVAN
//DODAT MATERIAL UI
//URADIT CSS
//HASHIRAT PASSWORD (OVDJE ILI NA MODELIMA)
//zabraniti korisniku da dva puta pritisne login

const Init_user={
  FirstName:"",
  LastName:"",
  userName:"",
  password:"",
  PhoneNumber:"",
  BirthDate:new Date(),

}
export default function Registracija(props){
  
  
  const[user,setUser]=React.useState(Init_user);
  const[disabled,setDisabled]=React.useState(true);
  const[loading,setLoading]=React.useState(false);
  const [startDate, setStartDate] = React.useState(user.BirthDate);
    
  function handleChange(event){
  
    const{name,value}=event.target;
      
    //da ima uvid u prethodno stanje da se ne bi desilo da se pogresne vrijednosti 
    //smjeste u bazu
    setUser(prevState=>({...prevState,[name]:value}));
      }

  async function handleSubmit(event){
         event.preventDefault();
       try{
          setLoading(true);
          const url="http://localhost:5000/users/add";
          const payload={...user};
            const response=await axios.post(url,payload);
            console.log(response.data);
       }
       catch(err){
         console.error("error in adding new user "+ err);
       }
       finally{
        setLoading(false);
       }
         
  }

        React.useEffect(()=>{
          //za objekat tipa User provjerava da li su atributi svi popunjeni 
          //ne->setDisabled(true) tj onemoguci button
            const isUser=Object.values(user).every(el=>Boolean(el));
            isUser?setDisabled(false):setDisabled(true);
        },[user])

 return(
        <div>
          <form onSubmit={handleSubmit}  >
            <label>Firstname</label>
            <br/>

            <input type="text"
             placeholder="Firstname"
              required 
              name="FirstName" 
              value={user.FirstName}
              onChange={handleChange}
              />
            <br/>

            <label>Lastname</label>
            <br/>

            <input type="text"
             placeholder="Lastname" 
             required 
             name="LastName"
              value={user.LastName}
              onChange={handleChange}
              
              />
            <br/>
            <label>Username</label>
            <br/>

            <input type="text"
             placeholder="Username"
             required
              name="userName"
               value={user.userName}
              onChange={handleChange}
               
               />
            <br/>

            <label>Password</label>
            <br/>

            <input type="password"
            
            placeholder="password"
             required 
             name="password" 
             value={user.password}
             onChange={handleChange}
             
             />
            <br/>

            <label>Phonenumber</label>
            <br/>

            <input type="text" 
            placeholder="Phonenumber"
             required
              name="PhoneNumber"
               value={user.PhoneNumber}
              onChange={handleChange}
               
               />
            <br/>
            <label>BirthDate</label>
            <br/>

            <DatePicker selected={startDate} 
              onChange={date=>setStartDate(date)}
              
              
          
            
             />

            <br/>
            

          <input type="submit" disabled={loading || disabled} ></input>
          </form> 
          </div>
  )
}