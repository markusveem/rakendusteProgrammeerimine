import logo from './logo.svg';
import './App.css';
import Arvutus from './components/Arvutus'
import ArvutusFunk from './components/ArvutusFunk';
import Mui from './components/Mui.js';
import { Input } from '@mui/material';

function App() {
  return (
    <div className='App'>
      <Arvutus />
      <Mui />
      {/* <ArvutusFunk name="Maku"/> */}
    </div>
  )
}

export default App;
