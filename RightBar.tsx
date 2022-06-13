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
import "./cssfiles/rightBar.css"
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

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
      <div className='RightBar'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div className='filterRB'>
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
      <div className='taskCard'>
      <CardActionArea>
          <CardContent>
            <p>1. Creating Orders</p>
          </CardContent>
          <CardMedia>
            <div  className='pdfdiv'>
            <PictureAsPdfOutlinedIcon fontSize='large'/>
            </div>
            <Divider/>
            <p className='category'></p>
            <p className='txt'>ajsdasd</p>
            <div className='time'>
              <span>
                <AccessTimeOutlinedIcon fontSize='small'/>
              </span>
              <span className='da'>April 9,2022</span>
            </div>
            <Divider/>
            
          </CardMedia>
          <div className='btm'>
            <span className='s1'> 
              <DescriptionOutlinedIcon/>
            </span>
            <span className='s2'> <AttachmentOutlinedIcon/></span>
            </div>
        </CardActionArea>
      </div>
      <div className='taskCard'>
      <CardActionArea>
          <CardContent>
            <p>1. Creating Orders</p>
          </CardContent>
          <CardMedia>
            <div  className='pdfdiv'>
            <PictureAsPdfOutlinedIcon fontSize='large'/>
            </div>
            <Divider/>
            <p className='category'></p>
            <p className='txt'>ajsdasd</p>
            <div className='time'>
              <span>
                <AccessTimeOutlinedIcon fontSize='small'/>
              </span>
              <span className='da'>April 9,2022</span>
            </div>
            <Divider/>
            
          </CardMedia>
          <div className='btm'>
            <span className='s1'> 
              <DescriptionOutlinedIcon/>
            </span>
            <span className='s2'> <AttachmentOutlinedIcon/></span>
            </div>
        </CardActionArea>
      </div>
      <div className='taskCard'>
      <CardActionArea>
          <CardContent>
            <p>1. Creating Orders</p>
          </CardContent>
          <CardMedia>
            <div  className='pdfdiv'>
            <PictureAsPdfOutlinedIcon fontSize='large'/>
            </div>
            <Divider/>
            <p className='category'></p>
            <p className='txt'>ajsdasd</p>
            <div className='time'>
              <span>
                <AccessTimeOutlinedIcon fontSize='small'/>
              </span>
              <span className='da'>April 9,2022</span>
            </div>
            <Divider/>
            
          </CardMedia>
          <div className='btm'>
            <span className='s1'> 
              <DescriptionOutlinedIcon/>
            </span>
            <span className='s2'> <AttachmentOutlinedIcon/></span>
            </div>
        </CardActionArea>
      </div>
        
    </div>
  )
}
export default RightBar;