import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { wrapper } from '@/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

export default function App({ Component, pageProps }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(pageProps);
  persistStore(store);
  return (
    <Provider store={store}>
      <Component {...props.pageProps} />
    </Provider>
  );
}
