import airbnbLogo from '../images/airbnb-logo.png';

const Navbar = () => {
    return (
        <nav>
            <img src={airbnbLogo} className='nav--img' ALT='Airbnb logo'/>
        </nav>
    );
}

export default Navbar;
