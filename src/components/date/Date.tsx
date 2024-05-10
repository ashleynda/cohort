// import React, { useState } from 'react';
// import DatePicker from 'react-datepicker'; // You'll need to install react-datepicker: npm install react-datepicker --save
// import 'react-datepicker/dist/react-datepicker.css'; // Import the CSS
// import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';

// interface DatePickProps {
//   startDate: Date | null;
//   onStartDateChange: (date: Date | null) => void;
//   endDate: Date | null;
//   onEndDateChange: (date: Date | null) => void;
// }

// const MyDatePicker: React.FC<DatePickProps> = ({
//   startDate,
//   onStartDateChange,
//   endDate,
//   onEndDateChange,
// }) => {
//   return (
//     <div className="flex gap-4 pt-10">  {/* Arrange pickers horizontally */}
//       <div className='flex '>
//         <div className='flex flex-col relative '>
//           <label htmlFor="startDate" className='mr-24'>Start Date:</label>
//           <div className="relative">
//             <DatePicker
//               selected={startDate}
//               placeholderText='23 Dec 2021' 
//               onChange={onStartDateChange}
//               dateFormat="yyyy-MM-dd"
//               maxDate={endDate}
//               className="mr-2 border-solid border-2 border-gray-300 rounded-md px-2 py-1 text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-40"  
//             />
//             <CalendarTodayOutlinedIcon className="absolute top-1/2 transform -translate-y-1/2 right-6 w-4 h-4 fill-current text-gray-400" />    
//           </div>  
//         </div>
//       </div>

//       <div className='flex '>
//         <div className='flex flex-col relative'>
//           <label htmlFor="endDate" className='mr-24'>End Date:</label>
//           <div className="relative">
//             <DatePicker
//               selected={endDate}
//               placeholderText='23 Dec 2021'
//               onChange={onEndDateChange}
//               dateFormat="yyyy-MM-dd"
//               minDate={startDate}
//               className="mr-2 border-solid border-2 border-gray-300 rounded-md px-2 py-1 text-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500 w-40"  // Apply Tailwind classes
//             />
//             <CalendarTodayOutlinedIcon className="absolute top-1/2 transform -translate-y-1/2 right-4 w-4 h-4 fill-current text-gray-400" />
//           </div>
//         </div>
//       </div>
   
     
//     </div>
//   );
// };

// const App: React.FC = () => {
//   const [startDate, setStartDate] = useState<Date | null>(null);
//   const [endDate, setEndDate] = useState<Date | null>(null);

//   const handleStartDateChange = (date: Date | null) => {
//     setStartDate(date);
//     if (date && endDate && date > endDate) {
//       setEndDate(null); // Reset end date if it's after the new start date
//     }
//   };

//   const handleEndDateChange = (date: Date | null) => {
//     setEndDate(date);
//     if (date && startDate && date < startDate) {
//       setStartDate(null); // Reset start date if it's after the new end date
//     }
//   };

//   return (
//     <div>
//       <MyDatePicker
//         startDate={startDate}
//         onStartDateChange={handleStartDateChange}
//         endDate={endDate}
//         onEndDateChange={handleEndDateChange}
//       />
//       {/* You can display the selected dates here */}
//       {startDate && endDate && (
//         <p>
//           Selected Dates: {startDate.toLocaleDateString()} - {endDate.toLocaleDateString()}
//         </p>
//       )}
//     </div>
//   );
// };

// export default App;




// import React from 'react';
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { makeStyles } from '@material-ui/core';
// import TextField from '@mui/material/TextField'; // Import TextField
// import dayjs from 'dayjs';
// import 'dayjs/locale/en';
// import { Theme } from '@mui/material';
// import { TextFieldProps } from '@mui/material/TextField';

// dayjs.locale('en');

// const useStyles = makeStyles((theme: Theme) => ({
//   container: {
//     display: 'flex',
//     paddingBottom: theme.spacing()
//   },
//   textField: {
//     fontSize:"20px", 
//   },
// }));

// export default function StartDate() {
//   const classes = useStyles();

//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <div className={classes.container}>
//         <div>
//           <label>Start Date</label>
//           <DemoContainer components={['DatePicker']} sx={{width:"200px",height:"60px",paddingRight:"25px"}}>
//             <DatePicker
//               disablePast
//               renderInput={(params: TextFieldProps) => (
//                 <TextField {...params} variant="standard" label="Start Date" className={classes.textField} /> // Apply custom style
//               )}
//               format="DD MMM YYYY" 
//             />
//           </DemoContainer>
//         </div>
//         <div className='pl-5'>
//           <label>End Date</label>
//           <DemoContainer components={['DatePicker']} sx={{width:"200px"}}>
//             <DatePicker
//               disablePast
//               renderInput={(params: TextFieldProps) => (
//                 <TextField {...params} variant="standard" label="End Date" className={classes.textField} /> // Apply custom style
//               )}
//               format="DD MMM YYYY" 
//             />
//           </DemoContainer>
//         </div>
//       </div>
//     </LocalizationProvider>
//   );
// }