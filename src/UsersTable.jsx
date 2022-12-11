import React from 'react';

const columns = ['#', 'First Name', 'Last Name', 'Birthdate', 'Address #'];

const UsersTable = ({ users }) => {
  return (
    <div class="grid grid-cols-5 text-start bg-white w-full">
      {columns.map((column) => (
        <div class="border-b " key={column}>
          <div class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {column}
          </div>
        </div>
      ))}
      {users.map((user) => (
        <>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.id}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.firstname}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.lastname}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.birthday}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {user.address.id}
          </div>
        </>
      ))}
    </div>
  );
};

export default UsersTable;
