import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { red } from '@mui/material/colors';
import AdvanceSearch from './images/AI-PoweredSearch.svg'
import MultipleCamera from './images/MultipleCamera.svg'
import RealTime from './images/Real-Time.svg'
import EasyAccess from './images/EasyAccess.svg'
import SecureLogin from './images/SecureLogin.svg'
import AdvanceFilter from './images/AdvanceFilter.svg'
import { FormControl } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Container from '@mui/material/Container';
import CloseIcon from '@mui/icons-material/Close';
import Link from '@mui/material/Link';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Dialog from '@mui/material/Dialog';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import LogoutIcon from '@mui/icons-material/Logout';
import Logo from './images/logo.png'
import './css/userhome.css';


const theme = createTheme();
theme.typography.h2 = {
    fontSize: '1.2rem',
    color: '#38328C',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
        paddingBottom: '1.87rem'
    },
};
theme.typography.h3 = {
    fontSize: '1.2rem',
    color: '#3A3A3A',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.625rem',
        paddingBottom: '1.25rem'
    },
};
theme.typography.h4 = {
    fontSize: '1.2rem',
    color: '#3A3A3A',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1.5rem',
    },
};
theme.typography.h5 = {
    fontSize: '.8rem',
    fontWeight: 'Bold',
    '@media (min-width:600px)': {
        fontSize: '.6rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '1rem',
    },
};

interface top100Films {
    image: string;
    label: string;
}

