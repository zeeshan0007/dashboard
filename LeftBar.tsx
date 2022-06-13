import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
import Avatar from '@mui/material/Avatar';
import logo from '../../assets/images/doc_logo.png';
import imagee from '../../assets/images/rasmos.jpeg'
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';





const drawerWidth = 240;
const itemsList = [
  {
    text: 'Dashboard',
    icon: <DashboardOutlinedIcon />,
   onClick: () => {}
  },
  {
    text: 'Notifications',
    icon: <NotificationsActiveOutlinedIcon />,
    onClick: () => {}
  },
  {
    text: 'Chat',
    icon: <ChatOutlinedIcon />,
    onClick: () => {}
  },
  {
      text: 'Contact',
      icon: <PermContactCalendarOutlinedIcon />,
       onClick: () => {}
    }
];
const quickAccessList = [
  {
    text: 'Not Private Group',
    icon: <BookmarkOutlinedIcon />,
   onClick: () => {}
  },
  {
    text: 'Private Group',
    icon: <BookmarkOutlinedIcon />,
    onClick: () => {}
  },
  {
    text: 'New Group',
    icon: <BookmarkOutlinedIcon />,
    onClick: () => {}
  },
  {
      text: 'Order group',
      icon: <BookmarkOutlinedIcon />,
       onClick: () => {}
    },
    {
      text: 'New Group',
      icon: <BookmarkOutlinedIcon />,
      onClick: () => {}
    },
    {
        text: 'Order group',
        icon: <BookmarkOutlinedIcon />,
         onClick: () => {}
      }
];
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});


const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>

      <Drawer variant="permanent" open={open}>
      <div style={{backgroundColor:'#1E2129'}}>
        <Toolbar>
        
          <IconButton 
            color="primary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
         
           <img style={{width:'20px', height:'20px', marginTop:'30px',marginLeft:'20px',marginRight:'10px'}} src={logo} alt='logo'/>
          <span style={{color:'white'}}>OnlineDoc</span>
          <IconButton style={{color:'white'}}  onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
          
        </Toolbar>
        </div>
         <div style={{backgroundColor:'#1E2129',width:'100%',height:'15rem'}}>
       
          <div style={{color:'white', textAlign:'center',marginTop:'4rem'}}>
              <p>Sergio Ramas</p>
              <p style={{color:"rgba(255, 255, 255, 0.5)"}}>romas@yopmail.com</p>
          </div>
          </div>
          <div style={{backgroundColor:'#2D323E' ,justifyContent: "center", display: "flex" }}  >
          <Avatar  alt="Travis Howard" src={imagee} />
          </div>
        
        <div style={{backgroundColor:'#2D323E'}}>
        <List style={{color:'white'}}>
        <p style={{color:"rgba(255, 255, 255, 0.5)"}}>APPLICATIONS</p>
           {itemsList.map((item, index) => {
                  const { text, icon, onClick } = item;
                return (
                        <ListItem  button key={text} onClick={onClick}>
                        
                  {icon &&  <ListItemIcon sx={{
                        minWidth: 0,
                        mr: open ? 3 : 'auto',
                        justifyContent: 'center',
                      }} style={{color:'white'}}> {icon} </ListItemIcon>}
                        <ListItemText primary={text} />
                    </ListItem>
                    );
              })}
        </List>
        <Divider />
        <List style={{color:'white'}}>
              <p style={{color:"rgba(255, 255, 255, 0.5)"}}>QUICK ACCESS</p>
                  {quickAccessList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem  button key={text} onClick={onClick}>
                  {icon && <ListItemIcon style={{color:'white'}}>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })}
      </List>
      <div >
      <div >
      <Button style={{marginLeft:'10px',marginBottom:'4px', backgroundColor:'#1e2129', color:'white',borderRadius:'20px'}} variant="text" startIcon={<SearchIcon />}>
        Find new group
      </Button>
      </div>
      <div>
      <Button style={{marginLeft:'10px',backgroundColor:'#1e2129',color:'white',borderRadius:'20px'}} variant="text" startIcon={<AddIcon />}>
       Create new Group
      </Button>
      </div>
      </div>
     
   </div>
      </Drawer>
      
    </Box>
  );
}






























































