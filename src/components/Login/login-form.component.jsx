import React, {useState} from 'react';
import FormInput from "../Form-input/form-input.component";
import "./login-form.styles.css";

const LoginComponent = () => {
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return (
        <div>
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
        </div>
    )
}

export default LoginComponent;
