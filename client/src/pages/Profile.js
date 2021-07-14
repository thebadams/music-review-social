import React, {useEffect} from "react";
import styled from "styled-components";
import { makeStyles } from '@material-ui/core/styles';
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import ProfileTicket from "../components/ProfileComponents/ProfileTicket";
import ProfileCard from "../components/ProfileComponents/ProfileCard"
import { useAppStateContext } from "../utils/GlobalContext";
import axios from 'axios'
import getSession from "../utils/getSession";
import Earth from "../assets/img/Earth.jpg"

//StyleS
const ProfileStyle = styled.div`
background-image: url(${Earth});
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
background-attachment: fixed;
`;



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: '20%',
    marginBottom: '2%',
  },
  test:{
    background: 'red',
    display: 'flex',
  },

}));


export default function Profile () {
  const classes = useStyles;
  const [state, dispatch] = useAppStateContext();
  
  useEffect(()=> {
    if(!state.loggedIn) {
      getSession(dispatch)
    }
    
    console.log()
  }, [])

  
  return (  
    <ProfileStyle>
    <Grid container>
      <Grid item xs={4}>
      </Grid>
      <Grid item xs={6} md={4}>
        <Paper className={classes.test}>
          <ProfileCard firstName={state.user.firstName + " " } lastName={state.user.lastName}/>
          <ProfileTicket firstName={state.user.firstName + " " } lastName={state.user.lastName}/>
        </Paper>
      </Grid>
      <Grid item xs={4}>
        
        </Grid>
    </Grid>
    </ProfileStyle>
  
  )
};