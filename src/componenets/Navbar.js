import logo from './images/stackline_logo.svg';

function Navbar(){
    return (
        <div className="bg-sky-950 w-screen h-16 mb-24">
            <img className="h-16 w-16" src={logo} alt="logo"/>
        </div>
    )
}

export default Navbar