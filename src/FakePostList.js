import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FakePostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState('all');

  const fetchPosts = () => {
    setLoading(true);
    axios.get('https://dummyjson.com/posts')
      .then(res => { setPosts(res.data.posts); setLoading(false); })
      .catch(err => { setError('Failed to fetch posts'); setLoading(false); });
  };

  useEffect(() => { fetchPosts(); }, []);

  const filtered = filter === 'all' ? posts : posts.filter(p => p.userId === parseInt(filter));

  if (loading) return <p style={styles.msg}>Loading posts...</p>;
  if (error) return <p style={styles.error}>{error}</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Fake Posts (DummyJSON)</h2>
      <div style={styles.controls}>
        <select style={styles.select} value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="all">All Users</option>
          {[1,2,3,4,5].map(id => <option key={id} value={id}>User {id}</option>)}
        </select>
        <button style={styles.btn} onClick={fetchPosts}>Refresh</button>
      </div>
      {filtered.map(p => (
        <div key={p.id} style={styles.card}>
          <h4 style={styles.cardTitle}>{p.title}</h4>
          <p style={styles.cardBody}>{p.body}</p>
          <small style={styles.cardMeta}>User ID: {p.userId}</small>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { padding: '20px' },
  title: { color: '#003087' },
  msg: { color: '#555' },
  error: { color: 'red' },
  controls: { display: 'flex', gap: '10px', marginBottom: '16px' },
  select: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  btn: { padding: '8px 16px', backgroundColor: '#003087', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  card: { backgroundColor: '#f5f5f5', borderRadius: '8px', padding: '12px', marginBottom: '10px', borderLeft: '4px solid #003087' },
  cardTitle: { margin: '0 0 6px', color: '#003087' },
  cardBody: { margin: '0 0 4px', color: '#444' },
  cardMeta: { color: '#888' },
};

export default FakePostList;