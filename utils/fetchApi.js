import axios from 'axios';
import { getAPI_URL, getHeaders } from './konstanta';

const deleteData = async (endpoint, id) => {
  const base_url = getAPI_URL();
  const config = getHeaders();
  if (id.includes('@')) {
    config.data = {
      email: id,
    };
  } else {
    config.data = {
      id,
    };
  }
  let result;
  try {
    result = await axios.delete(`${base_url}/${endpoint}`, config);
  } catch (e) {
    return e;
  }
  return result;
};

export { deleteData };
