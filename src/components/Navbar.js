import {BiSearch, BiHomeAlt} from 'react-icons/bi'
import './Navbar.css'

const Navbar = () => {
    return(
        <div className='navbar'>
            <div>
                <navLink to="/">
                    <p className='logo'>logo</p>
                </navLink>
            </div>

            <nav className='nav-items'>
                <ul className='navbar-ul'>
                    <li className='search'>
                        <BiSearch/>
                    </li>

                    <li className='home'>
                        <BiHomeAlt/>
                    </li>

                   <li className='about'>
                        <navLink to="#">
                            <p>About Us</p>
                        </navLink>
                   </li>

                   <li className='categories'>
                        <navLink to="#">
                            <p>Categories</p>
                        </navLink>
                   </li>

                   <li>
                    <navLink to='#'>
                        <button className='login-btn'>
                            Log In
                        </button>
                    </navLink>
                   </li>

                   <li>
                    <navLink to='#'>
                        <button  className='signin-btn'>
                            Sing In
                        </button>
                    </navLink>
                   </li>


                </ul>
            </nav>
    
        </div>
    )
}

export default Navbar