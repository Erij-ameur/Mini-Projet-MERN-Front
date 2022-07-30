import './../Styles/Login.css';
import { useState, useEffect } from "react"
import { Link } from 'react-router-dom'
import Button from "../Components/Button";

const Login = (props) => {
    console.log(props)
    const [valeur, setvaleur] = useState("Log in ")


    const change = (event) => {
        //console.log(event)
        //console.log(event.target.val)
        setvaleur(event.target.value)
    }
    useEffect(() => {
        console.log("logged ")

    }, [valeur]
    )

    return (
        <div className="BG">
            <div className="Login">

               <div className="avatar"> <img src="./img/avataaars.svg" ></img></div>


                <input type="email" /> <br />


                <input type="password" /> <br />

                <div className="btn">
                    <Link to="/Home"><input type="submit" name="" value="Login" /></Link>

                </div>

                <Link to="/Register">
                     <a className='link'>You don't have an account? Register Now</a>
                </Link>

            </div>

        </div>
    );
}

export default Login;