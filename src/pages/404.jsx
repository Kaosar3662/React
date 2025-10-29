import { Link } from 'react-router-dom';
import Button from '../components/primary-btn';
import '../assets/css/var.css';
import '../assets/css/404.css';
const notFound = () => {
  return (
    <div className="nfSection">
      <div className="defaultContainer">
        <div className="contentWrapper">
          <div className="contentWrap">
            <img src="/logo.png" alt="logo" width="40px" />
            <div className="topText">
              <h5>The page you are looking dosen't exist</h5>
              <Link to={"/"}>
              <Button btnTitle="Go to Home" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default notFound;
