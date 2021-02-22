import React from 'react';
import "./Login.css"
import Button from "@material-ui/core/Button";

function Login() {
    return <div className="login">
        <div className="login_container">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b9/Slack_Technologies_Logo.svg"
                alt=""
            />
            <h1>Sign in to Yuriy Fomin Slack</h1>
            <p>yuriyFomin.slack.com</p>
            <Button>Sign In with Google</Button>
        </div>
    </div>

}

export default Login;