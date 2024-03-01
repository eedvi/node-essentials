
// const fetch = require('node-fetch'); // node-fetch is a promise based HTTP client for the browser and node.js
// import fetch from 'node-fetch'; // node-fetch is a promise based HTTP client for the browser and node.js

// const axios = require('axios'); // axios is a promise based HTTP client for the browser and node.js
// import axios from 'axios'; // axios is a promise based HTTP client for the browser and node.js

// const fetch = require('node-fetch'); // node-fetch is a promise based HTTP client for the browser and node.js
// import fetch from 'node-fetch'; // node-fetch is a promise based HTTP client for the browser and node.js

// const axios = require('axios'); // axios is a promise based HTTP client for the browser and node.js
// import axios from 'axios'; // axios is a promise based HTTP client for the browser and node.js

// const fetch = require('node-fetch'); // node-fetch is a promise based HTTP client for the browser and node.js
// const httpClientPlugin = {
//   get: async (url) => {
//     const resp = await fetch(url);
//     return await resp.json();
//   },
//   post: async (url, body) => {},
//   put: async (url, body) => {},
//   delete: async (url) => {},
// };

// module.exports = {
//   http: httpClientPlugin,
// };
import axios from 'axios';

export const httpClientPlugin = {

  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;  // data is the response from the server
    // const resp = await fetch(url);
    //return await resp.json()

  },
  post: async (url: string, body: any) => {
    throw new Error('Method not implemented.');
  },
  put: async (url: string, body: any) => {
    throw new Error('Method not implemented.');

  },
  delete: async (url: string) => {
    throw new Error('Method not implemented.');

  },
};


