import { createSlice } from "@reduxjs/toolkit";

interface Native {
    value: number

}

const initialState: Native = { value: 1 }


const nativeSlice = createSlice({
    name: 'native',
    initialState,
    reducers: {
        incrementValue(state) {
            state.value += 1;
        },
    },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(CreateCohortThunk.fulfilled, (state, action) => {
    //       state.cohort.push(action.payload);
    //       console.log('payload', action.payload);
    //     })
    //   },        
    // },
});

export const {incrementValue} = nativeSlice.actions;

export default nativeSlice.reducer