export default function MediaCard() {
    //**************Start
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<top100Films | undefined>();
    const handleChange = (_event: any, value: any) => {
        setSelectedOption(value);
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    //**************End*******************

    return (
        <>
            <div className="App">
                <div className='mainPage'>
                    <Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            textAlign: 'center',
                            backgroundColor: '#fff'
                        }}
                            padding={10}
                            paddingTop={5}
                            paddingBottom={5}
                        >
                            <div className="logo">
                                <Link href="/">
                                    <img src={Logo} alt="logo" />
                                    <span className='logo_title'>AI Search Engine</span>
                                </Link>
                            </div>
                            <Box sx={{ display: 'flex' }}>
                                <Avatar sx={{ bgcolor: red[500], alignItems: 'right', marginRight: 1 }} aria-label="recipe">N</Avatar>
                                <Link href="/login">
                                    <Avatar sx={{ bgcolor: '#F2F2F2' }}><LogoutIcon sx={{ color: '#38328C' }} /></Avatar>
                                </Link>
                            </Box>
                        </Box>
                        <Box sx={{ flexGrow: 1 }} padding={0} paddingTop={10} paddingBottom={0} className='main_bg'>
                            <ThemeProvider theme={theme}>
                                <Typography variant="h2">Hi XYZ!</Typography>
                                <Typography variant="h3">Please select the company of your camera</Typography>
                            </ThemeProvider>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Autocomplete
                                    disablePortal
                                    className='search_Camera'
                                    id="combo-box-demo"
                                    options={top100Films}
                                    onChange={handleChange}
                                    sx={{
                                        width: 600,
                                        borderRadius: 10,
                                        backgroundColor: 'white',
                                    }}
                                    renderOption={(props, option) => (
                                        <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props} >
                                            <img
                                                loading="lazy"
                                                width="80"
                                                height="50"
                                                src={option.image}
                                                alt=""
                                            />
                                            {option.label}
                                        </Box>
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Search or select from dropdown"
                                            inputProps={{
                                                ...params.inputProps, autoComplete: 'new-password', // disable autocomplete and autofill                                                     
                                            }}
                                        />
                                    )}
                                />
                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    sx={{
                                        '& .MuiDialog-paper': {
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            paddingTop: 5,
                                            paddingBottom: 10,
                                            borderRadius: 5
                                        }
                                    }}
                                    maxWidth="sm"
                                    className='signUp home'
                                >
                                    <IconButton
                                        aria-label="close"
                                        onClick={handleClose}
                                        sx={{
                                            position: 'absolute',
                                            left: 18,
                                            top: 25,
                                            color: (theme) => theme.palette.grey[500],
                                        }}
                                    >
                                        <CloseIcon sx={{ fontSize: '2.5rem' }} />
                                    </IconButton>
                                    <ThemeProvider theme={theme}>
                                        <div className='company-logo'>
                                            {selectedOption && <img src={selectedOption.image} />}
                                            <Typography variant="h2" sx={{ width: '100%', textAlign: 'center' }}>
                                                {selectedOption && <span>{selectedOption.label}</span>}
                                            </Typography>
                                        </div>
                                    </ThemeProvider>
                                    <DialogContent sx={{ width: '70%' }}>
                                        <DialogContentText>Enter your Login credentials:</DialogContentText>
                                        <FormControl className='fullWidth' sx={{ width: '100%', display: 'block' }}>
                                            <TextField type="text" size='small' placeholder='User Id' fullWidth sx={{ mb: 3, mt: 3 }} required></TextField>
                                            <TextField type="password" size='small' placeholder='Password' fullWidth sx={{ mb: 3 }} required></TextField>
                                            <Link href="/dashboard">
                                                <Button variant="outlined" type="submit" className='styleButton' fullWidth sx={{ mt: 2 }} disabled>
                                                    Login
                                                </Button>
                                            </Link>
                                        </FormControl>
                                        <p className='lastPara'>
                                            <span>
                                                <Link href="/signup"> Need Help?</Link>
                                            </span>
                                        </p>
                                    </DialogContent>
                                </Dialog>
                            </Box>
                            <Container maxWidth="xl">
                                <Box sx={{ '& button': { m: 1 }, display: 'flex', alignItems: 'center', justifyContent: 'center' }} className='provide'>
                                    <Box className='what_we' sx={{ marginLeft: 5, marginRight: 5 }}>What we provide</Box>
                                </Box>
                            </Container>
                            <Box sx={{
                                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px',
                                paddingTop: 10
                            }} className='provide1'>
                                <Card sx={{ minWidth: 209, height: 136 }} className='providess'>
                                    <div className='avt'>
                                        <img alt="Remy Sharp" src={AdvanceSearch} />
                                    </div>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                AI-Powered <br></br>Search
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 209, height: 136 }} className='providess'>
                                    <div className='avt'>
                                        <img alt="Remy Sharp" src={MultipleCamera} />
                                    </div>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Multiple <br></br>Camera Support
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 209, height: 136 }} className='providess'>
                                    <div className='avt'>
                                        <img alt="Remy Sharp" src={RealTime} />
                                    </div>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Real-Time Alerts
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 209, height: 136 }} className='providess'>
                                    <div className='avt'>
                                        <img alt="Remy Sharp" src={EasyAccess} />
                                    </div>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Easy Access <br></br>and Control
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 209, height: 136 }} className='providess'>
                                    <div className='avt'>
                                        <img alt="Remy Sharp" src={SecureLogin} />
                                    </div>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Secure Login
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                                <Card sx={{ minWidth: 209, height: 136 }} className='providess'>
                                    <div className='avt'>
                                        <img alt="Remy Sharp" src={AdvanceFilter} />
                                    </div>
                                    <CardContent>
                                        <ThemeProvider theme={theme}>
                                            <Typography gutterBottom variant="h5" component="div">
                                                Advance Filter<br></br> options
                                            </Typography>
                                        </ThemeProvider>
                                    </CardContent>
                                </Card>
                            </Box>
                            <Container maxWidth="xl">
                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', paddingTop: 10 }}>
                                    <div className='footer'>
                                        <ul>
                                            <li>Our Services</li>
                                            <li>About</li>
                                            <li>Contact Us</li>
                                        </ul>
                                    </div>
                                </Box>
                            </Container>
                        </Box>
                    </Box>
                </div>
            </div>
        </>
    );
}

// For DropDown List of Company camera
const top100Films = [
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

// export default MediaCard;