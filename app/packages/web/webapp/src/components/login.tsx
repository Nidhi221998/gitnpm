import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { FormControl } from '@mui/material';
import HomeImage from '../components/images/home.png'
import bgbottom from '../components/images/bottom_bg1.png'
import Navbar from './navbar';
import Link from '@mui/material/Link';
import validator from 'validator';
import { useState } from "react"; 
import './css/homepage.css';
import './css/signup.css';
import { FormProvider, useForm, SubmitHandler } from 'react-hook-form'
import { useEffect } from "react";


type Inputs = {
    example: string
    email: string
    password:string
  }

export default function ColumnsGrid(this: any) {
    
    const {register, handleSubmit, watch, formState: { errors }} = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)    
    console.log(watch("example"), '?????????????????????????') // watch input value by passing the name of it

    return (
        <>
            <div className="App">
                <div className='mainPage'>
                    <Navbar />
                    <Box sx={{ flexGrow: 1 }} padding={2} paddingTop={10} paddingBottom={0}>
                        <Grid container spacing={2} columns={16} className='mainHome'>
                            <Grid xs={8} padding={10}>
                                <div className='signUp'>
                                    <h3>Welcome Back</h3>
                                    <p>Continue to access the power of AI</p>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <FormControl className='fullWidth'>
                                            {errors.email && <span className='error'>This field is required</span>}                                       
                                            <TextField {...register("email", { required: true })} id="userEmail" type="text" size='small' placeholder='Enter your Email Id' fullWidth sx={{ mb: 3, mt: 0 }}></TextField>
                                            {errors.password && <span className='error'>This field is required</span>}
                                            <TextField {...register("password", { required: true })} type="password" size='small' placeholder='Enter Password' fullWidth sx={{ mb: 3 }}></TextField>
                                            <Button variant="outlined" type="submit" className='styleButton' fullWidth sx={{ mt: 2 }} >
                                                <Link href="/userHome">Login</Link>
                                            </Button>
                                        </FormControl>
                                    </form>
                                    <p className='lastPara'>Don't have an account?                                    
                                        <span>
                                            <Link href="/signup"> Sign Up</Link>
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


