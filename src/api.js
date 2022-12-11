import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
});

/**
### User

- firstname
- lastname
- birthday
- address

### Address

- street
- number
- postcode
- city
 */

// get users
export const getUsers = () =>
    api.get('/users').then((response) => response.data);

// get adresses
export const getAddresses = () =>
    api.get('/addresses').then((response) => response.data);