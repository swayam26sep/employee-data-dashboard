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


export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 300, padding: 2 }}>
      <Box>
      <CardMedia
        sx={{ height: 240, width: 300, backgroundSize: "contain" ,margin: "auto" }}
        image= "profile4.png"
        title="profile image"
      />
      </Box>
      <PetsIcon />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          John
        </Typography>
        <Typography variant="body2" color="text.secondary">
         Department: UI|UX Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          position: UI Designer
        </Typography>
        <Stack direction="row" spacing={1} sx={{ marginTop: 2, justifyContent: "center"}}>
      <Chip label="Figma" />
      <Chip label="Adobe XD" />
      <Chip label="Sketch" />
    </Stack>
      </CardContent>
      <Stack direction="row" spacing={1} sx={{ marginTop: 2, justifyContent: "center"}}>
      <Chip label= "Active" variant= "outlined" />
      <Chip label= "Hours:20" variant= "outlined" />
    </Stack>
    </Card>
  );
}
