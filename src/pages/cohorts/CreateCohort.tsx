// import * as React from 'react';
// import Button from '@mui/joy/Button';
// import Stack from '@mui/joy/Stack';
// import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import ModalDialog from '@mui/joy/ModalDialog';
// import DialogTitle from '@mui/joy/DialogTitle';
// import DialogContent from '@mui/joy/DialogContent';
// import FormControl from '@mui/joy/FormControl';
// import Select from '@mui/material/Select';
// import FormLabel from '@mui/joy/FormLabel';
// import Textarea from '@mui/joy/Textarea'
// import { MenuItem, Typography } from '@mui/material';
// import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
// import { SelectChangeEvent } from '@mui/material/Select';
// import { useDispatch } from 'react-redux';
// import { ChangeEvent } from 'react';
// import { updateCohortData, addFile, clearFile, incrementCohortCount } from '../../features/cohort/CohortSlice';
// import DragAndDrop from '../../components/file/DragAndDrop';

// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import dayjs from 'dayjs';
// import { useNavigate } from 'react-router-dom';



// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

// interface CreateCohortProps {
//   onFileUpload: (file: File) => void;
//   onFileClear: () => void;
// }
// const CreateCohort: React.FC<CreateCohortProps> = ({ onFileUpload, onFileClear }) => {
//   const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);
//   const dispatch = useDispatch();
  // const formData = useSelector((state: any) => ({
  //   cohortName: state.cohort?.cohortData?.cohortName || '',
  //   description: state.cohort?.cohortData?.description || '',
  //   program: state.cohort?.cohortData?.program || '',
  //   startDate: state.cohort?.cohortData?.startDate || '',
  //   endDate: state.cohort?.cohortData?.endDate || '',
  // }));

  // const handleCancel = () => {
  //   setLayout(false);
  // }

  // const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
  //   dispatch(updateCohortData({ ...formData, [e.target.name]: e.target.value }));
  // };

  // const handleProgramChange = (e: SelectChangeEvent<string>) => {
  //   dispatch(updateCohortData({ ...formData, program: e.target.value }));
  // };

  // const handleLocalFileUpload = (file: File) => {
  //   dispatch(addFile(file)); 
  // };
  
  // const handleLocalFileClear = () => {
  //   dispatch(clearFile()); 
  // };


  // const navigate = useNavigate();


  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   dispatch(createCohort(formData)); // Call the createCohort function
  //   dispatch(incrementCohortCount());
  //   navigate('/instructorCohort');
  //   // Dispatch action to create cohort
  // };

//   const isFormFilled = () => {
//     return (
//       formData.cohortName?.trim() !== '' &&
//       formData.description?.trim() !== '' &&
//       formData.program?.trim() !== '' &&
//       formData.startDate &&
//       formData.endDate
//     );
//   };

//   return (
//     <div className='flex justify-center'>
//       <React.Fragment>
//         <Stack direction="row" spacing={1}>
//           <div className='flex justify-center'>
//             <Button
//               sx={{backgroundColor: "#008EEF", color: 'white', lineHeight: '27px'}}
//               onClick={() => { setLayout("center"); }}
//             >
//               Create Cohort
//             </Button>
//           </div>
//         </Stack>
//         <Modal open={!!layout} onClose={() => setLayout(undefined)}>
//           <ModalDialog layout={layout}>
//             <ModalClose />
//             <DialogTitle className="text-4xl font-serif">Create a Cohort</DialogTitle>
//             <DialogContent>
//               <form onSubmit={handleSubmit}>
//                 <FormControl>
//                   <FormLabel className='pt-10'>Cohort Name</FormLabel>
//                   <Textarea placeholder='Enter Cohort Name' minRows={1} name="cohortName" value={formData.cohortName} onChange={handleInputChange} />
//                 </FormControl>
//                 <FormControl >
//                   <FormLabel className='pt-10'>Description</FormLabel>
//                   <Textarea placeholder='Ex. A space for python developers' minRows={2}  name="description" value={formData.description} onChange={handleInputChange}/>
//                 </FormControl>
//                 <FormControl>
//                   <FormLabel className='pt-10'>Program</FormLabel>
//                   <Select
//                     labelId="program-label"
//                     id="program-select"
//                     value={formData.program}
//                     label="Program"
//                     onChange={handleProgramChange}
//                   >
//                     <MenuItem value="Product Design">Product Design</MenuItem>
//                     <MenuItem value="Backend">Backend</MenuItem>
//                     <MenuItem value="Frontend">FrontEnd</MenuItem>
//                     <MenuItem value="Product MAnagement">Product Management</MenuItem>
//                     <MenuItem value="DevOps">DevOps</MenuItem>
//                     <MenuItem value="Data Science">Data Science</MenuItem>
//                   </Select>
//                 </FormControl>

