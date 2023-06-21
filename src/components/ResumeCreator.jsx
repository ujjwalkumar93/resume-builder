import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Paper,
    TextField,
    Stack,
    Stepper,
    Step,
    StepLabel,
    Checkbox,
    Button,
    Divider,
    useMediaQuery,
    Switch
} from "@mui/material"

export default function ResumeCreator() {
    const [currentPage, setCurrentPage] = useState(1);
    // const [currentComponent, setCurrentComponent] = useState('PersonalDetails')
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
                <Grid item sx={12} sm={6} md={6}>
                    <Typography>Left1</Typography>
                </Grid>
                <Grid item sx={12} sm={6} md={6} >
                    <Paper 
                    // height={window.innerHeight}
                    sx = {{
                        paddingTop : "3rem",
                        minHeight : '100vh'
                    }}
                    >
                        <Stepper activeStep={currentPage-1} alternativeLabel  sx = {{
                            paddingBottom : "3rem"
                        }}>
                            {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            ))}
                        </Stepper>

                        <Divider/>
                        <GetCurrentComponent 
                        pageIndex = {currentPage}
                        /> 
                      

                        <Divider sx = {{
                            marginTop : "2rem"
                        }}/>

                        <Stack spacing={3} direction={'row-reverse'} sx = {{
                            padding : "2rem",
                            marginTop : "2rem"
                        }}>
                            <Button
                                variant="contained"
                                fullWidth
                                color="secondary"
                                sx={{
                                color : "#ffffff"
                                }}
                                onClick={e => {
                                    const pageNumber = currentPage == 5 ? 5 : currentPage+1
                                    setCurrentPage(pageNumber)
                                    // setCurrentComponent(mapComponents[pageNumber])
                                }}
                            >Continue</Button>
                            <Button 
                                fullWidth
                                variant="contained"
                                color="white"
                                onClick={e => {
                                    const pageNumber = currentPage === 1 ? 1 : currentPage-1
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

const PersonalDetails = () => {
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <>
            <Typography p = {1} variant="h5" paddingTop={3}><b>Let's start with your <span style={{ color: '#ff6d05' }}>header</span></b></Typography>
                <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="First Name"
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="Last Name"
                    />
                </Stack>
                <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="City"
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="State"
                    />
                </Stack>
                <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="Mobile"
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="Email"
                    />
                </Stack>
                <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="PIN Code"
                    />
                    <TextField
                        fullWidth
                        required
                        autoComplete='off'
                        color="secondary"
                        label="Country"
                    />
                </Stack>
        </>
    )
}

const ExperianceDetail = () => {
    const [isChecked, setIsChecked] = useState(false)
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return(
        <>
        <Typography p = {1} paddingTop={3} variant="h5"><b>Add your <span style={{ color: '#ff6d05' }}>experiance</span></b></Typography>
            <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="JOB TITLE"
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="EMPLOYER"
                />
            </Stack>
            <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="City"
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Country"
                />
            </Stack>
            <Stack direction={largeScreen?"row":"column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    autoComplete='off'
                    color="secondary"
                    label="From Date"
                />
                <TextField
                    fullWidth
                    required = {!isChecked}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    disabled={isChecked}
                    autoComplete='off'
                    color="secondary"
                    label="To Date"
                />
            </Stack>
            <Stack direction={'row-reverse'}  p={1}>
                <Typography p={1}>Till Present</Typography>
                <Checkbox
                    checked = {isChecked}
                    onChange={ e => {
                        setIsChecked(!isChecked)
                    }}
                />
            </Stack>
    </>
    )
}

const GetCurrentComponent = (props) => {
    switch(props.pageIndex){
        case 1:
            return <PersonalDetails/>
        case 2:
            return <ExperianceDetail/>
    }
}