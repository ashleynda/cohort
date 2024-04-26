// import React from 'react'
// import { alpha, styled } from '@mui/material/styles';
// import InputBase from '@mui/material/InputBase';
// import Box from '@mui/material/Box';
// import InputLabel from '@mui/material/InputLabel';
// import TextField, { TextFieldProps } from '@mui/material/TextField';
// import FormControl from '@mui/material/FormControl';
// import { OutlinedInputProps } from '@mui/material/OutlinedInput';
// import { Button, MenuItem, Modal, Select, Typography } from '@mui/material';
// import Date from '../../components/date/Date';
// import App from '../../components/date/Date';
// import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
// import { SelectChangeEvent } from '@mui/material/Select';


// const BootstrapInput = styled(InputBase)(({ theme }) => ({
//   'label + &': {
//     marginTop: theme.spacing(3),
//   },
//   '& .MuiInputBase-input': {
//     borderRadius: 6,
//     position: 'relative',
//     backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
//     border: '1px solid gray',
//     borderColor: theme.palette.mode === 'light' ,
//     fontSize: 14,
//     width: '60vh',
//     padding: '10px 12px',
//     transition: theme.transitions.create([
//       'border-color',
//       'background-color',
//       'box-shadow',
//     ]),
//     // Use the system font instead of the default Roboto font.
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//     ].join(','),
//     '&:focus': {
//       boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
//       borderColor: theme.palette.primary.main,
//     },
//   },
// }));

// const CreateCohort = () => {
//   // const [name, setName] = useState('');
//   // const [description, setDescription] = useState('');
//   // const [program, setProgram] = useState('');
//   const [program, setProgram] = React.useState<string>('');

//   const handleChange = (event: SelectChangeEvent<string>) => { // Change the event type
//       setProgram(event.target.value as string);
//   };
//   // w-1/4 h-4/5
//   return (
//     <div className='flex flex-col ml-20 mt-24 bg-white gap-4 rounded-xl w-1/4 h-4/5 absolute py-12 px-10'>
//         <Typography variant='h5' style={{display: 'flex'}}>
//           Create Cohort
//         </Typography>
//         <Box maxHeight="80vh" overflow="scroll" >
          
//         {/* <div className='flex justify-center flex-col gap-8 '> */}
//           <FormControl variant="standard">
//             <InputLabel shrink htmlFor="bootstrap-input" style={{color: "#1E323F"}}>
//               Cohort Name
//             </InputLabel>
//             <BootstrapInput defaultValue="Ex. Cohort 1" id="bootstrap-input" style={{color: '#9CABB5'}} />
//           </FormControl>

//           <FormControl>
//             <InputLabel shrink htmlFor="bootstrap-input" style={{color: "#1E323F", marginRight: '50px'}}>
//               Description
//             </InputLabel>
//             <BootstrapInput defaultValue="Ex. A space for python developers" id="bootstrap-input" style={{color: '#9CABB5'}} />    
//           </FormControl>

//           <FormControl variant="standard">
//             <InputLabel shrink htmlFor="bootstrap-input" id="program-label" style={{color: "#1E323F"}}>Program</InputLabel>
//               <Select
//                 labelId="program-label"
//                 id="program-select"
//                 value={program}
//                 onChange={handleChange}
//                 input={<BootstrapInput />}
//               >
//                 <MenuItem value="">
//                   <em>None</em>
//                 </MenuItem>
//                   <MenuItem value="Ten">Ten</MenuItem>
//                   <MenuItem value="Twenty">Twenty</MenuItem>
//                   <MenuItem value="Thirty">Thirty</MenuItem>
//               </Select>
//           </FormControl>

//           <App />

          

//           <div className='-my-2'>
//             <Typography variant='body1' style={{marginRight: '20px'}}>
//               Add a cohort avatar
//             </Typography>
//             <div className='w-full h-28 bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg'>
//               <FileUploadOutlinedIcon className=''/>
//               <Typography>
//                 Drag and drop or <span className='text-blue-600'>choose a file</span> 
//               </Typography>
//               <Typography variant='body1' style={{color: '#9CABB5'}}>
//               240x240 px Recommended, max size 1MB 
//               </Typography>
//             </div>
//             <Typography variant='caption' style={{marginRight: '20px', color: '#475661'}}>
//               You can do this later
//             </Typography>
//           </div>

