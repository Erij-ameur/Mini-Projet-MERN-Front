import "./../Styles/Navbar.css"
const Navbar = () => {
    return (
        <nav className="Navbar">
            <input type="checkbox" id="checkbox"></input>
            <label for="checkbox" id="icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </label>
            <ul className="Menu">
                <li><a href="Home">Home</a></li>
                <li><a href="Profil">Profil</a></li>
                <li><a href="Add">Add</a></li>
            </ul>
            
        </nav>
    )
}

export default Navbar;