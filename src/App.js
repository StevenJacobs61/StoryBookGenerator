import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/home';

function App() {
  return (
    <>
    <CssBaseline/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
    </>
  );
}

export default App;
