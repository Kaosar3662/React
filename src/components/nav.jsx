import { Link } from 'react-router-dom';
import '../assets/css/var.css';
import Button from "./primary-btn"

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
    width: '100%',
  };

  return (
    <div style={navSection}>
      <div style={containerLarge}>
        <div style={contentWrapper}>
          <img src="/navlogo.svg" alt="" />
          <Button btnTitle="Contact Us" />
        </div>
      </div>
    </div>
  );
};

export default nav;
