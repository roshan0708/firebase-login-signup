import React, {useState} from 'react';
import FormInput from "../Form-input/form-input.component";
import CustomButton from "../Custom-button/custom-button.component";
import "./login-signup-form.styles.css";
import {auth,signInWithGoogle} from "../../firebase/firebase.utils";

const FormComponent = () => {
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSignIn = e => {
        e.preventDefault();
        auth
          .signInWithEmailAndPassword(email, password)
          .then((u) => {
            console.log("Logged In Successfully");
          })
          .catch((err) => {
            console.error(err);
          });
    };

    const handleSignUp = e => {
        e.preventDefault();
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((u) => {
            console.log("Signed Up Successfully");
          })
          .catch((err) => {
            console.error(err);
          });
    }

    return (
      <div className="login-form">
        <h2>Welcome Back!</h2>
        <p
          style={{
            fontSize: "1rem",
            color: "#808080",
            marginTop: "10px",
            marginBottom: "30px",
          }}
        >
          Sign In or Sign Up using email and password
        </p>
        <form>
          <FormInput
            name="email"
            type="email"
            handleChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            label="Email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            label="Password"
            required
          />
          <div className="buttons-group">
            <CustomButton type="submit" onClick={handleSignIn}>SIGN IN</CustomButton>
            <CustomButton type="submit" onClick={handleSignUp}>SIGN UP</CustomButton>
          </div>
        </form>
        <div className="google-signin-div">
          <p>OR</p>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </div>
    );
}

export default FormComponent;