// import React,{FC} from 'react'
// import {ListItemIcon} from '@mui/material';
// import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
// import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
// import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
// import PermContactCalendarOutlinedIcon from '@mui/icons-material/PermContactCalendarOutlined';
// import logo from '../../assets/images/doc_logo.png';
// import imagee from '../../assets/images/rasmos.jpeg'
// import Avatar from '@mui/material/Avatar';
// import BookmarkOutlinedIcon from '@mui/icons-material/BookmarkOutlined';
// import {
//     Drawer as MUIDrawer,
//     ListItem,
//     List,
//     ListItemText
// } from '@material-ui/core'


// const LeftBar:FC=()=> {
//     const itemsList = [
//         {
//           text: 'Dashboard',
//           icon: <DashboardOutlinedIcon />,
//          onClick: () => {}
//         },
//         {
//           text: 'Notifications',
//           icon: <NotificationsActiveOutlinedIcon />,
//           onClick: () => {}
//         },
//         {
//           text: 'Chat',
//           icon: <ChatOutlinedIcon />,
//           onClick: () => {}
//         },
//         {
//             text: 'Contact',
//             icon: <PermContactCalendarOutlinedIcon />,
//              onClick: () => {}
//           }
//       ];
      
//       const quickAccessList = [
//         {
//           text: 'Not Private Group',
//           icon: <BookmarkOutlinedIcon />,
//          onClick: () => {}
//         },
//         {
//           text: 'Private Group',
//           icon: <BookmarkOutlinedIcon />,
//           onClick: () => {}
//         },
//         {
//           text: 'New Group',
//           icon: <BookmarkOutlinedIcon />,
//           onClick: () => {}
//         },
//         {
//             text: 'Order group',
//             icon: <BookmarkOutlinedIcon />,
//              onClick: () => {}
//           }
//       ];
//   return (
//       <MUIDrawer variant='permanent'>
//           <div style={{backgroundColor:'#1E2129',width:'100%',height:'15rem'}}>
//           <img style={{width:'20px', height:'20px', marginTop:'30px',marginLeft:'20px',marginRight:'10px'}} src={logo} alt='logo'/>
//           <span style={{color:'white'}}>OnlineDoc</span>
//           <div style={{color:'white', textAlign:'center',marginTop:'4rem'}}>
//               <p>Sergio Ramas</p>
//               <p style={{color:"rgba(255, 255, 255, 0.5)"}}>romas@yopmail.com</p>
//           </div>
//           </div>
//           <div style={{backgroundColor:'#2D323E' ,justifyContent: "center", display: "flex" }}  >
//           <Avatar  alt="Travis Howard" src={imagee} sx={{ width: 60, height: 60 }} />
//           </div>
          
//           <div style={{backgroundColor:'#2D323E'}}>

//           <List style={{color:'white'}}>
//           <p style={{color:"rgba(255, 255, 255, 0.5)"}}>APPLICATIONS</p>
//               {itemsList.map((item, index) => {
//                   const { text, icon, onClick } = item;
//                 return (
//                     <ListItem  button key={text} onClick={onClick}>
//                         {icon && <ListItemIcon style={{color:'white'}}>{icon}</ListItemIcon>}
//                         <ListItemText primary={text} />
//                     </ListItem>
//                     );
//               })}
//            </List>
//            <List style={{color:'white'}}>
//               <p style={{color:"rgba(255, 255, 255, 0.5)"}}>QUICK ACCESS</p>
//                   {quickAccessList.map((item, index) => {
//               const { text, icon, onClick } = item;
//               return (
//                 <ListItem  button key={text} onClick={onClick}>
//                   {icon && <ListItemIcon style={{color:'white'}}>{icon}</ListItemIcon>}
//                   <ListItemText primary={text} />
//                 </ListItem>
//               );
//             })}
//       </List>
//           </div>

       
//       </MUIDrawer>
    
//   )
// }
// export default LeftBar;
