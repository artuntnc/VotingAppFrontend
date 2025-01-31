import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.webp'; 

const SignIn = () => {
  return (
    <div style={styles.container}>
      <div style={styles.loginContainer}>
        <div style={styles.logoContainer}>
          <img
            src={logo} 
            alt="Logo"
            style={styles.logo}
          />
        </div>

        <h2 style={styles.loginTitle}>Login</h2>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="username" style={styles.label}>Username or email address</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username or email address"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label htmlFor="password" style={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              style={styles.input}
            />
          </div>

          <button type="submit" style={styles.loginButton}>Login</button>
        </form>

        <div style={styles.options}>
          <label style={styles.rememberMe}>
            <input type="checkbox" /> Remember me
          </label>
          <Link to="/forgot-password" style={styles.forgotPassword}>Forgot password?</Link>
        </div>

        <div style={styles.signUpPrompt}>
          Don't have an account? <Link to="/signup" style={styles.signUpLink}>Sign up</Link>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f9f9f9',
  },
  loginContainer: {
    width: '100%',
    maxWidth: '500px', // Çerçeveyi genişlettim (400px'ten 500px'e çıkardım)
    padding: '40px', // Padding'i artırdım (20px'ten 40px'e çıkardım)
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    position: 'relative', // Logo için pozisyon ayarı
  },
  logoContainer: {
    position: 'absolute', // Logo için pozisyon ayarı
    top: '-50px', // Logoyu border'ın üstüne taşıdım
    left: '50%', // Logoyu yatayda ortala
    transform: 'translateX(-50%)', // Logoyu tam ortala
    textAlign: 'center',
  },
  logo: {
    width: '100px', // Logo boyutunu ayarlayın
    height: 'auto',
    borderRadius: '50%', // Logoyu yuvarlak yapmak için
    border: '2px solid #fff', // Logo etrafında beyaz bir border
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Logo etrafında hafif bir gölge
  },
  loginTitle: {
    textAlign: 'center',
    marginTop: '60px', // Logonun altında boşluk bıraktım
    marginBottom: '20px',
    fontSize: '24px',
    color: '#333',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '15px',
  },
  label: {
    display: 'block',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: 'calc(100% - 20px)', // Padding'i düşürerek input'u border'ın içine sığdırdım
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '16px',
  },
  loginButton: {
    padding: '10px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '10px',
  },
  options: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '15px',
  },
  rememberMe: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px',
    color: '#555',
  },
  forgotPassword: {
    textDecoration: 'none',
    color: '#007BFF',
    fontSize: '14px',
  },
  signUpPrompt: {
    textAlign: 'center',
    marginTop: '20px',
    color: '#555',
  },
  signUpLink: {
    textDecoration: 'none',
    color: '#007BFF',
    fontWeight: 'bold',
  },
};

export default SignIn;