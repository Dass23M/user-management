// src/App.jsx
import { useState } from 'react';
import UserForm from './components/UserForm';
import UserList from './components/UserList';

export default function App() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div style={{ padding: '30px', fontFamily: 'Arial' }}>
      <h1 style={{ marginBottom: '20px' }}>Simple User Management</h1>
      <UserForm selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
      <UserList setSelectedUser={setSelectedUser} />
    </div>
  );
}
