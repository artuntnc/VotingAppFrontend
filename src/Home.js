import React, { useState } from 'react';

const Home = () => {
  const [isYearly, setIsYearly] = useState(false); // Yıllık/aylık durumunu tutar

  const handleCreatePoll = () => {
    // window.location.href = '/create-pool'
  };

  const togglePricing = () => {
    setIsYearly(!isYearly); // Yıllık/aylık durumunu tersine çevir
  };

  // Fiyatları hesapla
  const getPrice = (monthlyPrice) => {
    return isYearly ? monthlyPrice * 12 * 0.8 : monthlyPrice; // Yıllık fiyat %20 indirimli
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

      {/* Pricing Toggle */}
      <div style={styles.toggleContainer}>
        <button
          onClick={togglePricing}
          style={{
            ...styles.toggleButton,
            backgroundColor: !isYearly ? '#007BFF' : '#f0f0f0',
            color: !isYearly ? '#fff' : '#333',
          }}
        >
          Monthly
        </button>
        <button
          onClick={togglePricing}
          style={{
            ...styles.toggleButton,
            backgroundColor: isYearly ? '#007BFF' : '#f0f0f0',
            color: isYearly ? '#fff' : '#333',
          }}
        >
          Yearly
        </button>
      </div>

      {/* Pricing Boxes */}
      <div style={styles.pricingContainer}>
        <div style={styles.pricingBox}>
          <h2>Basic</h2>
          <p>${getPrice(0)}/{isYearly ? 'yr' : 'mo'}</p>
          <ul style={styles.list}>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
          <button style={styles.button}>Buy</button>
        </div>

        {/* Pro Box with Black Background */}
        <div
          style={{
            ...styles.pricingBox,
            backgroundColor: '#000', // Siyah arka plan
            color: '#fff', // Beyaz metin rengi
          }}
        >
          <h2>Pro</h2>
          <p>${getPrice(20)}/{isYearly ? 'yr' : 'mo'}</p>
          <ul style={{ ...styles.list, color: '#fff' }}>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
          <button
            style={{
              ...styles.button,
              backgroundColor: '#FF8C00',
              color: '#fff',
            }}
          >
            Buy
          </button>
        </div>

        <div style={styles.pricingBox}>
          <h2>Ultra</h2>
          <p>${getPrice(50)}/{isYearly ? 'yr' : 'mo'}</p>
          <ul style={styles.list}>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
            <li>List Item</li>
          </ul>
          <button style={styles.button}>Buy</button>
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
  toggleContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  toggleButton: {
    padding: '10px 20px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 5px',
  },
  pricingContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '40px',
    gap: '20px', // Kutular arasına boşluk ekledik
  },
  pricingBox: {
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '10px',
    width: '30%',
    textAlign: 'center',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#FF8C00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Home;