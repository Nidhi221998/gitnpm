import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import HomeImage from './images/home.png'
import scrollDown from './images/scrolldown.svg'
import bgbottom from './images/bottom_bg1.png'
import farrow from './images/farrow.png'
import Navbar from './navbar';
import Button from '@mui/material/Button';
import './css/homepage.css';



const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  padding: theme.spacing(),
  paddingTop: theme.spacing(),
  paddingBottom: theme.spacing(),
  textAlign: 'left',
  //color: theme.palette.text.secondary,
}));

// export default function HomePage() {
const HomePage = () => {
  return (
    <>
      <div className="App">
        <div className='mainPage'>
          <Navbar />
          <Box sx={{ flexGrow: 1 }} padding={10} paddingTop={10} paddingBottom={0}>
            <Grid container spacing={2} columns={16} className='mainHome'>
              <Grid xs={8}>
                <div className='hello'>
                  <h1>Your intelligent CCTV <br />camera <span>search engine.</span></h1>
                  <p>Introducing our Intelligent CCTV Camera Search Engine - revolutionizing surveillance! Our advanced technology enables seamless tracking, analysis, and retrieval of footage, empowering users with unparalleled control and security. Experience next-level surveillance with our cutting-edge solution.</p>
                  <Button className='farrow' variant="contained">
                    Request a Demo
                    <img src={farrow} alt='image' />
                  </Button>
                </div>
              </Grid>
              <Grid xs={8}>
                <img src={HomeImage} alt='' style={{ width: '70%', marginTop: '-60px' }} />
              </Grid>
            </Grid>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className='bgbottom'>
                <img src={bgbottom} alt='' />
              </div>
              <div className='scrollDown'>
                <a href='#'>
                  <img src={scrollDown} alt='' />
                </a>
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default HomePage;
