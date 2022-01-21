import { configureStore } from '@reduxjs/toolkit'
import {reducer as urlReducer} from 'src/slices/short-url';

export default configureStore({
  reducer: {
    url: urlReducer
  }
})