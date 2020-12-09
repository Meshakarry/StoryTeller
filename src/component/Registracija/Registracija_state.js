import React from "react";
import axios from "axios";

const Init_user = {
  FirstName: "",
  LastName: "",
  userName: "",
  password: "",
  PhoneNumber: "",
  BirthDate: new Date(),

}
const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'JWT fefege...'
}
const RegState = (props) => {

  const [user, setUser] = React.useState(Init_user);
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState(
    {error:{

   }

})


  //da ima uvid u prethodno stanje da se ne bi desilo da se pogresne vrijednosti 
  //smjeste u bazu

  function handleChange(event) {

    const { name, value } = event.target;

    setUser(prevState => ({ ...prevState, [name]: value }));
  }
   async function handleSubmit(event) {
    event.preventDefault();
    
    try {
      setLoading(true);
      const url = "http://localhost:5000/users/add";
      const payload = { ...user };
     const response= await axios.post(url, payload, {
        headers: { 'Content-Type': 'application/json' }})
     props.history.push("/Log");
    }
    catch(err){
      setErrors({error: err.response.data});
      console.log(errors);
    }
   
    finally {
      setLoading(false);
    }

  }

  
  return { handleChange, user, handleSubmit ,loading,errors}
}

export default RegState