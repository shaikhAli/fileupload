import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation-container">
            <div className="header">Sitel group</div>
            <div className="tab">
                <Link to="/"> Page1</Link>
            </div>
            <div className="tab">
                <Link to="/gallery"> Page2</Link>
            </div>
        </div>
    )
}

export default Navigation;