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
    useMediaQuery,
    Card,
    MenuItem, Select, InputLabel, FormControl, useTheme, ButtonGroup
} from "@mui/material"

import PersonalDetails from "../components/userInput/PersonalDetails";
import ExperianceDetail from "../components/userInput/ExperianceDetail";
import TemplateOne from "../components/resumeTemplate/TemplateOne";
import ComponentSelector from "../utilities/ComponentSelector"
export default function ResumeCreator() {
    const theme = useTheme();
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedTemplate, setSelectedTemplate] = useState("option1")
    const isMobileScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const steps = [
        'Personal Details',
        'Experience',
        'Education',
        'Skill',
        'Summery'
    ];
    return (
        <Box>
            <Grid container>
                <Grid item xs={12} sm={6} md={6}>
                    <Paper
                        sx={{
                            paddingTop: "3rem",
                            minHeight: '100vh',
                            padding: '1rem',
                            // [theme.breakpoints.down("sm")]: {
                            //     fontSize: "1.5rem",
                            //   },
                        }}
                    >
                        <Stepper activeStep={currentPage - 1} alternativeLabel >
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>

                        <Divider sx={{
                            marginTop: '1rem'
                        }}/>
                        <ComponentSelector
                            pageIndex={currentPage}
                        />


                        <Divider sx={{
                            marginTop: "2rem"
                        }} />

                        <Stack spacing={3} direction={'row-reverse'} sx={{
                            padding: "1rem",
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
                <Grid item xs={12} sm={6} md={6} sx={{ display: isMobileScreen ? "none" : "block" }}>
                    <Card>
                        <Stack direction={'row-reverse'} spacing={3} alignItems="center" padding={1} marginTop={1} marginBottom={1} marginLeft={3} sx={{
                            // bgcolor: '#151a21',
                            bgcolor: '#333'
                        }}>
                            <Button variant="contained" color="secondary" sx={{
                                color: "#ffffff"
                            }}>Download</Button>

                            <FormControl color="secondary" sx={{ m: 1, minWidth: 120 }} size="small" >
                                <Select
                                    labelId="label"
                                    id="demo-simple-select"
                                    value={selectedTemplate}
                                    // label="Select Template"
                                    onChange={e => {
                                        setSelectedTemplate(e.target.value)
                                    }}
                                    sx={{
                                        bgcolor: '#fff'
                                    }}
                                // Add any other props as needed
                                >
                                    <MenuItem value="option1">Option1</MenuItem>
                                    <MenuItem value="option2">Option2</MenuItem>
                                    <MenuItem value="option3">Option3</MenuItem>
                                </Select>
                            </FormControl>
                            <Typography color={'#fff'}>Select Template</Typography>

                        </Stack>
                        <TemplateOne />
                    </Card>

                </Grid>

            </Grid>

        </Box>
    )
}