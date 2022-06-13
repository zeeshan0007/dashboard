import React,{FC} from 'react';
import "./cssfiles/feedPosts.css"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import { IconButton, TextField,InputAdornment,Button } from '@mui/material';
import NotificationsOffOutlinedIcon from '@mui/icons-material/NotificationsOffOutlined';
import hus1 from '../../assets/images/a4.jpg'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';

const FeedPosts:FC=()=> {

  return ( 
    <div className='feedpost'>
         <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} src={hus1} />
        }
        action={
          <IconButton aria-label="settings">
            <NotificationsOffOutlinedIcon />
          </IconButton>
        }
        title="Mike Ross"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        image={hus1}
        alt="Husky"
      />
      <div className='comnt'>
        <span className='av'>
            <Avatar src={hus1} />
        </span>
        <span className='cm'>
            <CardActions disableSpacing>
            <TextField 
            fullWidth 
            placeholder='Enter your comment'  
            InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <EmojiEmotionsOutlinedIcon/>
                        </InputAdornment>
                                ),
                        }}></TextField>
        
            </CardActions>
        </span>

      </div>
      <div className="btnfp">
        <Button variant='contained'>Post Comment</Button>
        <span className="sfd"><AttachmentOutlinedIcon/></span>
      </div>
    </Card>
    </div>
   
  );
}
export default FeedPosts;