//                 <FormControl>
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                   <DemoContainer
//                     components={['DateRangePicker']}
//                   >
//                     {/* <DemoItem label="startDate" component="DateRangePicker">
//                       <DateRangePicker calendars={1} />
//                     </DemoItem> */}
//                     <DemoItem label="Responsive variant" component="DateRangePicker">
//                       <DateRangePicker calendars={1}
//                         defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
//                       />
//                     </DemoItem>                    
//                   </DemoContainer>
//                 </LocalizationProvider>
//                 </FormControl>

//                 {/* <App /> */}
//                 <FormControl className='pt-10' >
//                   <Typography>Add a cohort Avatar</Typography>
//                   <div className='flex flex-col items-center justify-center bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg'>
//                     <FileUploadOutlinedIcon />
//                     {/* <DragAndDrop onFileUpload={handleFileUpload} onFileClear={handleFileClear} />  */}
//                     <DragAndDrop onFileUpload={handleLocalFileUpload} onFileClear={handleLocalFileClear} /> 

//                     <Typography>
//                         240*240 px Recommended, max size 1MB
//                     </Typography>
//                   </div>
//                   <Typography className='flex justify-start'>you can do this later</Typography>
//                 </FormControl>
//                 <div className='flex justify-end gap-2'>
//                   <Button variant='outlined' size='sm' sx={{color: '#008EEF', fontSize: '16px', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif' }} onClick={handleCancel}>Cancel</Button>
//                   <Button size='sm' sx={{backgroundColor: '#D0DCE4', borderRadius: '8px', fontSize: '16px', color: 'white', fontFamily: 'DM Sans, sans-serif',  }} type='submit' disabled={!isFormFilled()} >Create Cohort</Button>
                  
//                 </div>
//               </form>
//             </DialogContent>
//           </ModalDialog>
//         </Modal>
//       </React.Fragment>
//     </div>
//   );
// }
// export default CreateCohort;
// }


import * as React from 'react';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { updateCohortData, addFile, clearFiles, updateStartDate, updateEndDate } from '../../features/cohort/CohortSlice'; // Import Redux actions
import DragAndDrop from '../../components/file/DragAndDrop';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import { useNavigate } from 'react-router-dom';
import { createCohort } from '../../features/cohort/CohortSlice';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea'
import { MenuItem, TextField, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import Select from '@mui/material/Select';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useState } from 'react';
import { addCohort } from '../../features/cohort/viewSlice';


interface CreateCohortProps {
  onFileUpload: (file: File) => void;
  onFileClear: () => void;
}

