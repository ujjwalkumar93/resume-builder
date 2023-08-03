import React, { useEffect, useState, useRef } from "react";
import {
    Typography,
    TextField,
    Stack,
    useMediaQuery
} from "@mui/material"

import { useDispatch, useSelector } from "react-redux";
import { addPersonalInfoAction } from "../../store/ResumeDataSlice";

const PersonalDetails = () => {
    const resumeData = useSelector(state => state.resumeData).personalInfo;

    const [designation, setDesignation] = useState(resumeData.designation ? resumeData.designation : '')
    const [fullName, setFullName] = useState(resumeData.fullName ? resumeData.fullName : '');
    const [city, setCity] = useState(resumeData.city ? resumeData.city : '');
    const [state, setState] = useState(resumeData.state ? resumeData.state : '');
    const [mobile, setMobile] = useState(resumeData.mobile ? resumeData.mobile : '');
    const [email, setEmail] = useState(resumeData.email ? resumeData.email : '');
    const [pin, setPin] = useState(resumeData.pin ? resumeData.pin : '');
    const [country, setCountry] = useState(resumeData.country ? resumeData.country : '');
    const [dob, setDob] = useState('');

    const dispatch = useDispatch()

    const data = {
        fullName,
        designation,
        city,
        state,
        mobile,
        email,
        country,
        pin,
        dob
    }
    const handleFullName = (event) => {
        setFullName(event.target.value);
        data.fullName = event.target.value
        dispatch(addPersonalInfoAction(data))
    }

    const handleDesignation = (event) => {
        setDesignation(event.target.value);
        data.designation = event.target.value
        dispatch(addPersonalInfoAction(data))
    }
    const handleCity = (event) => {
        setCity(event.target.value);
        data.city = event.target.value
        dispatch(addPersonalInfoAction(data))
    }
    const handleState = (event) => {
        setState(event.target.value);
        data.state = event.target.value
        dispatch(addPersonalInfoAction(data))
    }
    const handleMobile = (event) => {
        setMobile(event.target.value);
        data.mobile = event.target.value
        dispatch(addPersonalInfoAction(data))
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        data.email = event.target.value
        dispatch(addPersonalInfoAction(data))
    }
    const handlePin = (event) => {
        setPin(event.target.value);
        data.pin = event.target.value
        dispatch(addPersonalInfoAction(data))
    }
    const handleCountry = (event) => {
        setCountry(event.target.value);
        data.country = event.target.value
        dispatch(addPersonalInfoAction(data))
    }

    const handleDob = (event) => {
        setDob(event.target.value);
        data.dob = event.target.value;
        dispatch(addPersonalInfoAction(data))
    }



    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <div sx={{
            overflowX: 'hidden'
        }}>
            <Typography variant="h6" paddingTop={3} paddingLeft={1}><b>Let's start with your <span style={{ color: '#ff6d05' }}>personal detail</span></b></Typography>

            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    value={fullName}
                    autoComplete='off'
                    color="secondary"
                    label="Full Name"
                    onChange={handleFullName}
                />
                <TextField
                    fullWidth
                    required
                    value={designation}
                    autoComplete='off'
                    color="secondary"
                    label="Designation"
                    onChange={handleDesignation}
                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    value={mobile}
                    autoComplete='off'
                    color="secondary"
                    label="Mobile"
                    onChange={handleMobile}
                />
                <TextField
                    fullWidth
                    required
                    value={email}
                    autoComplete='off'
                    color="secondary"
                    label="Email"
                    onChange={handleEmail}

                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    value={city}
                    autoComplete='off'
                    color="secondary"
                    label="City"
                    onChange={handleCity}
                />
                <TextField
                    fullWidth
                    required
                    value={state}
                    autoComplete='off'
                    color="secondary"
                    label="State"
                    onChange={handleState}
                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    value={pin}
                    autoComplete='off'
                    color="secondary"
                    label="PIN Code"
                    onChange={handlePin}
                />
                <TextField
                    fullWidth
                    required
                    value={country}
                    autoComplete='off'
                    color="secondary"
                    label="Country"
                    onChange={handleCountry}
                />
            </Stack>
            <Stack p={1}>
                <TextField
                    label="Date Of Birth"
                    variant="outlined"
                    type="date"
                    autoComplete='off'
                    // fullWidth
                    color='secondary'
                    value={dob}
                    onChange={handleDob}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx ={{
                        width: '50%'
                    }}
                />
            </Stack>
        </div>
    )
}

export default PersonalDetails;