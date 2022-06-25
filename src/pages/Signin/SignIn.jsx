import { React } from "react";
import SignInBg from "/Users/nej/Documents/Projects/Apps/medic-app/src/curve-bg.png";
import LeftIcon from "/Users/nej/Documents/Projects/Apps/medic-app/src/left-icon.png";
import { Button } from "../../components/button/button";

function Signin() {
  return (
    <>
      <div className="signin__page">
        <div className="SignInBg">
          <img className="left-icon" src={LeftIcon} alt="" />
          <img className="banner-img" src={SignInBg} alt="" />
          <h1>Welcome Back</h1>


          <div className="signIn__buttons">
          <Button type="button">
            <div className="fb-btn">
              <img className="logo-icon" src="./facebook.png" alt="facebook" />
              <p> CONTINUE WITH FACEBOOK</p>
            </div>
          </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
