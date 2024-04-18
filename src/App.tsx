import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Workspace from './pages/workspace/Workspace';
// import { useRoutes } from 'react-router-dom';
// import { ROUTES } from './routes/Routes';


// function App() {
//   return (
//     useRoutes(ROUTES)
//   );
// }

// export default App;
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Workspace />}/> 
          {/* <Route path='/registration' element={<Registration />}/>  
          <Route path='/signin' element={<Signin />}/>  
          <Route path='/games' element={<Games />}/> */}
        </Routes>
      </BrowserRouter>
    </div>    
  )
}

export default App;
