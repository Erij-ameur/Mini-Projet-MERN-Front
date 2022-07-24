import { useState, useEffect } from "react"
import './../styles/Register.css'
import {Link} from 'react-router-dom'


const Register = (props) => {
    console.log(props)
    const [valeur1, setvaleur1] = useState("Sign in ")


    const change = (event) => {
        //console.log(event)
        //console.log(event.target.val)
        setvaleur1(event.target.value)
    }
    useEffect(() => {
        console.log("logged ")

    }, [valeur1]
    )

    return (

        <div class="container">
            <form action="#">
              
                <div class="title">Register</div>
                
                <div class="user-details">
                    <div class="input-box">
                        <span class="details"></span>
                        <input type="text" placeholder="Enter your name" required />
                    </div>
                    <div class="input-box">
                        <span class="details"></span>
                        <input type="text" placeholder="Enter your email" required />
                    </div>
                    <div class="input-box">
                        <span class="details"></span>
                        <input type="text" placeholder="Enter your password" required />
                    </div>
                    <div class="input-box">
                        <span class="details"></span>
                        <input type="text" placeholder="Confirm your password" required />
                    </div>
                </div>
                <Link to="/signin" className="buttom">
                Register
            </Link>

            </form>
        </div>

    );



}


export default Register;