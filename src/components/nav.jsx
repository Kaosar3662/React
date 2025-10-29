import { Link } from 'react-router-dom';
import '../assets/css/var.css';
import Button from './primary-btn';

const nav = () => {
  const navSection = {
    display: 'flex',
    padding: '16px 24px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    borderBottom: '0.4px solid var(--Neutral-Black-900, #090F1F)',
    background: 'var(--Neutral-White, #FFF)',
    position: 'sticky',
    top: '0px',
  };
  const containerLarge = {
    display: 'flex',
    maxWidth: '1200px',
    width: '100%',
  };
  const contentWrapper = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems:"center",
    width: '100%',
  };
  const navlinks = {
    display: "flex",
    gap:"30px"
  }

  return (
    <div style={navSection}>
      <div style={containerLarge}>
        <div style={contentWrapper}>
          <Link to={'/'}>
            <img src="/navlogo.svg" alt="" />
          </Link>
          <div style={navlinks}>
            <Link to={'/signup'}>
              <p>Sign Up</p>
            </Link>
            <Link to={'/login'}>
              <p>Login</p>
            </Link>
          </div>
          <Link to={'/contact'}>
            <Button btnTitle="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default nav;
