import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlices';
// import các reducer khác

const store = configureStore({
  reducer: {
    auth: authReducer,
    // các reducer khác
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
