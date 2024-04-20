import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title';
import MediaCard from './components/employeecard.jsx';
import Data from './data/data.js';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';




function App() {
const [onLeave, setleave] = useState(true);
console.log(onLeave);
  return (
    <Container fixed>
    <Stack spacing={2} direction="row">
    <Button variant="contained">Active</Button>
    <Button variant="contained">Inactive</Button>
    </Stack>
<MediaCard data={Data} />
 </Container> )
}

export default App
