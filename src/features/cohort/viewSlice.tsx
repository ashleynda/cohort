import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewAllCohortUrl } from "../../urls/UrlsApi";
import viewCohorts from "../../viewCohorts";

interface Program {
  id: number;
  programName: string;
}

interface Cohort {
  id: number;
  avatarImageUrl: string;
  cohortName: string;
  description: string;
  program: Program;
  startDate: string;
  // Add other properties as needed
}

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

interface ViewState {
  viewCohorts: Cohort[];
  value: number;
  isLoading: boolean;
}

const initialState = { 
    viewCohorts: viewCohorts, 
    value: 0,
    isLoading: true,
};



const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {
      addCohort(state, action: PayloadAction<Cohort>) {
        state.viewCohorts.push(action.payload);
      }
    },
 

});

// export const {incrementValue} = viewCohort.actions;
export const { addCohort } = viewSlice.actions;
export default viewSlice.reducer;


























   // extraReducers: (builder) => {
    //     builder
    //       .addCase(viewCohorts.pending, (state) => {
    //         state.isLoading = true;
    //       })
    //       .addCase(viewCohorts.fulfilled, (state, action: PayloadAction<Cohort[]>) => {
    //         console.log(action);
    //         console.log('====================================');
    //         console.log(action.payload);
    //         console.log('====================================');
    //         state.isLoading = false;
    //         state.viewCohorts = action.payload;
    //       })
    //       .addCase(viewCohorts.rejected, (state) => {
    //         state.isLoading = false;
    //       });
    //   },




// export const getViewCohorts = createAsyncThunk(
//     'view/getViewCohorts',
//     async () => {
//         try {
//           const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
//           const requestOptions = {
//             method: "GET",
//             headers: {
//               "Authorization": `Bearer ${token}`
//             }
//           };
//           const response = await fetch("https://enumsecurity-1.onrender.com/api/v1/admin/get-all-cohort", requestOptions);
          
//           if (!response.ok) {
//             throw new Error('Failed to fetch instructor items');
//           }
    
//           const data = await response.json();
//           return data as Cohort[];
//         } catch (error) {
//           throw error; // Re-throw the error to propagate it to the rejected action
//         }
//     }
// );
