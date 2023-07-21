import React, { useEffect, useState, useRef } from "react";
import {
    Typography,
    TextField,
    Stack,
    useMediaQuery
} from "@mui/material"

import { useDispatch } from "react-redux";
import { addInfo } from "../../store/ResumeDataSlice";

const PersonalDetails = () => {
    const [designation, setDesignation] = useState(null)
    const [fullName, setFullName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState(null);
    const [pin, setPin] = useState(null);
    const [country, setCountry] = useState(null);

    const dispatch = useDispatch()

    const dataRef = useRef(null);

    useEffect(() => {
        return () => {
            saveDataToRedux();
        }
    }, [])

    const saveDataToRedux = () => {
        delete dataRef.current
        dispatch(addInfo(dataRef))
        console.log(dataRef)
    };


    const data = {
        fullName,
        lastName,
        designation,
        city,
        state,
        mobile,
        email,
        country,
        pin
    }
    const handleFullName = (event) => {
        setFullName(event.target.value);
        data.fullName = event.target.value
        dispatch(addInfo(data))
    }

    const handleLastName = (event) => {
        setLastName(event.target.value);
        data.lastName = event.target.value
        dispatch(addInfo(data))
    }
    const handleDesignation = (event) => {
        setDesignation(event.target.value);
        data.designation = event.target.value
        dispatch(addInfo(data))
    }
    const handleCity = (event) => {
        setCity(event.target.value);
        data.city = event.target.value
        dispatch(addInfo(data))
    }
    const handleState = (event) => {
        setState(event.target.value);
        data.state = event.target.value
        dispatch(addInfo(data))
    }
    const handleMobile = (event) => {
        setMobile(event.target.value);
        data.mobile = event.target.value
        dispatch(addInfo(data))
    }
    const handleEmail = (event) => {
        setEmail(event.target.value);
        data.email = event.target.value
        dispatch(addInfo(data))
    }
    const handlePin = (event) => {
        setPin(event.target.value);
        data.pin = event.target.value
        dispatch(addInfo(data))
    }
    const handleCountry = (event) => {
        setCountry(event.target.value);
        data.country = event.target.value
        dispatch(addInfo(data))
    }



    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <>
            <Typography p={1} variant="h5" paddingTop={3}><b>Let's start with your <span style={{ color: '#ff6d05' }}>header</span></b></Typography>
            {/* <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Designation"
                    onChange={handleDesignation}
                />
            </Stack> */}
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Full Name"
                    onChange={handleFullName}
                />
                <TextField
                    fullWidth
                    required
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
                    autoComplete='off'
                    color="secondary"
                    label="City"
                    onChange={handleCity}
                />
                <TextField
                    fullWidth
                    required
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
                    autoComplete='off'
                    color="secondary"
                    label="Mobile"
                    onChange={handleMobile}
                />
                <TextField
                    fullWidth
                    required
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
                    autoComplete='off'
                    color="secondary"
                    label="PIN Code"
                    onChange={handlePin}
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Country"
                    onChange={handleCountry}
                />
            </Stack>
        </>
    )
}

export default PersonalDetails;