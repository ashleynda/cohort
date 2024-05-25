import { createSlice, createAction, PayloadAction } from '@reduxjs/toolkit';

interface CohortState {
  cohortData: {
    cohortName: string;
    description: string;
    program: string;
    startDate: Date | null;
    endDate: Date | null;
    files: File[]; 
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

const cohortSlice = createSlice({
  name: 'cohort',
  initialState,
  reducers: {
    updateCohortData(state, action: PayloadAction<Partial<CohortState['cohortData']>>) {
      state.cohortData = { ...state.cohortData, ...action.payload };
    },
    addFile(state, action: PayloadAction<File>) {
      state.cohortData.files.push(action.payload); 
    },
    
    clearFiles(state) {
      state.cohortData.files = []; 
    },
    incrementCohortCount(state) {
      state.cohortData.cohortCount += 1; 
    },
    createCohort(state) {
      if (
        state.cohortData.cohortName.trim() !== '' &&
        state.cohortData.description.trim() !== '' &&
        state.cohortData.program.trim() !== '' &&
        state.cohortData.startDate &&
        state.cohortData.endDate
      ) {
        state.cohortData.cohortName = '';
        state.cohortData.description = '';
        state.cohortData.program = '';
        state.cohortData.startDate = null;
        state.cohortData.endDate = null;
        state.cohortData.files = [];
        state.cohortData.cohortCount += 1;
        
        
      } else {
        console.error('Some required fields are missing');
      }      
    },
    updateStartDate(state, action: PayloadAction<Date | null>) {
      state.cohortData.startDate = action.payload;
    },
    updateEndDate(state, action: PayloadAction<Date | null>) {
      state.cohortData.endDate = action.payload;
    },
  },
});

export const { updateCohortData, addFile, clearFiles, incrementCohortCount, createCohort, updateStartDate, updateEndDate } = cohortSlice.actions;
export default cohortSlice.reducer;






