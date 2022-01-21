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

export const sendUrl = (value) => async (dispatch) => {
    // Here make an async request to your sever and extract the data from the server response
    // const response = await apiClient.get('/shortUrl');
    // const { data } = response;
    console.log(value);

    // const data = [
    //   {
    //     id: '1',
    //     title: 'My first article'
    //   }
    // ];
    apiClient.post('/shortUrl', {
        url: value.url,
      }).then(response => {
        dispatch(slice.actions.setUrls(response.data));
      });
};

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