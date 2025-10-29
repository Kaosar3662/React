import Button from '../components/primary-btn';
import '../assets/css/login.css';
const login = () => {
  return (
    <div className="loginSection">
      <div className="defaultContainer">
        <div className="contentWrapper">
          <div className="loginWrap">
            <img src="/logo.png" alt="logo" width="40px" />
            <div className="topText">
              <h5>Welcome to the Profunds</h5>
              <p>Log in to continue.</p>

              <form action="#" id='login'>
                <div className="form-control">
                  <label htmlFor="">Email*</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="form-control">
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
