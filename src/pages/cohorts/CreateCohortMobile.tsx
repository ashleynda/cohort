import React from 'react'
import Mobileoption from '../../components/mobile/MobileOption'
import { alpha, Box, Button, Container, FormControl, InputBase, InputLabel, MenuItem, Select, styled, Typography } from '@mui/material'
import { SelectChangeEvent } from '@mui/material/Select';

import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import App from '../../components/date/Date';

const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 6,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid gray',
      borderColor: theme.palette.mode === 'light' ,
      fontSize: 14,
      width: '40vh',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  

const CreateCohortMobile = () => {
    const [program, setProgram] = React.useState<string>('');

    const handleChange = (event: SelectChangeEvent<string>) => { // Change the event type
        setProgram(event.target.value as string);
    };
  return (
    <Container maxWidth={false}>
      
        <Mobileoption />
        <Box sx={{marginTop: ''}}>
            <Typography variant='h6' className=''>
                Create Cohort
            </Typography>
            <div className='space-y-4 '>
              <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input" style={{color: "#1E323F"}}>
                  Cohort Name
                </InputLabel>
                <BootstrapInput defaultValue="Ex. Cohort 1" id="bootstrap-input" style={{color: '#9CABB5'}} />
               </FormControl>

              <FormControl>
                <InputLabel shrink htmlFor="bootstrap-input" style={{color: "#1E323F", marginRight: '50px'}}>
                  Description
                </InputLabel>
                <BootstrapInput defaultValue="Ex. A space for python developers" id="bootstrap-input" style={{color: '#9CABB5'}} />    
              </FormControl>

              <FormControl variant="standard">
                <InputLabel shrink htmlFor="bootstrap-input" id="program-label" style={{color: "#1E323F"}}>Program</InputLabel>
                  <Select
                    labelId="program-label"
                    id="program-select"
                    value={program}
                    onChange={handleChange}
                    input={<BootstrapInput />}
                  >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                            <MenuItem value="Ten">Ten</MenuItem>
                            <MenuItem value="Twenty">Twenty</MenuItem>
                            <MenuItem value="Thirty">Thirty</MenuItem>
                        </Select>
                </FormControl>
                <App />
                

        <div className='-my-2'>
          <Typography variant='body1' style={{marginRight: '250px'}}>
            Add a cohort avatar
          </Typography>
          <div className='w-full h-28 bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg'>
            <FileUploadOutlinedIcon className=''/>
            <Typography>
              Drag and drop or <span className='text-blue-600'>choose a file</span> 
            </Typography>
            <Typography variant='body1' style={{color: '#9CABB5'}}>
            240x240 px Recommended, max size 1MB 
            </Typography>
          </div>
          <Typography variant='caption' style={{marginRight: '280px', color: '#475661'}}>
            You can do this later
          </Typography>
        </div>

        <div className='flex gap-4 justify-end'>
          <Button variant='outlined' style={{color: '#008EEF', fontSize: '16px', fontWeight: '700', borderRadius: '8px', fontFamily: 'DM Sans, sans-serif'}} sx={{ 
            textTransform: 'none'}}>
            Cancel
          </Button>
          <Button variant='contained' disabled style={{backgroundColor: '#D0DCE4', borderRadius: '8px', fontSize: '16px', fontWeight: '700', color: 'white', fontFamily: 'DM Sans, sans-serif'}} sx={{ 
            textTransform: 'none'}}>
            Create Cohort
          </Button>
        </div>


            </div>
        </Box>
    </Container>
)
}

export default CreateCohortMobile