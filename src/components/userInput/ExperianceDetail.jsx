import React, { useEffect, useState, useRef } from "react";
import {
    Typography,
    TextField,
    Stack,
    useMediaQuery,
    Checkbox
} from "@mui/material"

const ExperianceDetail = () => {
    const [isChecked, setIsChecked] = useState(false)
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <>
            <Typography p={1} paddingTop={3} variant="h5"><b>Add your <span style={{ color: '#ff6d05' }}>experiance</span></b></Typography>
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
        </>
    )
}

export default ExperianceDetail;