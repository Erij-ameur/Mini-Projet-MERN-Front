import './../styles/User_profile.css'

const User_profile = () => {

    return (
        <div >
            <img src="./images/user1.png"/>

            <div class="container1">
                <p> id: </p>
                <br />
                <p>username:</p>
                <br />
                <p>email:</p>
                <br />
                <p>role:</p>
                <br />
                <p>my art work:</p>

                <table>
                    <tr>
                        <td> id</td>
                        <td> title</td>
                        <td> description</td>
                        <td> status</td>
                    </tr>
                    <tr>
                        <td>Giraud</td>
                        <td>Pierre</td>
                        <td>28</td>
                        <td>pierre.giraud@edhec.com</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </table>
            </div>

        </div>
    );
}


export default User_profile;