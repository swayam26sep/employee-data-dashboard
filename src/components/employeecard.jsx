import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';



export default function MediaCard({ data }){
  /* console.log(data); */
  return (
    <>
      {data.map((item, index) => (
        
        <Card sx={{ maxWidth: 300, padding: 2, marginTop:2 }}>

        <Box>
        <CardMedia
          sx={{ height: 240, width: 300, backgroundSize: "contain" ,margin: "auto" }}
          image={`/employee-data-dashboard/${item.image}`}
          title="profile image"
        />
        </Box>
        <PetsIcon />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.firstName } {item.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
           {item.department} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.position}
          </Typography>
          <Stack
           direction="row" 
           flexwrap="wrap"
           spacing={1} 
           sx={{ marginTop: 2, justifyContent: "center"}}>
        
        {item.skills.map ((skill,skillIndex)=>(
          <Chip key={skillIndex} label= {skill} />
        ))}
      </Stack>
        </CardContent>
        <Stack direction="row" spacing={1} sx={{ marginTop: 2, justifyContent: "center"}}>
        <Chip label= {item.onLeave ? "Inactive" : "Active"} variant= "outlined" />
        <Chip label= {`Hours: ${item.hoursLoggedThisWeek}`}
        variant="outlined"
        />
      </Stack>
      </Card>
        
        
   ))}
   </>
   
  );
}
