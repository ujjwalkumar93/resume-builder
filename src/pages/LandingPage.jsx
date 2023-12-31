import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import {
    Box,
    styled,
    Typography,
    Grid,
    Button,
    useTheme
} from "@mui/material";


export default function LandingPage() {
    const theme = useTheme();
    return (
        <Box>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={12} md={12} sx={{
                    backgroundColor: "primary.main",
                    height: window.innerHeight ,
                    fontFamily: "Roboto",
                    fontSize: "4rem",
                    color: "#ffffff",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    [theme.breakpoints.down("sm")]: { // Set font size for small screens
                        fontSize: "1.5rem",
                    },
                }} >
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString("Make your resume in 5 mins!")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Ready templates")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Easy to use")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Enter your details")
                                .pauseFor(1000)
                                .deleteAll()
                                .typeString("Download the pdf")
                                .start();
                                
                        }}
                    />
                    <Button
                        variant="contained"
                        href="/create-resume"
                        sx={{ marginTop: "3rem", fontSize: "1rem", color: "white" }}
                        color="secondary">Create Your CV</Button>
                </Grid>
{/* 
                <Grid item xs={12} sm={6} md={6} >

                </Grid> */}
            </Grid>

        </Box>
    )
}