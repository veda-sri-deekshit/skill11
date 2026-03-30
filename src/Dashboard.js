import React, { useState } from 'react';
import LocalUserList from './LocalUserList';
import UserList from './UserList';
import FakePostList from './FakePostList';

function Dashboard() {
  const [active, setActive] = useState(null);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>React API Integration Dashboard</h1>
      <div style={styles.nav}>
        <button style={styles.navBtn} onClick={() => setActive('local')}>Local Users</button>
        <button style={styles.navBtn} onClick={() => setActive('api')}>Users API</button>
        <button style={styles.navBtn} onClick={() => setActive('fake')}>Fake API Posts</button>
      </div>
      <div style={styles.content}>
        {!active && <p style={styles.hint}>👆 Click a button above to load data</p>}
        {active === 'local' && <LocalUserList />}
        {active === 'api' && <UserList />}
        {active === 'fake' && <FakePostList />}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: '900px', margin: '30px auto', fontFamily: 'Arial, sans-serif', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' },
  title: { textAlign: 'center', color: '#003087', marginBottom: '20px' },
  nav: { display: 'flex', gap: '12px', justifyContent: 'center', marginBottom: '24px' },
  navBtn: { padding: '10px 20px', backgroundColor: '#003087', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer', fontSize: '14px' },
  content: { backgroundColor: 'white', borderRadius: '8px', padding: '16px', minHeight: '200px' },
  hint: { textAlign: 'center', color: '#888', marginTop: '60px', fontSize: '16px' },
};

export default Dashboard;