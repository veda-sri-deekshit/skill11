import React, { useState, useEffect } from 'react';

function LocalUserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/users.json')
      .then(res => res.json())
      .then(data => { setUsers(data); setLoading(false); })
      .catch(err => { setError('Failed to load local users'); setLoading(false); });
  }, []);

  if (loading) return <p style={styles.msg}>Loading local users...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Local Users (users.json)</h2>
      <table style={styles.table}>
        <thead>
          <tr style={styles.thead}>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(u => (
            <tr key={u.id} style={styles.tr}>
              <td style={styles.td}>{u.id}</td>
              <td style={styles.td}>{u.name}</td>
              <td style={styles.td}>{u.email}</td>
              <td style={styles.td}>{u.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  title: { color: '#003087' },
  msg: { color: '#555' },
  error: { color: 'red' },
  table: { width: '100%', borderCollapse: 'collapse' },
  thead: { backgroundColor: '#003087', color: 'white' },
  th: { padding: '10px', color: 'white', textAlign: 'left' },
  tr: { borderBottom: '1px solid #ddd' },
  td: { padding: '10px' },
};

export default LocalUserList;