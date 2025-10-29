import Button from '../components/primary-btn';
import '../assets/css/signup.css';
const signup = () => {

  
  return (
    <div className="signupSection">
      <div className="defaultContainer">
        <div className="contentWrapper">
          <div className="signupWrap">
            <img src="/logo.png" alt="logo" width="40px" />
            <div className="topText">
              <h5>Welcome to the Profunds</h5>
              <p>Sign up to continue.</p>

              <form action="#" id="signup">
                <div className="form-control">
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    required
                    />
                </div>
                <div className="form-control">
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
