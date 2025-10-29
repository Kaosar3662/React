import Button from '../components/primary-btn';
import styles from '../assets/css/signup.module.css';
const signup = () => {

  
  return (
    <div className={styles.signupSection}>
      <div className={styles.defaultContainer}>
        <div className={styles.contentWrapper}>
          <div className={styles.signupWrap}>
            <img src="/logo.png" alt="logo" width="40px" />
            <div className={styles.topText}>
              <h5>Welcome to the Profunds</h5>
              <p>Sign up to continue.</p>

              <form action="#" id="signup">
                <div className={styles.formcontrol}>
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    required
                    />
                </div>
                <div className={styles.formcontrol}>
                  <label htmlFor="">Password*</label>
                  <input
                    type="text"
                    name="pass"
                    id="pass"
                    placeholder="Create password"
                    required
                    />
                  <div></div>
                  <div></div>
                  <Button width="100%" btnTitle="Sign Up"></Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
