// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { CreateCohortUrl } from "../../urls/UrlsApi";


// export const CreateCohortThunk = createAsyncThunk(
//     "Cohort/CreateCohortThunk",
//     async (cohort) => {
//         console.log(cohort);
//         try {
//             const token = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJyb2xlcyI6WyJBRE1JTiJdLCJpc3MiOiJFbnVtIn0.aNaQX6099P1v9E67yUfxznob9bAQDWDWhEUCRgrgMKDxUMqZAEsYVIWJji3VwgrWaDrtQNNWpHjgpF8mgobEHg";
//             const response = async fetch(CreateCohortUrl, cohort, {
//                 method: 'POST',
//                 headers: {
//                     "Authorization": `Bearer ${token}`
//                 }
//             });
//             return response.data;
//         } catch (error) {
//             return error;
//         }        
//     }
// );