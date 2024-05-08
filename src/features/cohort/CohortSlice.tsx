import { createAsyncThunk, createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

interface CohortState {
  cohortData: {
    cohortName: string;
    description: string;
    program: string;
    startDate: Date;
    endDate: Date;
  };
  isLoading: boolean; 
  error: string | null; 
  file: File | null;
  cohortCount: number;
}

const initialState: CohortState = {
  cohortData: {
    cohortName: "Hohn Doe",
    description: "acesdnnidi",
    program: "python",
    startDate: new Date("2023-02-25"),
    endDate: new Date("2023-02-28"),
  },
  isLoading: false, 
  error: null, 
  file: null, 
  cohortCount: 10,

};

const ADD_FILE = 'cohort/addFile';
const CLEAR_FILE = 'cohort/clearFile';
const INCREMENT_COHORT_COUNT = 'cohort/incrementCohortCount'; // Action type for incrementing cohort count
const DECREMENT_COHORT_COUNT = 'cohort/decrementCohortCount'; // Action type for decrementing cohort count

// Define Action Creators
export const addFile = createAction<File>(ADD_FILE);
export const clearFile = createAction(CLEAR_FILE);
export const incrementCohortCount = createAction(INCREMENT_COHORT_COUNT); // Action creator for incrementing cohort count
export const decrementCohortCount = createAction(DECREMENT_COHORT_COUNT); 


export const fetchCohortData = createAsyncThunk(
  'cohort/fetchCohortData',
  async (_, { rejectWithValue }) => {
    try {
      const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
      const requestOptions = {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`
        }
      };
      const response = await fetch("https://enumsecurity-1.onrender.com/api/v1/admin/add-cohort", requestOptions);

      if (!response.ok) {
        throw new Error('Failed to fetch cohort items');
      };

      const data = await response.json();
      return data;
    } catch (error: any) {
      return rejectWithValue(error.message); // Re-throw the error to propagate it to the rejected action
    }
  }
);

const cohortSlice = createSlice({
  name: 'cohort',
  initialState,
  reducers: {
    updateCohortData(state, action: PayloadAction<CohortState['cohortData']>) {
      state.cohortData = action.payload;
    },
    incrementCohortCount(state) {
      state.cohortCount += 1;
    },
    decrementCohortCount(state) {
      state.cohortCount -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCohortData.pending, (state) => {
      state.isLoading = true;
      state.error = null; 
    })
    .addCase(fetchCohortData.fulfilled, (state, action) => {
      state.isLoading = false; 
      state.cohortData = action.payload; 
    })
    .addCase(fetchCohortData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload as string | null; 
    });
  }
});

const cohortReducer = cohortSlice.reducer;

export default cohortReducer;

export const { updateCohortData } = cohortSlice.actions;


export const cohortReducerWithFile = (state: CohortState, action: any) => {
  switch (action.type) {
    case ADD_FILE:
      return {
        ...state,
        file: action.payload,
      };
    case CLEAR_FILE:
      return {
        ...state,
        file: null,
      };
    default:
      return cohortReducer(state, action);
  }
};








