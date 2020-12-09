import React from "react";
import '../Registracija/Registracija.css'
import DatePicker, { registerLocale } from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import RegState from "./Registracija_state"


//DODAT MESSAGE ZA ERROR I SUCCESS
//DODAT LINK ZA LOGIN AKO SI VEC REGISTROVAN
//DODAT MATERIAL UI
//URADIT CSS
//HASHIRAT PASSWORD (OVDJE ILI NA MODELIMA)
//zabraniti korisniku da dva puta pritisne login

const useri =
  [{ name: 'First Name', type: 'text' },
  { name: 'Last Name', type: 'text' },
  { name: 'Username', type: 'text' },
  { name: 'Password', type: 'password' },
  { name: 'Phone Number', type: 'text' },
  { name: 'Birth Date', type: 'Date' }]

export default function Registracija(props) {

  const { handleChange, user, handleSubmit, loading, errors } = RegState({...props});

  const [disabled, setDisabled] = React.useState(true);
  const [startDate, setStartDate] = React.useState(user.BirthDate);




  React.useEffect(() => {
    //za objekat tipa User provjerava da li su atributi svi popunjeni 
    //ne->setDisabled(true) tj onemoguci button
    const isUser = Object.values(user).every(el => Boolean(el));
    isUser ? setDisabled(false) : setDisabled(true);
  }, [user])

  var forma = Object.keys(user).map((x, i) => {
    {
      if (x !== 'BirthDate') {
        return (
          <div key={i} className="form-group">

            <label>
              <p>{useri[i].name}</p>
              <input type={useri[i].type} className="form-control" placeholder={useri[i].name} name={x} onChange={handleChange} />
              <div className='tekst'>{errors.error[x]}</div>
            </label>
          </div>
        )
      }
    }
  })

  var form = (<form onSubmit={handleSubmit} className='forma'>

    {forma}
    <div>
      <label>
        <p>Birth Date</p>

        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

      </label>
    </div>
    <div>
      <input type="submit" value="Submit" className="btn btn-primary" disabled={loading || disabled} />
    </div>
  </form>
  )

  return (

    <div>
   {form}
    </div >
  )
}