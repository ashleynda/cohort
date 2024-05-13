// import { createAsyncThunk, createSlice, PayloadAction, createAction } from '@reduxjs/toolkit';

// interface CohortState {
//   cohortData: {
//     cohortName: string;
//     description: string;
//     program: string;
//     startDate: Date;
//     endDate: Date;
//   };
//   isLoading: boolean; 
//   error: string | null; 
//   file: File | null;
//   cohortCount: number;
// }

// const initialState: CohortState = {
//   cohortData: {
//     cohortName: "Hohn Doe",
//     description: "acesdnnidi",
//     program: "python",
//     startDate: new Date("2023-02-25"),
//     endDate: new Date("2023-02-28"),
//   },
//   isLoading: false, 
//   error: null, 
//   file: null, 
//   cohortCount: 10,

// };

// const ADD_FILE = 'cohort/addFile';
// const CLEAR_FILE = 'cohort/clearFile';
// const INCREMENT_COHORT_COUNT = 'cohort/incrementCohortCount'; // Action type for incrementing cohort count
// const DECREMENT_COHORT_COUNT = 'cohort/decrementCohortCount'; // Action type for decrementing cohort count

// // Define Action Creators
// export const addFile = createAction<File>(ADD_FILE);
// export const clearFile = createAction(CLEAR_FILE);
// export const incrementCohortCount = createAction(INCREMENT_COHORT_COUNT); // Action creator for incrementing cohort count
// export const decrementCohortCount = createAction(DECREMENT_COHORT_COUNT); 




// const cohortSlice = createSlice({
//   name: 'cohort',
//   initialState,
//   reducers: {
//     updateCohortData(state, action: PayloadAction<CohortState['cohortData']>) {
//       state.cohortData = action.payload;
//     },
//     incrementCohortCount(state) {
//       state.cohortCount += 1;
//     },
//     decrementCohortCount(state) {
//       state.cohortCount -= 1;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//     .addCase(addFile, (state, action) => {
//       state.file = action.payload;
//     })
//     .addCase(clearFile, (state) => {
//       state.file = null;
    
//     })
    // .addCase(fetchCohortData.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null; 
    // })
    // .addCase(fetchCohortData.fulfilled, (state, action) => {
    //   state.isLoading = false; 
    //   state.cohortData = action.payload; 
    // })
    // .addCase(fetchCohortData.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.payload as string | null; 
    // });
//   }
// });

// const cohortReducer = cohortSlice.reducer;

// export default cohortReducer;

// export const { updateCohortData } = cohortSlice.actions;


// export const cohortReducerWithFile = (state: CohortState, action: any) => {
//   switch (action.type) {
//     case ADD_FILE:
//       return {
//         ...state,
//         file: action.payload,
//       };
//     case CLEAR_FILE:
//       return {
//         ...state,
//         file: null,
//       };
//     default:
//       return cohortReducer(state, action);
//   }
// };


// export const fetchCohortData = createAsyncThunk(
//   'cohort/fetchCohortData',
//   async (_, { rejectWithValue }) => {
//     try {
//       const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
//       const requestOptions = {
//         method: "GET",
//         headers: {
//           "Authorization": `Bearer ${token}`
//         }
//       };
//       const response = await fetch("https://enumsecurity-1.onrender.com/api/v1/admin/add-cohort", requestOptions);

//       if (!response.ok) {
//         throw new Error('Failed to fetch cohort items');
//       };

//       const data = await response.json();
//       return data;
//     } catch (error: any) {
//       return rejectWithValue(error.message); // Re-throw the error to propagate it to the rejected action
//     }
//   }
// );


import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

// export const clearFile = createAction('cohort/clearFile');
// interface CohortState {
//   cohortName: string;
//   description: string;
//   program: string;
//   startDate: Date | null;
//   endDate: Date | null;
//   files: File[]; // Assuming multiple files can be uploaded
//   cohortCount: number;// Assuming multiple files can be uploaded
// }

// const initialState: CohortState = {
//   cohortName: '',
//   description: '',
//   program: '',
//   startDate: null,
//   endDate: null,
//   files: [],
//   cohortCount: 10,
// };

interface CohortState {
  cohortData: {
    cohortName: string;
    description: string;
    program: string;
    startDate: Date | null;
    endDate: Date | null;
    files: File[]; // Assuming multiple files can be uploaded
    cohortCount: number;
  };
}

const initialState: CohortState = {
  cohortData:   {
    cohortName: '',
    description: '',
    program: '',
    startDate: null,
    endDate: null,
    files: [],
    cohortCount: 0,
  },
};
// const cohortData = [
//   {
//     cohortName: '',
//     description: '',
//     program: '',
//     startDate: null,
//     endDate: null,
//     files: [],
//     cohortCount: 0,
//   },
//   {
//     cohortName: '',
//     description: '',
//     program: '',
//     startDate: null,
//     endDate: null,
//     files: [],
//     cohortCount: 0,
//   },
//   {
//     cohortName: '',
//     description: '',
//     program: '',
//     startDate: null,
//     endDate: null,
//     files: [],
//     cohortCount: 0,
//   },
// ];

// const initialState = {cohortData}


const cohortSlice = createSlice({
  name: 'cohort',
  initialState,
  reducers: {
    updateCohortData(state, action: PayloadAction<Partial<CohortState['cohortData']>>) {
      state.cohortData = { ...state.cohortData, ...action.payload };
    },
    addFile(state, action: PayloadAction<File>) {
      state.cohortData.files.push(action.payload); 
      // Add the uploaded file to the files array in the state
    },
    
    clearFiles(state) {
      state.cohortData.files = []; // Access files via state.cohortData.files
    },
    incrementCohortCount(state) {
      state.cohortData.cohortCount += 1; // Access cohortCount via state.cohortData.cohortCount
    },
    createCohort(state) {
      // Check if all required fields are filled
      if (
        state.cohortData.cohortName.trim() !== '' &&
        state.cohortData.description.trim() !== '' &&
        state.cohortData.program.trim() !== '' &&
        state.cohortData.startDate &&
        state.cohortData.endDate
      ) {
        // Reset form fields
        state.cohortData.cohortName = '';
        state.cohortData.description = '';
        state.cohortData.program = '';
        state.cohortData.startDate = null;
        state.cohortData.endDate = null;
        state.cohortData.files = [];
        // Increment cohort count
        state.cohortData.cohortCount += 1;
        
        
      } else {
        // Handle if any required field is missing
        console.error('Some required fields are missing');
      }      
    },
    updateStartDate(state, action: PayloadAction<Date | null>) {
      state.cohortData.startDate = action.payload;
    },
    // Action for updating the end date
    updateEndDate(state, action: PayloadAction<Date | null>) {
      state.cohortData.endDate = action.payload;
    },
  },
});

export const { updateCohortData, addFile, clearFiles, incrementCohortCount, createCohort, updateStartDate, updateEndDate } = cohortSlice.actions;
export default cohortSlice.reducer;






