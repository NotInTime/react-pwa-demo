import React, { useEffect, useState } from 'react';
import { getAddresses, getUsers } from './api';
import UsersTable from './UsersTable';
import AddressTable from './AddressTable';

function App() {
  const [users, setUsers] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    getUsers().then((res) => {
      setUsers(res);
    });
    getAddresses().then((res) => {
      setAddresses(res);
    });
  }, []);

  return (
    <div className="text-white text-2xl bg-gray-700 h-screen">
      <div className="flex flex-col justify-center gap-10 p-10 w-full items-center text-center">
        <div>
          <h1>Users</h1>
          <UsersTable users={users} />
        </div>
        <div>
          <h1>Addresses</h1>
          <AddressTable addresses={addresses} />
        </div>
      </div>
    </div>
  );
}

export default App;
