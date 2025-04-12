// src/components/UserForm.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserForm.css';

export default function UserForm({ selectedUser, setSelectedUser }) {
  const [form, setForm] = useState({ name: '', email: '' });
  const api = 'http://localhost:3001/users';

  useEffect(() => {
    if (selectedUser) {
      setForm({ name: selectedUser.name, email: selectedUser.email });
    }
  }, [selectedUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (selectedUser) {
      await axios.put(`${api}/${selectedUser.id}`, form);
    } else {
      await axios.post(api, form);
    }
    setForm({ name: '', email: '' });
    setSelectedUser(null);
    const event = new Event('userUpdated');
    window.dispatchEvent(event);
  };

  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <h3>{selectedUser ? 'Update User' : 'Add New User'}</h3>
      <input
        type="text"
        placeholder="Enter name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      <input
        type="email"
        placeholder="Enter email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        required
      />
      <button type="submit">
        {selectedUser ? 'Update User' : 'Add User'}
      </button>
    </form>
  );
}
