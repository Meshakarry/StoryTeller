import React, { Component } from 'react'
import axios from 'axios'
import './Regist.css'
const Init_user = {
    FirstName: "",
    LastName: "",
    userName: "",
    password: "",
    PhoneNumber: "",
    BirthDate: new Date(),

}
class Regist extends Component {
    state = Init_user;
    onChangeHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value })
    }
    onSubmitHandler = (event) => {
        
        event.preventDefault();
        axios.post('http://localhost:5000/users/add', JSON.stringify(this.state), { headers: { 'Content-Type': 'application/json' } })
        .then(res=>{
            
            console.log(res)
            this.props.history.push('/Nesto');        
        }).catch(err => console.log(err.message));

        
    }
    render() {
        var forma = Object.keys(Init_user).map((x, i) => {
            if (x !== 'BirthDate') {
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
        })

        return (
            <div>
                <form onSubmit={this.onSubmitHandler} className='forma'>

                    {forma}
                    <div className="form-group">
                        <label>
                            <p>BirthDate</p>
                            <input type='text' value="2015-03-25" name='BirthDate' className="form-control" onChange={this.onChangeHandler} />
                            <div className='tekst'></div>
                        </label>
                    </div>
                    <input type="submit" value="Kraj" className="btn btn-primary" />
                </form>
            </div >
        )
    }
}

export default Regist
