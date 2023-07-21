import React, { useEffect, useState, useRef } from "react";
import {
    Typography,
    TextField,
    Stack,
    useMediaQuery,
    Checkbox,
    Card,
    Paper,
    IconButton,
    Button
} from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ExperianceCard from "../ExperianceCard";

const ExperianceDetail = () => {
    const x = [
        {
            designation: "Software developer",
            company: 'INE',
            duration: 'Sep 2022 - Present (10 months)'
        },
        {
            designation: "Software developer",
            company: 'INE',
            duration: 'Sep 2022 - Present (10 months)'
        },
        {
            designation: "Software developer",
            company: 'INE',
            duration: 'Sep 2022 - Present (10 months)'
        },
        {
            designation: "Software developer",
            company: 'INE',
            duration: 'Sep 2022 - Present (10 months)'
        }
    ]
    return (
        <>
            <Typography p={1} paddingTop={3} variant="h5"><b>Add your <span style={{ color: '#ff6d05' }}>experiance</span></b></Typography>
            {/* <Stack direction={'row'} spacing={3} margin={1} flexWrap={'wrap'}> */}
                {
                    x.map(e => {
                        return (
                            <ExperianceCard data={e} />
                        )
                    })}
            {/* </Stack> */}
            <Experiance />
        </>

    )
}

const Experiance = () => {
    const [isChecked, setIsChecked] = useState(false)
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const [jobTitle, setJobTitle] = useState();
    const [employer, setEmployer] = useState();
    const [city, setCity] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();

    return (
        <Paper elevation={3} sx={{
            paddingLeft: '3rem',
            paddingRight: '3rem',
            paddingTop: '2rem',
            paddingBottom: '2rem',
            marginRight: '3rem'
        }}>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
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
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="City & State"
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Country"
                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
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
                    required={!isChecked}
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    disabled={isChecked}
                    autoComplete='off'
                    color="secondary"
                    label="To Date"
                />
            </Stack>
            <Stack direction={'row-reverse'} p={1}>
                <Typography p={1}>Till Present</Typography>
                <Checkbox
                    checked={isChecked}
                    onChange={e => {
                        setIsChecked(!isChecked)
                    }}
                />
            </Stack>
            <Stack direction={'row-reverse'} alignItems={'flex-end'} spacing={3} >
                <Button variant="outlined" endIcon={<SaveIcon />} color="secondary">
                    Save
                </Button>
                <Button variant="outlined" endIcon={<DeleteIcon />}>
                    Discard
                </Button>
            </Stack>
        </Paper>
    )
}

export default ExperianceDetail;