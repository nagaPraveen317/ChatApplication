import './HomePage.css';
import Login from '../Components/Authentication/Login';
import Signup from '../Components/Authentication/Signup';
import { useState } from 'react';

const HomePage=()=>{
    const[page,setPage]=useState('Login');
    function LoginhandleClick(){
        setPage('Login')
    }
    function SignuphandleClick(){
        setPage('Signup')
    }
    return(
        <div className="home">
           <div className='top'>TALK WITH JOY</div>
           <div className='bottom'>
            <button className='btn1' onClick={LoginhandleClick}>Login</button>
            <button className='btn2' onClick={SignuphandleClick}>Signup</button>
           
           </div>
           <div className='usercontent'>
            {page==='Login' && <Login/>}
           { page==='Signup' && <Signup/>}

           </div>
        </div>
    )
}

export default HomePage