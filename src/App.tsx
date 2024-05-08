import './App.css';
import { ROUTES } from './route/Routes';
import { useRoutes } from 'react-router-dom';

function App() {
  return (
    useRoutes(ROUTES)  
  );
}

export default App;

