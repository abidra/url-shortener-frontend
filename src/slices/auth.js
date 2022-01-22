import { createSlice } from '@reduxjs/toolkit';
import { useRouter } from 'next/router';
import apiClient from '../services/api';

const initialState = {
    setLoggedIn:false,
    loggedIn: false,
    user: {
        name: 'Abid',
        email: 'abid@gmail.com',
    },
};

export const logout = () => async (dispatch) => {
    // Here make an async request to your sever and extract the data from the server response
    // const response = await apiClient.get('/shortUrl');
    // const { data } = response;
    apiClient.post('/logout').then(response => {
        if (response.status === 204) {
            sessionStorage.setItem('loggedIn', false);
        }
    });

    // const data = [
    //   {
    //     id: '1',
    //     title: 'My first article'
    //   }
    // ];
    // apiClient.post('/shortUrl', {
    //     url: value.url,
    //   }).then(response => {
    //     dispatch(slice.actions.setUrls(response.data));
    //   });
};

export const user = () => async (dispatch) => {
    apiClient.get('/user')
    .then(response => {
        console.log(response);
    });
};

export const register = (value) => async (dispatch) => {
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
        apiClient.post('/register', {
            name: value.firstName+' '+value.lastName,
            email: value.email,
            password: value.password,
            password_confirmation: value.password,
          }).then(response => {
            if (response.status === 201) {
                sessionStorage.setItem('loggedIn', true);
                useRouter.push('/');
                // dispatch(slice.actions.setUser(response.data));
            } else {
                console.log('gagal register', response.data);
            };
          }).catch (e => {
            console.log("Error", e.response.data)
          });
    })
};

export const login = (value) => async (dispatch) => {
    apiClient.get('/sanctum/csrf-cookie')
    .then(response => {
        apiClient.post('/login', {
            email: value.email,
            password: value.password
          }).then(response => {
            if (response.status === 200) {
                sessionStorage.setItem('loggedIn', true);
                console.log(response.data);
                // dispatch(slice.actions.setUser(response.data));
            } else {
                console.log('gagal login', response.data);
            };
          }).catch (e => {
            console.log("Error", e.response.data)
          });
    })
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, payload) {
        //get short urls from payload
        state.urls = payload.urls;
    },
    logout(state, payload) {
        state.urls = payload.urls;
    },
    setUser(state, payload) {
        state.user = payload;
    }
  }
});

export const { reducer } = slice;

export default slice;