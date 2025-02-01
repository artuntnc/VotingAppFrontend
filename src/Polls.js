import React, { useState, useEffect, useRef } from 'react';

const Polls = () => {
  
  const [polls, setPolls] = useState([
    { id: 1, title: 'Favorite Programming Language'},
    { id: 2, title: 'Best Framework for Web Development'},
    { id: 3, title: 'Preferred Cloud Provider'},
    { id: 4, title: 'Favorite Mobile OS'},
    { id: 5, title: 'Best Database System'},
  ]);

  const [selectedPoll, setSelectedPoll] = useState(null); 
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPolls, setFilteredPolls] = useState(polls); 

  
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const results = polls.filter(poll =>
      poll.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPolls(results);
  };

  
  const handleSelectPoll = (pollId) => {
    if (selectedPoll === pollId) {
      setSelectedPoll(null); 
    } else {
      setSelectedPoll(pollId); 
    }
  };

 
  const handleJoinPoll = () => {
    if (selectedPoll) {
      console.log(`Joined poll with ID: ${selectedPoll}`);
      alert(`You joined the poll with ID: ${selectedPoll}`);
    } else {
      alert('Please select a poll first!');
    }
  };

  
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setSelectedPoll(null); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={styles.container} ref={containerRef}>
      <h1 style={styles.title}>Public Polls</h1>

      {/* Searching bar */}
      <input
        type="text"
        placeholder="Search polls by title..."
        value={searchTerm}
        onChange={handleSearch}
        style={styles.searchInput}
      />

      {/* Poll list */}
      <div style={styles.pollsContainer}>
        {filteredPolls.map((poll) => (
          <div
            key={poll.id}
            style={{
              ...styles.pollCard,
              border: selectedPoll === poll.id ? '2px solid #007BFF' : '1px solid #ccc', 
              backgroundColor: selectedPoll === poll.id ? '#f0f8ff' : '#fff', 
            }}
            onClick={() => handleSelectPoll(poll.id)} 
          >
            
            <h3 style={styles.pollTitle}>{poll.title}</h3>
          </div>
        ))}
      </div>

      {/* Join Poll Button*/}
      <button
        onClick={handleJoinPoll}
        style={styles.joinButton}
        disabled={!selectedPoll} 
      >
        Join Poll
      </button>
    </div>
  );
};

// Stiller
const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#333',
  },
  searchInput: {
    width: '100%',
    maxWidth: '500px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    marginBottom: '20px',
    fontSize: '16px',
  },
  pollsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
  },
  pollCard: {
    position: 'relative',
    width: '300px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
  },
  pollImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  },
  pollTitle: {
    padding: '15px',
    fontSize: '20px',
    color: '#333',
  },
  joinButton: {
    padding: '10px 20px',
    backgroundColor: '#FF8C00',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default Polls;