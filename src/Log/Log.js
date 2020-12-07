import React, { Component } from 'react'
import axios from 'axios'
import './Log.css'

const niz=['Username','Password']
class Log extends Component {
    state = {
        user: {

            userName: "",
            password: "",


        },
        eror: {

            userName: "",
            password: "",


        }
    }
    onChangeHandler = (event) => {

        let name = event.target.name;
        let value = event.target.value;
        let objekat = this.state.user;
        objekat[name] = value;
        this.setState({ user: objekat })

    }
    onSubmitHandler = (event) => {
        event.preventDefault();
        axios.post('http://localhost:5000/users/login', this.state.user, { headers: { 'Content-Type': 'application/json' } })
            .then(res => {

                console.log(res)
                this.props.history.push('/Nesto');
            })

            .catch(err => {

                this.setState({ eror: err.response.data.eror })
            });


    }
    render() {
        
        var forma = Object.keys(this.state.user).map((x, i) => {

            return (

                <div key={i} className="form-group">

                    <label>
                    <p>{niz[i]}</p>
                        <input type={x === 'password' ? 'password' : 'text'} className="form-control" placeholder={niz[i]} name={x} onChange={this.onChangeHandler} />
                        <div className='tekst'>{this.state.eror[x]}</div>
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
