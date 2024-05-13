import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormControl, FormLabel, MenuItem, Select, SelectChangeEvent, TextareaAutosize, TextField } from '@mui/material';
import dayjs, { Dayjs } from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import DragAndDrop from '../../components/file/DragAndDrop';
import { useDispatch, useSelector } from 'react-redux';
import { updateCohortData, addFile, clearFiles, updateStartDate, updateEndDate, createCohort } from '../../features/cohort/CohortSlice';
import { css } from '@emotion/react';
import { addCohort } from '../../features/cohort/viewSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';




 interface CreateCohortProps { 
   onFileUpload: (file: File) => void;
   onFileClear: () => void;
   onCreateCohort: () => void;
};

const style = {
  position: 'absolute' ,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  // width: 400,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 8,
};



export default function CreateCohort({ onFileUpload, onFileClear, onCreateCohort }: CreateCohortProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // const [value, setValue] = ('');
  const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
  const dispatch = useDispatch();
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
  const navigation = useNavigate();
  // const onCreateCohort = () => {
  //   dispatch(createCohort(formData));
  // };
  

  const handleLocalFileUpload = (file: File) => {
     console.log("File uploaded:", file);    
     dispatch(addFile(file)); 
   };
    
  const handleLocalFileClear = () => { 
     dispatch(clearFiles()); 
   };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { 
    const { name, value } = e.target;
    console.log('====================================');
    console.log('Name:', name, 'Value:', value);
    console.log('====================================');
    dispatch(updateCohortData({ ...formData, [name]: value }));
    console.log("FormData after input change:", formData);
  };
  
  const handleProgramChange = (e: SelectChangeEvent<string>) => { 
    dispatch(updateCohortData({ ...formData, program: e.target.value }));
  };

  const placeholderStyles = css`
   &::placeholder {
    color: red;
    font-style: italic;
    margin-top: 22;
  }
`;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { 
   e.preventDefault();
   if (isFormFilled()) { 
    dispatch(createCohort(formData)); 
    dispatch(addCohort(formData));
    onCreateCohort();
    setOpen(false);
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

  const handleStartDateChange = (date: Date) => { 
    dispatch(updateStartDate(new Date(date)));
  };

  const handleEndDateChange = (date: Date) => { 
    dispatch(updateEndDate(new Date(date)));
  };

  const handleCancel = () => {
    setOpen(false);
  };
  
  // const handleCreateCohort = () => {
  //   // Dispatch the create cohort action with form data
  //   dispatch(createCohort(formData));
  // };
  
  

 

  return (
    <div>
      <Button onClick={handleOpen} 
       sx={{backgroundColor: "#008EEF", color: 'white', lineHeight: '27px', 
       textTransform: 'none', 
       '&:hover': { // Overriding hover styles
        backgroundColor: "#008EEF", // Keeping the same background color as normal state
      }
       }}
      //  style={styles.button}
       disableRipple
      >Create a cohort</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{borderRadius: 6, border: '1px solid #D0DCE4'}}       
      >
        <div>
          <Button onClick={handleClose} sx={{position: 'absolute', right: 0, top: 0, color: '#475661', fontSize: '12px', fontWeight: '400', fontFamily: 'DM Sans'}}>x</Button>
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" className="text-4xl font-serif" style={{fontFamily: 'IBM Plex Serif',
              fontSize: '24px', fontWeight: '600' }}>
            Create a Cohort
          </Typography>

          <form onSubmit={handleSubmit} >
          <FormControl fullWidth className='flex gap-2'>
          <FormLabel htmlFor="textarea" className='pt-10 font-normal' sx={{ color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans' }}>Cohort Name</FormLabel>
          <TextField
           id="textarea"
           placeholder="Ex. Cohort 1"
           name="cohortName"
           value={formData.cohortName}
           onChange={handleInputChange}
           variant="outlined"
           multiline
           fullWidth
           rows={1} 
           style={{
            border: '1px solid #D0DCE4',
            borderRadius: '6px',
          }}         
         />
            <FormLabel htmlFor="textarea" className='pt-10 text-sm font-normal' sx={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Description</FormLabel>
            <TextField
              id="textarea"
              placeholder="Ex. A space for python developers"
              name='description'
              value={formData.description} 
              onChange={(e:any) => handleInputChange(e)}   
              multiline       
              // style={{border: '1px solid #D0DCE4', borderRadius: '6px'}}
              rows={6}   // Set the number of visible text rows
              style={{border: '1px solid #D0DCE4', borderRadius: '6px', overflowY: 'auto'}} 
            />
            <FormLabel htmlFor="textarea" className='pt-10 text-sm font-normal' sx={{borderRadius: '6px', height: '4.4%', color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Program</FormLabel>
              <Select
                labelId="program-label"
                id="program-select"
                minRows={1}
                value={formData.program}
                onChange={handleProgramChange}
                sx={{borderRadius: '6px', border: '1px solid #D0DCE4'}}
              >
                <MenuItem value="Product Design">Product Design</MenuItem>
                <MenuItem value="Backend">Backend</MenuItem>
                <MenuItem value="Frontend">FrontEnd</MenuItem>
                <MenuItem value="Product Management">Product Management</MenuItem>
                <MenuItem value="DevOps">DevOps</MenuItem>
                <MenuItem value="Data Science">Data Science</MenuItem>
              </Select>

              <div className='flex mt-4 w-[80%] gap-4'>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                <div>
                  <p style={{fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', color: '#1E323F'}}>Start Date</p>
                  <DemoContainer components={['DatePicker']} sx={{borderRadius: '6px'}}>
                    <DatePicker label="25-Jan-2021" 
                      onChange={handleStartDateChange}
                      // sx={{width: '37%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', border: '1px solid #D0DCE4'}}
                    />
                  </DemoContainer>
                </div>
                <div>
                  <p style={{fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', color: '#1E323F'}}>End Date</p>
                  <DemoContainer components={['DatePicker']} sx={{borderRadius: '6px'}}>
                    <DatePicker label="25-Jan-2021" 
                      minDate={startDate}
                      onChange={handleEndDateChange}
                      // sx={{width: '37%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', border: '1px solid #D0DCE4'}}
                    />
                  </DemoContainer>
                </div>
                </LocalizationProvider>                
              </div>
              <div>
                <Typography className='pt-10 text-sm font-normal' style={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Add a cohort Avatar</Typography>
                  <div className='flex flex-col items-center justify-center bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg h-[119px]'>
                    <FileUploadOutlinedIcon />
                    <DragAndDrop
                      onFileUpload={handleLocalFileUpload} 
                      onFileClear={handleLocalFileClear}  
                    /> 
                    <Typography style={{fontSize: '12px', fontWeight: '500', fontFamily: 'DM Sans', color: '#9CABB5'}}>
                      240*240 px Recommended, max size 1MB
                    </Typography>
                  </div>
                  <Typography className='flex justify-start' style={{color: '#475661', fontSize: '12px', fontWeight: '400', fontFamily: 'DM Sans'}}>you can do this later</Typography>
                </div>
              <div className='flex justify-end gap-2'>
                <Button variant='outlined' size='sm' sx={{color: '#008EEF', fontSize: '16px', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif', textTransform: 'none' }} onClick={handleCancel} >Cancel</Button>              
                <Button size='sm' sx={{backgroundColor: isFormFilled() ? '#008EEF' : '#D0DCE4', 
                borderRadius: '8px', fontSize: '16px', color: 'white', fontFamily: 'DM Sans, sans-serif', 
                  textTransform: 'none',
                  '&:hover': {
                    backgroundColor: isFormFilled() ? '#008EEF' : '#D0DCE4', // Keep the color consistent when hovered
                  }
                  }} type='submit' disableRipple disabled={!isFormFilled()} >Create Cohort</Button>
              </div>    
            
            </FormControl>
            </form>       
        </Box>
        </div>
      </Modal>
    </div>
    
  );
}


{/* // import * as React from 'react';
// import { SelectChangeEvent } from '@mui/material/Select';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateCohortData, addFile, clearFiles, updateStartDate, updateEndDate } from '../../features/cohort/CohortSlice'; // Import Redux actions
// import DragAndDrop from '../../components/file/DragAndDrop';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { useNavigate } from 'react-router-dom';
// import { createCohort } from '../../features/cohort/CohortSlice';
// import Button from '@mui/joy/Button';
// import Stack from '@mui/joy/Stack';
// import Modal from '@mui/joy/Modal';
// import ModalClose from '@mui/joy/ModalClose';
// import ModalDialog from '@mui/joy/ModalDialog';
// import DialogTitle from '@mui/joy/DialogTitle';
// import DialogContent from '@mui/joy/DialogContent';
// import FormControl from '@mui/joy/FormControl';
// import FormLabel from '@mui/joy/FormLabel';
// import Textarea from '@mui/joy/Textarea'
// import { MenuItem, TextField, Typography } from '@mui/material';
// import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
// import Select from '@mui/material/Select';
// import dayjs, { Dayjs } from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { useState } from 'react';
// import { addCohort } from '../../features/cohort/viewSlice';


// interface CreateCohortProps { */}
{/* //   onFileUpload: (file: File) => void;
//   onFileClear: () => void;
// }

// const CreateCohort: React.FC<CreateCohortProps> = ({ onFileUpload, onFileClear }) => { */}
{/* //   const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);
//   const dispatch = useDispatch();
//   const [value, setValue] = React.useState<Dayjs | null>(dayjs('2022-04-17'));
//   const formData = useSelector((state: any) => state.cohort.cohortData || { */}
{/* //     cohortName: '', */}
{/* //     description: '',
//     program: '',
//     startDate: null,
//     endDate: null,
//     files: [],
//   });
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);
//   // const [value, setValue] = React.useState(null);


//   const handleCancel = () => { */}
{/* //     setLayout(false);
//   }

//   const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => { */}
{/* //     const { name, value } = e.target;
//     dispatch(updateCohortData({ ...formData, [name]: value }));
//   };
  
//   const handleProgramChange = (e: SelectChangeEvent<string>) => { */}
{/* //     dispatch(updateCohortData({ ...formData, program: e.target.value }));
//   };
  
//   const handleLocalFileUpload = (file: File) => { */}
{/* //     console.log("File uploaded:", file);    
//     dispatch(addFile(file)); 
//   };
    
//   const handleLocalFileClear = () => { */}
{/* //     dispatch(clearFiles()); 
//   };

//   const navigate = useNavigate();

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { */}
{/* //     e.preventDefault();
//     if (isFormFilled()) { */}
{/* //       dispatch(createCohort(formData)); 
//       dispatch(addCohort(formData));
//       setLayout(false);
//     } else { */}
{/* //       console.error('Form is not filled properly');
//     }
//   };

//   const isFormFilled = () => { */}
{/* //     return (
//       formData &&
//       formData.cohortName?.trim() !== '' &&
//       formData.description?.trim() !== '' &&
//       formData.program?.trim() !== '' &&
//       formData.startDate &&
//       formData.endDate
//     );
//   };

//   const handleStartDateChange = (date: Date) => { */}
{/* //     dispatch(updateStartDate(date));
//   };

//   const handleEndDateChange = (date: Date) => { */}
{/* //     dispatch(updateEndDate(date));
//   };


//   const renderCustomInput = (params: any) => (
//     <input */}
{/* //       {...params}
//       placeholder="24-Jan-2021"
//       style={{ width: '100%', padding: '8px', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans' }}
//     />
//   );
  
  

//   return (
//     <div className='flex justify-center'>
//       <React.Fragment>
//         <Stack direction="row" spacing={1}>
//           <div className='flex justify-center'>
//             <Button */}
{/* //               sx={{backgroundColor: "#008EEF", color: 'white', lineHeight: '27px'}}
//               onClick={() => { setLayout("center"); }}
//             >
//               Create Cohort
//             </Button> */}
//           </div>
//         </Stack>
//         <Modal open={!!layout} onClose={() => setLayout(undefined)}>
//           <ModalDialog layout={layout} sx={{display: 'flex', gap: '4px'}}>
//             <ModalClose />
//             <DialogTitle className="text-4xl font-serif" style={{fontFamily: 'IBM Plex Serif',
//               fontSize: '24px', fontWeight: '600' }}>Create a Cohort</DialogTitle>
//             <DialogContent>
//               <form onSubmit={handleSubmit}>
//               <FormControl>
//                 <FormLabel className='pt-10 font-normal' sx={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Cohort Name</FormLabel>
//                 <Textarea sx={{borderRadius: '6px'}} placeholder='Enter Cohort Name' minRows={1} name="cohortName" value={formData.cohortName} onChange={handleInputChange} />
//               </FormControl>

//                 <FormControl >
//                   <FormLabel className='pt-10 text-sm font-normal' sx={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Description</FormLabel>
//                   <Textarea  placeholder='Ex. A space for python developers' minRows={6}  name="description" value={formData.description} onChange={handleInputChange}/>
//                 </FormControl>
//                 <FormControl sx={{borderRadius: '6px'}}>
//                   <FormLabel className='pt-10 text-sm font-normal' sx={{borderRadius: '6px', height: '4.4%', color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Program</FormLabel>
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
//                     <MenuItem value="Product Management">Product Management</MenuItem>
//                     <MenuItem value="DevOps">DevOps</MenuItem>
//                     <MenuItem value="Data Science">Data Science</MenuItem>
//                   </Select>
//                 </FormControl>

//                 <FormControl>
//                   <div className='flex mt-4 w-[80%]'>
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                       <div>
//                         <p style={{fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', color: '#1E323F'}}>Start Date</p>
//                         <DemoContainer components={['DatePicker']} sx={{borderRadius: '6px'}}>
//                           <DatePicker label="25-Jan-2021" 
//                             onChange={handleStartDateChange}
//                             sx={{width: '37%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}
//                           />
//                         </DemoContainer>
//                       </div>
//                       <div>
//                         <p style={{fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', color: '#1E323F'}}>End Date</p>
//                         <DemoContainer components={['DatePicker']} sx={{borderRadius: '6px'}}>
//                           <DatePicker label="25-Jan-2021" 
//                             onChange={handleEndDateChange}
//                             sx={{width: '37%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}
//                           />
//                         </DemoContainer>
//                       </div>
//                     </LocalizationProvider>                
//                   </div>
//                 </FormControl>
                
//                 <FormControl className='' >
//                   <Typography className='pt-10 text-sm font-normal' style={{color: '#1E323F', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans'}}>Add a cohort Avatar</Typography>
//                   <div className='flex flex-col items-center justify-center bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg h-[119px]'>
//                     <FileUploadOutlinedIcon />
//                     <DragAndDrop onFileUpload={handleLocalFileUpload} onFileClear={handleLocalFileClear}  
//                     /> 
//                     <Typography style={{fontSize: '12px', fontWeight: '500', fontFamily: 'DM Sans', color: '#9CABB5'}}>
//                         240*240 px Recommended, max size 1MB
//                     </Typography>
//                   </div>
//                   <Typography className='flex justify-start' style={{color: '#475661', fontSize: '12px', fontWeight: '400', fontFamily: 'DM Sans'}}>you can do this later</Typography>
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




