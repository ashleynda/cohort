import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  program: Program[];
  startDate: string;
  endDate: string;
  // Add other properties as needed
}

  // const cohort:Cohort[] = []

const initialState = { 
    viewCohorts: viewCohorts, 
    value: 4,
    isLoading: true,
};

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

const viewSlice = createSlice({
    name: 'view',
    initialState,
    reducers: {},
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

});

// export const {incrementValue} = viewCohort.actions;

export default viewSlice.reducer;


// import { createSlice } from "@reduxjs/toolkit";
// import viewCohorts from "../../viewCohorts";

// interface Cohort {
//   cohortName: string;
//   description: string;
//   program: string;
//   startDate: Date;
//   endDate: Date;
// }

// const viewCohorts: Cohort = {
//   cohortName: "John Doe",
//   description: "John aces",
//   program: "Java",
//   startDate: new Date("2023-02-25"),
//   endDate: new Date("2023-02-28")
// };

// const initialState = { 
//     viewCohorts: viewCohorts,
//     value: 0,
// };

// const viewSlice = createSlice({
//     name: 'view',
//     initialState,
//     reducers: {
//         setViewCohorts(state, action) {
//             state.viewCohorts = action.payload;
//         },
//         setValue(state, action) {
//             state.value = action.payload;
//         },
//     },
// });

// export const { setViewCohorts, setValue } = viewSlice.actions;

// export default viewSlice.reducer;
