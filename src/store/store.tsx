import { configureStore } from '@reduxjs/toolkit';
import cohortReducer from '../features/cohort/CohortSlice';
import viewReducer from '../features/cohort/viewSlice'

export const store = configureStore({
    reducer: {
        cohort: cohortReducer,
        view: viewReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;