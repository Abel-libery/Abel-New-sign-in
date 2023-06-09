import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Login</h1>

        <div className="input-container">
          <label>Email </label>
          <input type="text" name="uname" required />
          {/* {renderErrorMessage("uname")} */}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {/* {renderErrorMessage("pass")} */}
        </div>

        <a href="#">Forgot password?</a>
        <a href="#">Create a new account</a>

        <button className="loginBut">
          <p>Login</p>
        </button>

        <button className="siG">
          <img
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png"
            alt="Trees"
            height="30"
          />
          <p>Sign with Microsoft</p>
          
        </button>
      </div>
    </div>
  );
}

export default App;
