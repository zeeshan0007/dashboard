import React,{FC} from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import NavBar from './NavBar'
import LeftBar from './LeftBar'
import Feeds from './Feeds'
import RightBar from './RightBar'


const Dashboard:FC=()=> {
    console.log('dash board')
  return (
    <div>
        <NavBar/>
        <Grid container>
           <Grid item sm={2}>
               <LeftBar/>
           </Grid>
           <Grid item sm={7}>
               <Feeds/>
           </Grid>
           <Grid item sm={3}>
               <RightBar/>
           </Grid>
        </Grid>
    </div>
  )
}
export default Dashboard;