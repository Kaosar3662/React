import { Link } from 'react-router-dom';
import Button from '../components/primary-btn';
import '../assets/css/var.css';
import styles from '../assets/css/404.module.css';
const notFound = () => {
  return (
    <div className={styles.nfSection}>
      <div className={styles.defaultContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.contentWrap}>
            <img src="/logo.png" alt="logo" width="40px" />
            <div className={styles.topText}>
              <h3>The page you are looking dosen't exist</h3>
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
