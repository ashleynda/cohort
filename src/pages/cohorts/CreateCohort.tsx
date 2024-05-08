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
import { MenuItem, Typography } from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';
import { SelectChangeEvent } from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { FormEvent } from 'react';
import { ChangeEvent } from 'react';
import { updateCohortData, addFile, clearFile, incrementCohortCount } from '../../features/cohort/CohortSlice';
import DragAndDrop from '../../components/file/DragAndDrop';

import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';

// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';

interface CreateCohortProps {
  onFileUpload: (file: File) => void;
  onFileClear: () => void;
}
const CreateCohort: React.FC<CreateCohortProps> = ({ onFileUpload, onFileClear }) => {
  const [layout, setLayout] = React.useState<"center" | "fullscreen" | undefined>(undefined);
  const dispatch = useDispatch();
  const formData = useSelector((state: any) => ({
    cohortName: state.cohort?.cohortData?.cohortName || '',
    description: state.cohort?.cohortData?.description || '',
    program: state.cohort?.cohortData?.program || '',
    startDate: state.cohort?.cohortData?.startDate || '',
    endDate: state.cohort?.cohortData?.endDate || '',
  }));

  const handleCancel = () => {
    setLayout(false);
  }

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(updateCohortData({ ...formData, [e.target.name]: e.target.value }));
  };

  const handleProgramChange = (e: SelectChangeEvent<string>) => {
    dispatch(updateCohortData({ ...formData, program: e.target.value }));
  };

  const handleFileUpload = (file: File) => {
    dispatch(addFile(file)); 
  };

  const handleFileClear = () => {
    dispatch(clearFile()); 
  };


  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createCohort(formData));
    dispatch(incrementCohortCount());
    navigate('/instructorCohort');
    // Dispatch action to create cohort
  };

  const isFormFilled = () => {
    return (
      formData.cohortName?.trim() !== '' &&
      formData.description?.trim() !== '' &&
      formData.program?.trim() !== '' &&
      formData.startDate &&
      formData.endDate
    );
  };

  return (
    <div className='hidden sm:flex justify-center pt-10'>
      <React.Fragment>
        <Stack direction="row" spacing={1}>
          <div className='flex justify-center'>
            <Button
              sx={{backgroundColor: "primary", color: 'white', lineHeight: '27px'}}
              onClick={() => { setLayout("center"); }}
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
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel className='pt-10'>Cohort Name</FormLabel>
                  <Textarea placeholder='Enter Cohort Name' minRows={1} name="cohortName" value={formData.cohortName} onChange={handleInputChange} />
                </FormControl>
                <FormControl >
                  <FormLabel className='pt-10'>Description</FormLabel>
                  <Textarea placeholder='Ex. A space for python developers' minRows={2}  name="description" value={formData.description} onChange={handleInputChange}/>
                </FormControl>
                <FormControl>
                  <FormLabel className='pt-10'>Program</FormLabel>
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
                    <MenuItem value="Product MAnagement">Product Management</MenuItem>
                    <MenuItem value="DevOps">DevOps</MenuItem>
                    <MenuItem value="Data Science">Data Science</MenuItem>
                  </Select>
                </FormControl>

                <FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DemoContainer
                    components={['DateRangePicker']}
                  >
                    {/* <DemoItem label="startDate" component="DateRangePicker">
                      <DateRangePicker calendars={1} />
                    </DemoItem> */}
                    <DemoItem label="Responsive variant" component="DateRangePicker">
                      <DateRangePicker calendars={1}
                        defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
                      />
                    </DemoItem>                    
                  </DemoContainer>
                </LocalizationProvider>
                </FormControl>

                {/* <App /> */}
                <FormControl className='pt-10' >
                  <Typography>Add a cohort Avatar</Typography>
                  <div className='flex flex-col items-center justify-center bg-blue-100 border-dotted border-2 border-blue-400 p-4 rounded-lg'>
                    <FileUploadOutlinedIcon />
                    {/* <DragAndDrop onFileUpload={handleFileUpload} onFileClear={handleFileClear} />  */}
                    <DragAndDrop onFileUpload={onFileUpload} onFileClear={onFileClear} /> 

                    <Typography>
                        240*240 px Recommended, max size 1MB
                    </Typography>
                  </div>
                  <Typography className='flex justify-start'>you can do this later</Typography>
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
// }
