import React, { useState } from 'react'
import axios from 'axios'
import DatePicker from "react-datepicker";
import './Regist.css'
import "react-datepicker/dist/react-datepicker.css";
const useri =
    [{ name: 'First Name', type: 'text' },
    { name: 'Last Name', type: 'text' },
    { name: 'Username', type: 'text' },
    { name: 'Password', type: 'password' },
    { name: 'Phone Number', type: 'text' },
    { name: 'Birth Date', type: 'Date' }]
const Regist =(props)=> {
    const[user,setUser] =useState ({
       

            FirstName: "",
            LastName: "",
            userName: "",
            password: "",
            PhoneNumber: "",
            BirthDate: new Date()

        })
        const [error,setError]=useState({
            error:{
            FirstName: "",
            LastName: "",
            userName: "",
            password: "",
            PhoneNumber: "",
            BirthDate: ""
            }
        })
        const [datum,setDatum]=useState(new Date())
   const onChangeHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
       setUser(prevState=>({...prevState,[name]:value}))
    }


   const onSubmitHandler = (event) => {

        event.preventDefault();
        axios.post('http://localhost:5000/users/add',user, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {
                console.log(res)
                props.history.push('/Nesto');
            }).catch(err => {
           
            setError({error: err.response.data })
            });


    }
    
        var forma = Object.keys(user).map((x, i) => {
            {
                if(x!=='BirthDate'){
                return (
                    <div key={i} className="form-group">

                        <label>
                            <p>{useri[i].name}</p>
                            <input type={useri[i].type} className="form-control" placeholder={useri[i].name} name={x} onChange={onChangeHandler} />
                            <div className='tekst'>{error.error[x]}</div>
                        </label>
                    </div>
                )
            }
        }
        })
        return (
            <div>
                <form onSubmit={onSubmitHandler} className='forma'>

                    {forma}
                    <div>
                    <label>
                    <p>Birth Date</p>
                    <DatePicker selected={datum} onChange={date => setDatum(date)}/>
                    
                    </label>
                    </div>
                    <div>
                    <input type="submit" value="Submit"  className="btn btn-primary"  />
                    </div>
                </form>
            </div >
        )
    }


export default Regist
