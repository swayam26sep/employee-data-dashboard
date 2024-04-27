import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title';
import MediaCard from './components/employeecard.jsx';
import Data from './data/data.js';
import { Box, Container } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';


function App() {
const [showOnLeave, setShowOnLeave] = useState(false);
console.log(showOnLeave);

const filteredData = showOnLeave ? Data.filter((employee)=> employee.onLeave ) : Data;

const toggleOnLeave = (event) => { if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true) };

  return (
    <Container fixed> 
      <Box>
      <Typography variant="h4" component="h1">
       Employee Dashboard
      </Typography>
      </Box>
    <Stack spacing={2} direction="row" justifycontent="center">
    <Switch onChange= {toggleOnLeave} />
    </Stack>
    <MediaCard data={filteredData} />
 </Container> 
 );
}

export default App
