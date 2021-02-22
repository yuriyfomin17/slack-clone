import React from 'react';
import "./Login.css"
import Button from "@material-ui/core/Button";
import {auth, provider} from "./firebase"
import {useStateValue} from "./StateProvider";
import {actionTypes} from "./reducer";


function Login() {
    const [state, dispatch] = useStateValue()
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => {
                console.log(result)
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                })
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    return <div className="login">
        <div className="login_container">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
                alt=""
            />
            <h1>Sign in to Yuriy Fomin Slack</h1>
            <p>yuriyFomin.slack.com</p>
            <Button onClick={signIn}>Sign In with Google</Button>
        </div>
    </div>

}

export default Login;