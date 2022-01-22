import { createSlice } from '@reduxjs/toolkit';
import apiClient from '../services/api';
import { v4 as uuid } from 'uuid';

const initialState = {
  urls: []
};

//Shorten URL
export const sendUrl = ( {url} ) => async (dispatch) => {
    const csrf = await apiClient.get('/sanctum/csrf-cookie');
    const shortUrl = await apiClient.post('/api/short-url', {
        url: url,
    });
    return shortUrl;
};

//Delete Shorten URL
export const deleteUrl = (id) => async (dispatch) => {
  console.log(id);
  const csrf = await apiClient.get('/sanctum/csrf-cookie');
  const shortUrl = await apiClient.delete('/api/short-url/'+id);
  return shortUrl;
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