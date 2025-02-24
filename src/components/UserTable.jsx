import React, { useState, useEffect } from 'react';

const UserTable = () => {
const [users, setUsers] = useState([]);

useEffect(() => {
    // Llamada a la API de EC2
    fetch('http://3.89.75.199:5000/users') 
    .then(response => response.json())
    .then(data => setUsers(data))
    .catch((err) => console.error("Error fetching users:", err));
}, []);

return (
    <div className="p-4">
    <table className="w-full border-collapse border border-gray-400">
        <thead>
        <tr className="bg-gray-200">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Apellido</th>
        </tr>
        </thead>
        <tbody>
        {users.map((user, index) => (
            <tr key={index} className="border">
            <td className="border p-2">{user.name}</td>
            <td className="border p-2">{user.email}</td>
            <td className="border p-2">{user.last_name}</td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
);
};

export default UserTable;
