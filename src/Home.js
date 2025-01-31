import React from 'react';

const Home = () => {
  
    const handleCreatePoll = () => {

        //window.location.href = '/create-pool'
    };
    return (
    <div style={styles.container}>
      {/* Passcode Input Box */}
      <div style={styles.passcodeContainer}>
        <input
          type="text"
          placeholder="Enter passcode for a certain poll"
          style={styles.passcodeInput}
        />
        <button style={styles.passcodeButton}>Submit</button>
      </div>

      {/* Create Poll Button */}
      <button onClick={handleCreatePoll} style={styles.createPollButton}>
        Create Poll
      </button>

      {/* Pricing Boxes */}
      <div style={styles.pricingContainer}>
        <div style={styles.pricingBox}>
          <h2>Basic</h2>
          
          <p>Free</p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
          <button style={styles.button}>Buy</button>
        </div>

        <div style={styles.pricingBox}>
          <h2>Pro</h2>
          
          <p>$20,00</p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
          <button style={styles.button}>Buy</button>
        </div>

        <div style={styles.pricingBox}>
          <h2>Ultra</h2>
          <p>$50,00</p>
          <ul>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
            <li>List item</li>
          </ul>
          <button style={styles.button}>Button</button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  passcodeContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  passcodeInput: {
    padding: '10px',
    width: '300px',
    marginRight: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  passcodeButton: {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  createPollLink: {
    textDecoration: 'none',
    color: '#007BFF',
  },
  pricingContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px'
  },
  createPollButton: {
    display: 'block',
    margin: '0 auto 40px auto',
    padding: '10px 20px',
    backgroundColor: '#28A745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
  pricingBox: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '30%',
    textAlign: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#FF8C00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Home;