const CreateCohort: React.FC<CreateCohortProps> = ({ onFileUpload, onFileClear }) => {
  const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);
  const dispatch = useDispatch();
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const formData = useSelector((state: any) => state.cohort.cohortData || {
    cohortName: '',
    description: '',
    program: '',
    startDate: null,
    endDate: null,
    files: [],
  });
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  // const [value, setValue] = React.useState(null);


  const handleCancel = () => {
    setLayout(false);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(updateCohortData({ ...formData, [name]: value }));
  };
  
  const handleProgramChange = (e: SelectChangeEvent<string>) => {
    dispatch(updateCohortData({ ...formData, program: e.target.value }));
  };
  
  const handleLocalFileUpload = (file: File) => {
    console.log("File uploaded:", file);    
    dispatch(addFile(file)); 
  };
    
  const handleLocalFileClear = () => {
    dispatch(clearFiles()); 
  };

  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormFilled()) {
      dispatch(createCohort(formData)); 
      dispatch(addCohort(formData));
      setLayout(false);
    } else {
      console.error('Form is not filled properly');
    }
  };

  const isFormFilled = () => {
    return (
      formData &&
      formData.cohortName?.trim() !== '' &&
      formData.description?.trim() !== '' &&
      formData.program?.trim() !== '' &&
      formData.startDate &&
      formData.endDate
    );
  };

  const handleStartDateChange = (date) => {
    dispatch(updateStartDate(date));
  };

  const handleEndDateChange = (date) => {
    dispatch(updateEndDate(date));
  };


  const renderCustomInput = (params: any) => (
    <input
      {...params}
      placeholder="24-Jan-2021"
      style={{ width: '100%', padding: '8px', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans' }}
    />
  );
  
  

  return (
    <div className='flex justify-center'>
      <React.Fragment>
        <Stack direction="row" spacing={1}>
          <div className='flex justify-center'>
            <Button
              sx={{backgroundColor: "#008EEF", color: 'white', lineHeight: '27px'}}
              onClick={() => { setLayout("center"); }}
            >
              Create Cohort
            </Button>
          </div>
        </Stack>
        <Modal open={!!layout} onClose={() => setLayout(undefined)}>
          <ModalDialog layout={layout} sx={{display: 'flex', gap: '4px'}}>
            <ModalClose />
            <DialogTitle className="text-4xl font-serif" style={{fontFamily: 'IBM Plex Serif',
              fontSize: '24px', fontWeight: '600' }}>Create a Cohort</DialogTitle>
            <DialogContent>
              <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel className='pt-10 font-normal' sx={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Cohort Name</FormLabel>
                <Textarea sx={{borderRadius: '6px'}} placeholder='Enter Cohort Name' minRows={1} name="cohortName" value={formData.cohortName} onChange={handleInputChange} />
              </FormControl>

                <FormControl >
                  <FormLabel className='pt-10 text-sm font-normal' sx={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Description</FormLabel>
                  <Textarea  placeholder='Ex. A space for python developers' minRows={6}  name="description" value={formData.description} onChange={handleInputChange}/>
                </FormControl>
                <FormControl sx={{borderRadius: '6px'}}>
                  <FormLabel className='pt-10 text-sm font-normal' sx={{borderRadius: '6px', height: '4.4%', color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Program</FormLabel>
                  <Select
                    labelId="program-label"
                    id="program-select"
                    value={formData.program}
                    label="Program"
                    onChange={handleProgramChange}
                  >
                    <MenuItem value="Product Design">Product Design</MenuItem>
                    <MenuItem value="Backend">Backend</MenuItem>
                    <MenuItem value="Frontend">FrontEnd</MenuItem>
                    <MenuItem value="Product Management">Product Management</MenuItem>
                    <MenuItem value="DevOps">DevOps</MenuItem>
                    <MenuItem value="Data Science">Data Science</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                  <div className='flex mt-4 w-[80%]'>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <div>
                        <p style={{fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', color: '#1E323F'}}>Start Date</p>
                        <DemoContainer components={['DatePicker']} sx={{borderRadius: '6px'}}>
                          <DatePicker label="25-Jan-2021" 
                            onChange={handleStartDateChange}
                            sx={{width: '37%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}
                          />
                        </DemoContainer>
                      </div>
                      <div>
                        <p style={{fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', color: '#1E323F'}}>End Date</p>
                        <DemoContainer components={['DatePicker']} sx={{borderRadius: '6px'}}>
                          <DatePicker label="25-Jan-2021" 
                            onChange={handleEndDateChange}
                            sx={{width: '37%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}
                          />
                        </DemoContainer>
                      </div>
                    </LocalizationProvider>                
                  </div>
                </FormControl>
                
                <FormControl className='' >
                  <Typography className='pt-10 text-sm font-normal' style={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Add a cohort Avatar</Typography>
                  <div className='flex flex-col items-center justify-center bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg h-[119px]'>
                    <FileUploadOutlinedIcon />
                    <DragAndDrop onFileUpload={handleLocalFileUpload} onFileClear={handleLocalFileClear}  
                    /> 
                    <Typography style={{fontSize: '12px', fontWeight: '500', fontFamily: 'DM Sans', color: '#9CABB5'}}>
                        240*240 px Recommended, max size 1MB
                    </Typography>
                  </div>
                  <Typography className='flex justify-start' style={{color: '#475661', fontSize: '12px', fontWeight: '400', fontFamily: 'DM Sans'}}>you can do this later</Typography>
                </FormControl>
                <div className='flex justify-end gap-2'>
                  <Button variant='outlined' size='sm' sx={{color: '#008EEF', fontSize: '16px', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif' }} onClick={handleCancel}>Cancel</Button>
                  <Button size='sm' sx={{backgroundColor: '#D0DCE4', borderRadius: '8px', fontSize: '16px', color: 'white', fontFamily: 'DM Sans, sans-serif',  }} type='submit' disabled={!isFormFilled()} >Create Cohort</Button>
                </div>
              </form>
            </DialogContent>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </div>
  );
}

export default CreateCohort;




 {/* <FormControl> */}
                  {/* <StartDate /> */}
                  {/* <div>
                    <p>Start Date</p>
                    <p>End Date</p>
                  </div>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DateRangePicker']}
                  >
                <DateRangePicker
                  calendars={1}
                  value={[formData.startDate, formData.endDate]} // Pass the selected start and end dates as the value
                  onChange={(newValue) => {
                    // newValue is an array of Date objects [startDate, endDate]
                    dispatch(
                      updateCohortData({
                        startDate: newValue[0],
                        endDate: newValue[1],
                      })
                    );
                  }}
                />           
                  </DemoContainer>
                </LocalizationProvider>
                </FormControl> */}

                {/* <FormControl>
                  <FormLabel className='pt-10 text-sm font-normal' style={{color: '#1E323F'}}>Start Date</FormLabel>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DateRangePicker']}>
                      <DemoItem label="Responsive variant" component="DateRangePicker">
                        <DateRangePicker
                          calendars={1}
                          // value={[formData.startDate, formData.endDate]}
                          // onChange={(newValue) => {
                            // dispatch(
                            //   updateCohortData({
                            //     startDate: newValue[0],
                            //     endDate: newValue[1],
                              })
                            );
                          }}
                        />
                      </DemoItem>                    
                    </DemoContainer>
                  </LocalizationProvider>
                </FormControl> */}