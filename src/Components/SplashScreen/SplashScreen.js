import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import the toast styles
import './SplashScreen.css';

export const SplashScreen = () => {
  const [email, setEmail] = useState('');
  const [passcode, setPasscode] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if email and passcode match
    if (email === 'john@doe' && passcode === '1111') {
      localStorage.setItem('authToken', 'dummy-token'); // Store dummy token in localStorage
      toast.success('Successfully logged in!')
    } else {
      toast.error('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="Splash-Screen-Container">
      <header>
        Track Your Tasks?
        <hr />
      </header>
      <main className='Form-Container'>
        <form className='Auth-Form' onSubmit={handleSubmit}>
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
          <button type="submit" className="CTA-Button">Get In</button>
        </form>
      </main>
    </div>
  );
};
