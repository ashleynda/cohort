// import * as React from 'react';
// import dayjs from 'dayjs';
// import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { MobileDateRangePicker } from '@mui/x-date-pickers-pro/MobileDateRangePicker';
// import { DesktopDateRangePicker } from '@mui/x-date-pickers-pro/DesktopDateRangePicker';
// import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
// import { pickersLayoutClasses } from '@mui/x-date-pickers/PickersLayout';

// export default function Date() {
//   return (
//     <LocalizationProvider dateAdapter={AdapterDayjs}>
//       <DemoContainer
//         components={[
//           'DateRangePicker',
//           'MobileDateRangePicker',
//           'DesktopDateRangePicker',
//           'StaticDateRangePicker',
//         ]}
//       >
//         <DemoItem component="MobileDateRangePicker">
//           <MobileDateRangePicker sx={{width: '80%', height: '44%', fontSize: '14px', fontWeight: '400', fontFamily: 'DM Sans', border: '1px solid #D0DCE4'}}
//             defaultValue={[dayjs('2022-04-17'), dayjs('2022-04-21')]}
//           />
//         </DemoItem>
//       </DemoContainer>
//     </LocalizationProvider>
//   );
// }