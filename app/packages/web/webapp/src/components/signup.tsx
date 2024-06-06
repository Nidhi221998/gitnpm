import React, { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import HomeImage from '../components/images/home.png'
import bgbottom from '../components/images/bottom_bg1.png'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import Navbar from './navbar';
import './css/homepage.css';
import './css/signup.css';

interface LinkProps {
  href: string;
  children: React.ReactNode;
}

const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

const ColumnsGrid: FC = () => {
  return (
    <>
      <div className="App">
        <div className='mainPage'>
          <Navbar />
          <Box sx={{ flexGrow: 1 }} padding={2} paddingTop={10} paddingBottom={0}>
            <Grid container spacing={2} columns={16} className='mainHome'>
              <Grid xs={8} padding={10}>
                <div className='signUp'>
                  <h3>Welcome to <span>AI Search Engine</span></h3>
                  <p>Get started to access the power of AI</p>
                  <FormControl className='fullWidth'>
                    <TextField type="text" size='small' placeholder='Enter your Email Id' fullWidth sx={{ mb: 3, mt: 3 }} required></TextField>
                    <TextField type="password" size='small' placeholder='Enter Password' fullWidth sx={{ mb: 3 }} required></TextField>
                    <TextField type="password" size='small' placeholder='Confirm Password' fullWidth sx={{ mb: 3 }} required></TextField>
                    <Button fullWidth variant="outlined" type="submit" className='styleButton' disabled>Sign Up</Button>
                  </FormControl>
                  <p className='lastPara'>Already have an account?
                    <span>
                      <RouterLink to="/login"> Login</RouterLink>
                    </span>
                  </p>
                </div>
              </Grid>
              <Grid xs={8} padding={1}>
                <img src={HomeImage} alt='Bannerimage' style={{ width: '70%', marginTop: '-60px' }} />
              </Grid>
            </Grid>
            <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div className='bgbottom'>
                <img src={bgbottom} alt='' />
              </div>
            </Box>
          </Box>
        </div>
      </div>
    </>
  );
}

export default ColumnsGrid;