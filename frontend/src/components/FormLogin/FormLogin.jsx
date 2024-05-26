import React from 'react';
import './FormLogin.css' 

const FormLogin = () => {
    return (
        <div className="FormLogin">
          <form action="">
            <h1 className='Title-Login'>LOGIN</h1>

            <div className="input-box">
              <input type="text" placeholder="Usuario"/>
            </div>

            <div className="input-box">
              <input type="email" name="" id="" placeholder="Correo"/>
            </div>

            <div className="input-box">
              <input type="password" name="" id="" placeholder="Contraseña"/>
            </div>

            <button type='submit'>Login</button>
          </form>
        </div>
    );
  };
  
  export default FormLogin;