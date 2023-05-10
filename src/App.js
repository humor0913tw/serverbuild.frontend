import React, { useState, useEffect } from 'react';
import Table from './Table';

function App() {
  const [serverList, setServerList] = useState([]);

  useEffect(() => {
    fetchServerList();
  }, []);

  const fetchServerList = async () => {
    try {
      const response = await fetch('http://localhost:3001/serverbuild');
      const data = await response.json();
      setServerList(data);
    } catch (error) {
      console.error('Error fetching server list:', error);
    }
  };  

  return (
    <div className="container">
      <h1>Server List</h1>
      <Table data={serverList} />
    </div>
  );
}

export default App;
