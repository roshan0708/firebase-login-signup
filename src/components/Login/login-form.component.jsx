import React, {useState} from 'react';
import FormInput from "../Form-input/form-input.component";
import "./login-form.styles.css";

const LoginComponent = () => {
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // setLoading(true);
        // try {
        //     await auth.signInWithEmailAndPassword(email, password);
        //     console.log("Logged In Successfully!!");
        //     setEmail("");
        //     setPassword("");
        //     setLoading(false);
        // } catch (error) {
        //     console.log(error);
        // }
        // close();
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
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
                
            </form>
        </div>
    )
}

export default LoginComponent;
