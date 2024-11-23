import React, { useState, useEffect } from 'react';

const RoleManagement = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetch('/data/roles.json')
      .then(response => response.json())
      .then(data => setRoles(data));
  }, []);

  return (
    <div>
      <h1>Role Management</h1>
      <table>
        <thead>
          <tr>
            <th>Role</th>
            <th>Permissions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {roles.map(role => (
            <tr key={role.id}>
              <td>{role.name}</td>
              <td>{role.permissions.join(', ')}</td>
              <td>
                <button>Edit</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoleManagement;
