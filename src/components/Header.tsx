import '../styles/header.css';
import logo from '../assets/logo.png';
import unauthorizedUser from '../assets/user.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {
  const user = useSelector((state: any) => state.user);

  return (
    <div className='header'>
      <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
        <div className='home'>
          <span>UAMG</span>
        </div>
      </Link>
      <img src={logo} alt="" />
      <div className='routes-buttons'>
        <button>Packages</button>
        <button>Blog</button>
      </div>
      <div className='user-menu'>
        <div className='user-auth-buttons'>
          {user ? (
            <Link to='/profile'>
              <button>Profile</button>
            </Link>
          ) : (
            <>
              <Link to='/login'>
                <button>log in</button>
              </Link>
              <Link to='/signin'>
                <button>sign in</button>
              </Link>
            </>
          )}
        </div>
        {user && user.avatar ? (
          <img src={user.avatar} alt="User Avatar" />
        ) : (
          <img src={unauthorizedUser} alt="Default Avatar" />
        )}      
      </div>
    </div>
  );
}


export default Header;