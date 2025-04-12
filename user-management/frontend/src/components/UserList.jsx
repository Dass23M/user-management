// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';

export default function UserList({ setSelectedUser }) {
  const [users, setUsers] = useState([]);
  const api = 'http://localhost:3001/users';

  const fetchUsers = async () => {
    const res = await axios.get(api);
    setUsers(res.data);
  };

  const handleDelete = async (id) => {
    await axios.delete(`${api}/${id}`);
    fetchUsers();
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
  };

  useEffect(() => {
    fetchUsers();

    const refresh = () => fetchUsers();
    window.addEventListener('userUpdated', refresh);
    return () => window.removeEventListener('userUpdated', refresh);
  }, []);

  return (
    <div className="user-list">
      <h3>User List</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan="4">No users found.</td>
            </tr>
          ) : (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button className="edit-btn" onClick={() => handleEdit(user)}>Edit</button>
                  <button className="delete-btn" onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
