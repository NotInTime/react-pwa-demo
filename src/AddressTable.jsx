import React from 'react';

const columns = ['#', 'Street', 'Number', 'Postcode', 'City'];

const AddressTable = ({ addresses }) => {
  return (
    <div class="grid grid-cols-5 text-start bg-white w-full">
      {columns.map((column) => (
        <div class="border-b " key={column}>
          <div class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
            {column}
          </div>
        </div>
      ))}
      {addresses.map((address) => (
        <>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {address.id}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {address.street}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {address.number}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {address.postcode}
          </div>
          <div class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            {address.city}
          </div>
        </>
      ))}
    </div>
  );
};

export default AddressTable;
