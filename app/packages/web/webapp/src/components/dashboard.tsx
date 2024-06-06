import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from './images/logo.png'
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import GridViewIcon from '@mui/icons-material/GridView';
import Card from '@mui/material/Card';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GridViewSharpIcon from '@mui/icons-material/GridViewSharp';
import SquareIcon from '@mui/icons-material/Square';
import Live from './images/live.svg'


import './css/dashboard.css'

import { useState } from 'react';



const drawerWidth = 250;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: '6px solid #6C63FF'
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  borderRight: '6px solid #6C63FF',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  close?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, close }) => ({
  // zIndex: theme.zIndex.drawer + 1, 
  backgroundColor:'var(--white-color)',
  boxShadow:'none',
  borderBottom: '1px solid #eee',
  width: `calc(100% - 65px)`, // for right margin when sidemenu close  
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

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





//************************/
export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const toggleButton = () => {
    setOpen(preState => !preState);
  }


  return (

    // const [age, setAge] = useState(42);
    // function increment() {
    //   setAge(a => a + 1);
    // }

    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar sx={{ justifyContent: 'space-between', bgcolor: '#fff', color: '#38328C' }}>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
            <Box sx={{ display: 'flex' }}>
              <Avatar sx={{ bgcolor: 'red', alignItems: 'right', marginRight: 1 }} aria-label="recipe">N</Avatar>
            </Box>
          </Toolbar>
          <Box sx={{
            display: 'flex',
            alignItems:'center',
            justifyContent:'space-between',
            padding: '1rem 2rem',
            bgcolor: '#fff',
            color:'#000',
            borderTop:'3px solid #eee'
          }}>
            <Box sx={{
              fontSize: '1rem',
              fontWeight: '500',
              color:'var(--font-color)',
              display:'flex',
              alignItems:'center'
            }}><img src={Live} alt='image'/><span className='liveVideo'>              
              Live Videos</span></Box>
            <Box sx={{
              background: 'var(--active-color)',
              padding: '.6rem .3rem',
              borderRadius: '4px',
              width:'124px',
              display: 'flex',
            alignItems:'center',
            justifyContent:'center',
            fontSize: '1rem',
            fontWeight: '500',
            }}            
            ><SquareIcon /><span className='viewmore'>View</span></Box>
          </Box>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Box padding={1.4}>
            <div className="logo">
              <Link href="/">
                <img src={Logo} alt="logo" />
                <span className='logo_title' style={{ fontSize: '18px' }}>AI Search Engine</span>
              </Link>
            </div>
            <Box sx={{
              display: 'flex', flexFlow: 'column', alignItems: 'center',
              ...(!open && { display: 'none', }),
            }}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg' width={80} />
              <Typography variant="h6">
                Hikvision
              </Typography>
            </Box>
          </Box>
          <Divider />
          <List>
            <ListItemButton sx={{ marginBottom: '20rem', background: '#38328C21',
            borderLeft: '5px solid #38328c'}}>
              <ListItemIcon>
                <GridViewIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
            <ListItemButton>
              <ListItemIcon>
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Log Out" />
            </ListItemButton>
          </List>
          <IconButton onClick={toggleButton} sx={{
            display: 'flex', position: 'absolute', top: '50%',
            width: '32px',
            height: '32px',
            border: '1px solid #38328C',
            color: '#6C63FF',
            bgcolor: '#fff',
            right: 0
          }}>
            {open ? (<ArrowBackIcon />) : (<ArrowForwardIcon />)}
          </IconButton>
          <Divider />
        </Drawer>
        <Box component="main" sx={{
          flexGrow: 1, p: 3,
          display: 'flex',
          gap: '15px',
          flexWrap: 'wrap',
          paddingTop: '180px'
        }}>
          <Card sx={{
            maxWidth: 364, padding: 1, bgcolor: '#3A3A3A', color: '#fff',
            borderRadius: '10px',
          }}>
            <Typography gutterBottom variant="h5" component="div" textAlign={'center'}>
              Camera 1
            </Typography>
            <Typography variant="body2" color="#fff" textAlign={'right'} >
              20-05-2024
              <span>12:25:02</span>
            </Typography>
            <iframe width="100%" height="186" src="https://www.youtube.com/embed/NeUfmyu5t8Q?si=rPOQ8bAnkzDI-Osn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </Card>
          
        </Box>
      </Box>
    </>
  );
}





const cameraList = [
  { label: 'Hikvision', image: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Hikvision_logo.svg" },
  { label: 'Dahua Technology', image: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Dahua_Technology_logo.svg" },
  { label: 'Axis Communications', image: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Axis_Communications_logo.svg" },
  { label: 'Bosch Security Systems', image: "https://upload.wikimedia.org/wikipedia/commons/1/16/Bosch-logo.svg" },
  { label: 'Honeywell', image: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Honeywell_logo.svg" },
  { label: "Samsung (Hanwha Techwin)", image: "https://www.logo.wine/a/logo/Hanwha_Techwin/Hanwha_Techwin-Logo.wine.svg" },
  { label: 'Sony', image: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Sony_logo.svg" },
  { label: 'Panasonic', image: "https://w7.pngwing.com/pngs/505/740/png-transparent-logo-panasonic-brand-design-text-logo-black-and-white.png" },
  { label: 'FLIR Systems', image: "https://www.flir.com/favicon.ico?v=BGAzqrlnJz" },
  { label: 'Avigilon', image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Avigilon_logo.svg" }
]
