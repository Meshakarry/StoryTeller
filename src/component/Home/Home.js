import React from 'react'
import './Home.css';
import ButtonLR from "../ButtonLR/ButtonLR";



export default function Home(props){
  function handleclick(){
        props.history.push('/Login');
  }
  function handleRegistracija(){
    props.history.push('/Registracija');
}

   return (
       <React.Fragment>
      <div className='App'>

        <div className='Left'></div>
        <div className='Right'>
       

       <div className="dugmad">
         <h2>Pridruzite se storytelleru već danas</h2>
        <ButtonLR click={handleRegistracija} type='btn-primary'>Registracija</ButtonLR>
        <ButtonLR click={handleclick} type='btn-light'>Prijava</ButtonLR>

         </div>

        </div>
         

      </div>
     <footer> About us</footer>
     </React.Fragment>
   )
  
}
