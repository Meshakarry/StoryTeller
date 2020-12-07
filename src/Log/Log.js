import React, { Component } from 'react'
import axios from 'axios'
import './Log.css'
const Init_user = {

    userName: "",
    password: "",


}
class Log extends Component {
    state = Init_user;
    onChangeHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/users/login', this.state, { headers: { 'Content-Type': 'application/json' } })
        .then(res=>{
            
            console.log(res)
            this.props.history.push('/Nesto');        
        })
           
        .catch(err => console.log(err));

        
    }
    render() {
        var forma = Object.keys(Init_user).map((x, i) => {
         
                return (

                    <div key={i} className="form-group">

                        <label>
                            <p>{x}</p>
                            <input type={x==='password'?'password':'text'} className="form-control" placeholder={x} name={x} onChange={this.onChangeHandler} />
                            <div className='tekst'>ovo je neki tekst</div>
                        </label>
                    </div>
                )
            }
        )

        return (
            <div>
                <form onSubmit={this.onSubmitHandler} className='forma'>
                    {forma}
                    <input type="submit" value="Kraj" className="btn btn-primary" />
                </form>
            </div >
        )
    }
}

export default Log
