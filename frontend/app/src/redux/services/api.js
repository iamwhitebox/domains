import fetch from 'isomorphic-fetch';
import query from '../../utilities/query';

const API = {};

if (API_MODE === 'production') {
  API.API_ITEMS = `${API_ROOT}/items`;
}

if (API_MODE === 'development') {
  API.API_ITEMS = `${API_ROOT}`;
}


if (API_MODE === 'mock') {
  API.API_ITEMS = `${API_ROOT}/seed.json`;
}

export { API };

const apiService = {};

apiService.itemCreate = (data) => {
  if (API_MODE === 'mock') {

  }

  return fetch(API.API_ITEMS, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data.item),
  })
  .then(response => response.json())
  .then(json => json);
};

apiService.itemFetch = () => {
  return fetch(API.API_ITEMS)
          .then(response => response.json())
          .then(json => json);
};

apiService.itemUpdate = (itemData) => {
  if (API_MODE === 'mock') {

    return new Promise((resolve, reject) => {
      if (Math.random() < 0.2) {
        reject(new Error('Failed to fetch!'));
      }
      resolve('Success!');
    });
  }

  return fetch(API.API_ITEMS + '&q=' + query(itemData.id['$oid']), {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(itemData.update),
  })
  .then(response => response.json())
  .then(json => json);
};

apiService.itemDelete = (id) => {
  if (API_MODE === 'mock') {
    return new Promise((resolve, reject) => {
      if (Math.random() < 0.2) {
        reject(new Error('Failed to fetch!'));
      }
      resolve('Success!');
    });
  }

  return fetch(API.API_ITEMS + '&q=' + query(id), {
    method: 'DELETE',
  })
  .then(response => response.json())
  .then(json => json);
};

export { apiService };
