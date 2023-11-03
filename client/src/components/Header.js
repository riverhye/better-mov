import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <div>
                Main
            </div>
            <div>
                <Link to='/sigin'>마이페이지</Link>
            </div>
        </>
    )
}

export default Header;