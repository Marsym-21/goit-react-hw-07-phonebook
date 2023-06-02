import axios from 'axios';

axios.defaults.baseURL = 'https://6479b481a455e257fa6398f4.mockapi.io';

export async function fetchContact() {
  const contacts = await axios.get('/contacts');
  return contacts;
}