//           <div className='flex gap-4 justify-end'>
//             <Button variant='outlined' style={{color: '#008EEF', fontSize: '16px', fontWeight: '700', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif'}} sx={{ 
//               textTransform: 'none'}}>
//               Cancel
//             </Button>
//             <Button variant='contained' disabled style={{backgroundColor: '#D0DCE4', borderRadius: '8px', fontSize: '16px', fontWeight: '700', color: 'white', fontFamily: 'DM Sans, sans-serif'}} sx={{ 
//               textTransform: 'none'}}>
//               Create Cohort
//             </Button>
//           </div>
          

//         {/* </div>      */}
//       </Box>
//       </div>   
    
//   )
// }

// export default CreateCohort


import * as React from 'react';
import Button from '@mui/joy/Button';
import Stack from '@mui/joy/Stack';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import FormControl from '@mui/joy/FormControl';
import Select from '@mui/material/Select';
import FormLabel from '@mui/joy/FormLabel';
import Textarea from '@mui/joy/Textarea'
import { InputLabel, MenuItem, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { SelectChangeEvent } from '@mui/material/Select';
import App from '../../components/date/Date';


export default function CreateCohort() {
  const [program, setProgram] = React.useState('');
  const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);

  

  const handleChange = (event: SelectChangeEvent<string>) => {
    setProgram(event.target.value);
  };
  return (
    <div className='hidden sm:flex justify-center pt-10'>
      <React.Fragment>
        <Stack direction="row" spacing={1}>
          <div className='flex justify-center'>
            <Button
            // variant='contained'
              sx={{backgroundColor: "blue",
                color: 'white',
                lineHeight: '27px'
              }}
              onClick={() => {
                setLayout("center");
              }}
            >
              Create Cohort
            </Button>
          </div>
          
        </Stack>
        <Modal open={!!layout} onClose={() => setLayout(undefined)}>
          <ModalDialog layout={layout}>
            <ModalClose />
            <DialogTitle className="text-4xl font-serif">Create a Cohort</DialogTitle>
            <DialogContent>
              <FormControl>
                <FormLabel className='pt-10'>Cohort Name</FormLabel>
                <Textarea placeholder='Enter Cohort Name' minRows={1} />
              </FormControl>
              <FormControl >
                <FormLabel className='pt-10'>Description</FormLabel>
                <Textarea placeholder='Ex. A space for python developers' minRows={2} />
              </FormControl>
              <FormControl>
                <FormLabel className='pt-10'>Program</FormLabel>
                {/* <Textarea placeholder='Enter Cohort Name' minRows={2} /> */}
                
                {/* <InputLabel id="program-label" style={{color: "#1E323F"}}>Program</InputLabel> */}
                <Select
                  labelId="program-label"
                  id="program-select"
                  value={program}
                  label="Program"
                  onChange={handleChange}
                >
                    <MenuItem value="Product Design">Product Design</MenuItem>
                    <MenuItem value="Backend">Backend</MenuItem>
                    <MenuItem value="Frontend">FrontEnd</MenuItem>
                    <MenuItem value="Product MAnagement">Product Management</MenuItem>
                    <MenuItem value="DevOps">DevOps</MenuItem>
                    <MenuItem value="Data Science">Data Science</MenuItem>
                </Select>
              </FormControl>

              <App />

              {/* <FormControl>
                <EndDate />
              </FormControl> */}

              <FormControl className='pt-10' >
                <Typography>Add a cohort Avatar</Typography>
                <div className='flex flex-col items-center justify-center bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg'>
                  <FileUploadOutlinedIcon />
                  <Typography>
                      Drag and drop or <span className='text-blue-600'>choose a file</span>
                  </Typography>
                  <Typography>
                      240*240 px Recommended, max size 1MB
                  </Typography>
                </div>

                <Typography className='flex justify-start'>you can do this later</Typography>
              </FormControl>

              <div className='flex justify-end gap-2'>
                <Button variant='outlined' size='sm' sx={{color: '#008EEF', fontSize: '16px', 
                borderRadius: '8px', fontFamily: 'DM Sans, sans-serif' }}>Cancel</Button>
                <Button disabled size='sm' sx={{backgroundColor: '#D0DCE4', borderRadius: '8px', fontSize: '16px', 
                color: 'white', fontFamily: 'DM Sans, sans-serif',  }}>Create Cohort</Button>
              </div>


            </DialogContent>
          </ModalDialog>
        </Modal>
      </React.Fragment>
    </div>
  );
}
