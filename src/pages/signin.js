import './../styles/App.css';
import { useState, useEffect } from "react"
import {Link} from 'react-router-dom'

const Component = (props) => {
    console.log(props)
    const [valeur, setvaleur] = useState("Sign in ")


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
        <div className="signin">

            <img src="images/user1.png" class="avatar"></img>
            

            <input  type="email" /> <br />


            <input  type="password" /> <br />

            <input type="submit" name="" value="Login" />
            
            <Link to="/Register">
                Don't you have an account?
            </Link>



        </div>
    );
}

export default Component;