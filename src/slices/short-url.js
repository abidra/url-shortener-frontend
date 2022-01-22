import { createSlice } from '@reduxjs/toolkit';
import apiClient from '../services/api';
import { v4 as uuid } from 'uuid';

const initialState = {
  urls: [
    {
        id: uuid(),
        ref: 'CDD1049',
        amount: 30.5,
        customer: {
          name: 'Ekaterina Tankova'
        },
        createdAt: 1555016400000,
        status: 'pending'
      },
      {
        id: uuid(),
        ref: 'CDD1048',
        amount: 25.1,
        customer: {
          name: 'Cao Yu'
        },
        createdAt: 1555016400000,
        status: 'delivered'
      },
      {
        id: uuid(),
        ref: 'CDD1047',
        amount: 10.99,
        customer: {
          name: 'Alexa Richardson'
        },
        createdAt: 1554930000000,
        status: 'refunded'
      },
      {
        id: uuid(),
        ref: 'CDD1046',
        amount: 96.43,
        customer: {
          name: 'Anje Keizer'
        },
        createdAt: 1554757200000,
        status: 'pending'
      },
      {
        id: uuid(),
        ref: 'CDD1045',
        amount: 32.54,
        customer: {
          name: 'Clarke Gillebert'
        },
        createdAt: 1554670800000,
        status: 'delivered'
      },
      {
        id: uuid(),
        ref: 'CDD1044',
        amount: 16.76,
        customer: {
          name: 'Adam Denisov'
        },
        createdAt: 1554670800000,
        status: 'delivered'
      }
]
};

//Shorten URL
export const sendUrl = ( {url} ) => async (dispatch) => {
    const csrf = await apiClient.get('/sanctum/csrf-cookie');
    const shortUrl = await apiClient.post('/api/short-url', {
        url: url,
    });
    console.log(shortUrl);
};

//Delete Shorten URL
export const deleteUrl = (id) => async (dispatch) => {
  console.log(id);
  const csrf = await apiClient.get('/sanctum/csrf-cookie');
  const shortUrl = await apiClient.delete('/api/short-url/'+id);
  console.log(shortUrl);
}

const slice = createSlice({
  name: 'url',
  initialState,
  reducers: {
    setUrls(state, payload) {
        //get short urls from payload
        state.urls = payload.urls;
      }
  }
});

export const { reducer } = slice;

export default slice;