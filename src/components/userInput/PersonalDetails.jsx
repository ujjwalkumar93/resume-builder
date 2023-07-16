import React, { useEffect, useState, useRef } from "react";
import {
    Typography,
    TextField,
    Stack,
    useMediaQuery
} from "@mui/material"

const PersonalDetails = () => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);
    const [city, setCity] = useState(null);
    const [state, setState] = useState(null);
    const [mobile, setMobile] = useState(null);
    const [email, setEmail] = useState(null);
    const [pin, setPin] = useState(null);
    const [country, setCountry] = useState(null);

    const dataRef = useRef(null);

    useEffect(() => {
        return () => {
            saveDataToRedux();
        }
    }, [])

    const saveDataToRedux = () => {
        // dispatch and addInfo action
        console.log(dataRef)
    };

    useEffect(() => {
        dataRef.firstName = firstName;
    }, [firstName])
    useEffect(() => {
        dataRef.lastName = lastName;

    }, [lastName])
    useEffect(() => {
        dataRef.city = city;
    }, [city])
    useEffect(() => {
        dataRef.state = state;

    }, [state])
    useEffect(() => {
        dataRef.mobile = mobile;

    }, [mobile])
    useEffect(() => {
        dataRef.email = email;

    }, [email])
    useEffect(() => {
        dataRef.pin = pin;

    }, [pin])
    useEffect(() => {
        dataRef.country = country;

    }, [country])



    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    return (
        <>
            <Typography p={1} variant="h5" paddingTop={3}><b>Let's start with your <span style={{ color: '#ff6d05' }}>header</span></b></Typography>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="First Name"
                    onChange={e => setFirstName(e.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Last Name"
                    onChange={e => setLastName(e.target.value)}
                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="City"
                    onChange={e => setCity(e.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="State"
                    onChange={e => setState(e.target.value)}
                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Mobile"
                    onChange={e => setMobile(e.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Email"
                    onChange={e => setEmail(e.target.value)}

                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="PIN Code"
                    onChange={e => setPin(e.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    label="Country"
                    onChange={e => setCountry(e.target.value)}
                />
            </Stack>
        </>
    )
}

export default PersonalDetails;