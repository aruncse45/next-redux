import { persistReducer } from 'redux-persist';
import rootReducer from '@/store/rootReducer';
import storage from '@/store/storage';
import counterSlice from '@/store/slices/counterSlice';

const persistConfig: any = {
  key: 'root',
  storage,
  timeout: null,
  whitelist: [counterSlice.name], // Add slices you want to persist
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
