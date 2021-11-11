import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registrasi.css";

export default function Registrasi() {
  return (
    <div>
      <Container fluid>
        <div className="registrasi">
          <div className="registrasiLeft">
            <img src="asset/brand/signin.png" alt="" width="100%" />
          </div>
          <div className="registrasiRight">
            <div className="formContainer">
              <div className="signup">
                <form>
                  <h2>Sign In</h2>
                  <div className="inputField">
                    <i class="bi bi-person"></i>
                    <input type="text" placeholder="Username" />
                  </div>
                  <div className="inputField">
                    <i class="bi bi-envelope"></i>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div className="inputField">
                    <i class="bi bi-lock"></i>
                    <input type="password" placeholder="Password" />
                  </div>
                  <input type="submit" value="Login" className="btnSolid" />
                  <p className="socialText">Or Sign in with social platform</p>
                  <div className="IconSocial">
                    <span>
                      <i class="bi bi-facebook"></i>
                    </span>
                    <span>
                      <i class="bi bi-instagram"></i>
                    </span>
                    <span>
                      <i class="bi bi-google"></i>
                    </span>
                    <span>
                      <i class="bi bi-linkedin"></i>
                    </span>
                    <span>
                      <i class="bi bi-twitter"></i>
                    </span>
                  </div>
                  <Link to="/signin" className="Link">
                    <div className="InputText">
                      Have on account ? <span>Login</span>
                    </div>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
