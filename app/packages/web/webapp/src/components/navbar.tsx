import React, { FC, ReactNode } from 'react';
import { Link as RouterLink} from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Logo from './images/logo.png'
import './css/navbar.css';

interface LinkProps {
  href: string;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ href, children }) => {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
};

const Navbar: FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} padding={10} paddingTop={5} paddingBottom={0}>
        <Grid container spacing={2} columns={16}>
          <ul className='menu_list'>
            <div className="logo">
              <RouterLink to="/" >
                <img src={Logo} alt="logo" />
                <span className='logo_title' style={{ color: '#fff' }}>AI Search Engine</span>
              </RouterLink>
            </div>
            <div className='hellddo'>
              <div className='menu_name'>             
                <li className='menu_item'><a href="#">Our Services</a></li>
                <li className='menu_item'><a href="#">About</a></li>
                <li className='menu_item'><a href="#">Contact Us</a></li>
              </div>
              <div className='login'>
                <RouterLink to="/signUp">Login/SignUp</RouterLink>
              </div>
            </div>
          </ul>
        </Grid>
      </Box>
    </>
  );
}

export default Navbar;