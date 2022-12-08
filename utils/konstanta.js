// let token = '';
// let headers = '';
// if (typeof window !== 'undefined') {
//   token = localStorage.getItem('token');
//   headers = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   };
// } else {
//   console.log('we are running on the server');
// }

const getHeadersMultiPart = () => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};

const getHeaders = () => {
  const token = localStorage.getItem('token');
  const headers = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  return headers;
};

const getToken = () => {
  return localStorage.getItem('token');
};

const getAPI_URL = () => 'https://familypreparation.up.railway.app';

export { getHeadersMultiPart, getHeaders, getToken, getAPI_URL };
