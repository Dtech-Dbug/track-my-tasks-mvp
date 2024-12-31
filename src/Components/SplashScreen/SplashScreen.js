import { useAuth } from "../../useAuth";
import "./SplashScreen.css";

export const SplashScreen = () => {
  const { email, setEmail, passcode, setPasscode, handleSubmit } = useAuth();

  return (
    <div className="Splash-Screen-Container">
      <header>
        Track Your Tasks?
        <hr />
      </header>
      <main className="Form-Container">
        <form className="Auth-Form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="Input-Field"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your passcode"
            className="Input-Field"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
          />
          <button type="submit" className="CTA-Button">
            Get In
          </button>
        </form>
      </main>
    </div>
  );
};
