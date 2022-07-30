import "./../Styles/Add.css"
import {Link} from 'react-router-dom'
import Button from "../Components/Button";
import MainLayout from '../Layout/MainLayout'
const Add = () => {
    var initPost = {
        mailAdress: "",
        password: "",
    }
     
    return (
        <MainLayout>
        <div className="Add">
            <h1 className="titre">add your artwork</h1>

            <form className="form">
                <h1 className="h">Title:</h1>
                <input type={"text" }className="title"></input>

                <h1 className="h">Description:</h1>
                <input type={"text"} className="description"></input>

                <h1 className="h">Image:</h1>
                <input type={"text"}className="image"></input>
                <div className="btn">
                    <Link to="/Home"><Button className='AddBtn' Name="Submit" onClick={()=>{console.log('btn fonctionne')}}></Button></Link>
                
                </div>
            </form>

        </div>
        </MainLayout>
    )
}

export default Add;