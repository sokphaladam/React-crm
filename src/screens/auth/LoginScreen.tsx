import React from 'react';

export class LoginScreen extends React.Component {
    render() {
        return (
            <div className="auth">
                <img src={require('../../img/background.svg')} alt="" />
                <form>
                    <h3>Login Now</h3>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your username"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter your password"
                            required
                            pattern="[0-9A-Za-z]{6}"
                            title="password must be have maximum character of six."
                        />
                    </div>
                    <a href="#">Forget password?</a>
                    <button
                        type="submit"
                        className="btn btn-primary btn-block"
                    >
                        Login Now
                    </button>
                    <a
                        href="#"
                        style={{
                            textAlign: 'center',
                            display: 'block'
                        }}
                    >
                        Don't have any account Signup Now?
                    </a>
                </form>
            </div>
        )
    }
}