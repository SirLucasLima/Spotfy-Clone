import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreAPi } from './sevices/shazamCore';

export const store = configureStore({
  reducer: {
    [shazamCoreAPi.reducerPath]: shazamCoreAPi.reducer,
    player: playerReducer,
  },
  middleware: (GetDefaultMiddleware) => GetDefaultMiddleware().concat(shazamCoreAPi.middleware),
});
