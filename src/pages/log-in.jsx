import Button from '../components/primary-btn';
import styles from '../assets/css/login.module.css';
const login = () => {
  return (
    <div className={styles.loginSection}>
      <div className={styles.defaultContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.loginWrap}>
            <img src="/logo.png" alt="logo" width="40px" />
            <div className={styles.topText}>
              <h5>Welcome to the Profunds</h5>
              <p>Log in to continue.</p>

              <form action="#" id='login'>
                <div className={styles.formcontrol}>
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className={styles.formcontrol}>
                  <label htmlFor="">Password*</label>
                  <input
                    type="text"
                    name="pass"
                    placeholder="Your password"
                    required
                  />
                  <div></div>
                  <div></div>
                  <Button width="100%" btnTitle="Log In"></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
