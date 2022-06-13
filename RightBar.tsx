import React,{FC} from 'react'

import PictureAsPdfOutlinedIcon from '@mui/icons-material/PictureAsPdfOutlined';
import { Divider } from '@mui/material';
import { CardActionArea } from '@mui/material';
import { CardMedia,IconButton } from '@mui/material';
import { CardContent } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import AddTaskIcon from '@mui/icons-material/AddTask';


const tasks = [
  {
    value: 'All',
    label: 'All',
  },
  {
    value: 'Today Only',
    label: 'Today Only',
  },
  {
    value: 'Today and Past',
    label: 'Today and Past',
  },
  {
    value: 'Today and Forward',
    label: 'Today and Forward',
  },
];


const RightBar:FC=()=> {
  
    const [task, setTask] = React.useState('EUR');
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTask(event.target.value);
    };
  
    return (
      <div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{marginTop:'20px'}}>
          <TextField
            id="outlined-select-currency"
            select
            label="Filter Tasks"
            value={task}
            onChange={handleChange}
          
          >
            {tasks.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
         
            <IconButton size='large' style={{marginTop:'10px'}}>
              <AddTaskIcon/>
           </IconButton>
         
       
        </div>
       
      </Box>
      
   

        <CardActionArea>
        <CardContent>
          <p>1. Creating Orders</p>
          </CardContent>
          <CardMedia>
            <div style={{ alignItems: "center"}}>
            <PictureAsPdfOutlinedIcon fontSize='large'/>
            </div>
            <Divider/>
          
          </CardMedia>
          
        </CardActionArea>
        <CardActionArea>
        <CardContent>
          <p>2. Ambassadors</p>
          </CardContent>
          <CardMedia>
            <div style={{ alignItems: "center"}}>
            <PictureAsPdfOutlinedIcon fontSize='large'/>
            </div>
            <Divider/>
          
          </CardMedia>
          
        </CardActionArea>
        <CardActionArea>
        <CardContent>
          <p>3. Shared Module</p>
          </CardContent>
          <CardMedia>
            <div style={{ alignItems: "center"}}>
            <PictureAsPdfOutlinedIcon fontSize='large'/>
            </div>
            <Divider/>
          
          </CardMedia>
          
        </CardActionArea>
    </div>
  )
}
export default RightBar;