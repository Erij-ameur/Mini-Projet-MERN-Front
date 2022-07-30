
import './../Styles/Register.css'
import { Link } from 'react-router-dom'
import Button from "../Components/Button";
import { useState } from 'react';
import axios from 'axios';

const Register = (props) => {
    var initPost = {
        mailAdress: "",
        password: "",
    }

    const [post, setPost] = useState(initPost)
    const SendData = async () => {
        console.log("send button")
        let result = await axios.post("http://localhost:5007/user/api/register", post)
        console.log(result)
    }

    return (

        <div className="Register_container">

            <h1 className="Register_title">Register</h1>

            <form className="Register_form">

                <input type="text" className='Register_input' placeholder="Enter your email" required onChange={(e) => { setPost({ ...post, mailAdress: e.target.value }) }} /><br />

                <input type="text" className='Register_input' placeholder="Enter your password" required onChange={(e) => { setPost({ ...post, password: e.target.value }) }} /><br />

                <input type="text" className='Register_input' placeholder="Confirm your password" required />
            </form>


            <div className="btn">
                <Link to="/Home"> <Button className='RegisterBtn' type='button' Name="Submit" Action={SendData}></Button> </Link>
            </div>

        </div>

    );



}


export default Register;