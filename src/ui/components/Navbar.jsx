
import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {



    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login',{
            replace: true  // esto permite cuando se acceda al login y se regrese no muestre el historial anterior
        });
    }





    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    
                    <NavLink 
                        className={({isActive})=>`nav-item nav-link ${isActive ? 'active': ''}`} 
                        to="/search"
                    >
                        Search
                    </NavLink>


                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <NavLink 
                        className="nav-item nav-link" 
                        to="/login"
                        onClick={ onLogout }
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}
