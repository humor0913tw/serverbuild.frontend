import React, { useState, useEffect } from 'react';
import Table from './Table';

// ServerList 組件代表 "/serverbuild" 頁面
function Serverlist() {
  const [serverList, setServerList] = useState([]);

  useEffect(() => {
    const fetchServerList = async () => {
      try {
        const response = await fetch('http://localhost:3001/serverbuild');
        const data = await response.json();
        setServerList(data);
      } catch (error) {
        console.error('Error fetching serverbuild:', error);
      }
    };

    fetchServerList();
  }, []);

  return (
    <div>
      <h1>Serverbuild</h1>
      <Table data={serverList} />
    </div>
  );
}

export default Serverlist;
