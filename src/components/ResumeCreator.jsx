import React, { useEffect, useState, useRef } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    Stack,
    Stepper,
    Step,
    StepLabel,
    Button,
    Divider,
    useMediaQuery
} from "@mui/material"

import PersonalDetails from "./userInput/PersonalDetails";
import ExperianceDetail from "./userInput/ExperianceDetail"
export default function ResumeCreator() {
    const [currentPage, setCurrentPage] = useState(1);
    const steps = [
        'Personal Details',
        'Experiance',
        'Education',
        'Skill',
        'Summery'
    ];
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={6}>
                    <Typography>Left1</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Paper
                        // height={window.innerHeight}
                        sx={{
                            paddingTop: "3rem",
                            minHeight: '100vh'
                        }}
                    >
                        <Stepper activeStep={currentPage - 1} alternativeLabel xs={{
                            paddingBottom: "3rem"
                        }}>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Divider />
                        <GetCurrentComponent
                            pageIndex={currentPage}
                        />


                        <Divider sx={{
                            marginTop: "2rem"
                        }} />

                        <Stack spacing={3} direction={'row-reverse'} sx={{
                            padding: "2rem",
                            marginTop: "2rem"
                        }}>
                            <Button
                                variant="contained"
                                fullWidth
                                color="secondary"
                                sx={{
                                    color: "#ffffff"
                                }}
                                onClick={e => {
                                    const pageNumber = currentPage == 5 ? 5 : currentPage + 1
                                    setCurrentPage(pageNumber)
                                    // setCurrentComponent(mapComponents[pageNumber])
                                }}
                            >Continue</Button>
                            <Button
                                fullWidth
                                variant="contained"
                                color="white"
                                onClick={e => {
                                    const pageNumber = currentPage === 1 ? 1 : currentPage - 1
                                    setCurrentPage(pageNumber)
                                }}
                            >Back</Button>
                        </Stack>

                    </Paper>
                </Grid>
            </Grid>

        </Box>
    )
}
const GetCurrentComponent = ({ pageIndex }) => {
    switch (pageIndex) {
        case 1:
            return <PersonalDetails/>
        case 2:
            return <ExperianceDetail/>
    }
}