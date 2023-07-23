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
    Button,
    Dialog,
    Box,
    Divider
} from "@mui/material"

import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import ExperianceRow from "../ExperienceRow";
import { useDispatch, useSelector } from "react-redux";
import {addCurrentExperiance, addExperienceToList} from "../../store/ResumeDataSlice";
import ExperianceDialog from "../ExperienceDialog";
import { formatCalenderDate, formatDate } from "../../utilities/DateFormat";
import {generateRandomId} from '../../utilities/IdGenerator'

const ExperianceDetail = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const experianceList = useSelector(state => state.resumeData).experianceList;
    console.log("experianceListz: ", experianceList)
    const handleAdd = () => {
        setOpenDialog(true)
    }
    const handleClose = () => {
        setOpenDialog(false)
    }
    const handleDialogSave = (data) => {
        // console.log("+++++<<", data)
        setOpenDialog(false)
    }
    return (
        <Box>
            <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} spacing={3} p={1} paddingTop={3}>
                <Typography  variant="h5"><b>Add your <span style={{ color: '#ff6d05' }}>experience</span></b></Typography>
                {
                    experianceList.length > 0 ? (<Button variant="outlined" color="secondary" onClick={handleAdd}
                    >Add More</Button>) : null
                }
                
            </Stack>

           <Divider/>
            {
                experianceList.length === 0 ? <Experience /> : (
                   // {
                        experianceList.map(row => {
                            return (
                                <ExperianceRow data={row} />
                            )
                        })
                   // }
                )
            }
            <ExperianceDialog
                open={openDialog}
                pageTitle={"Add Experience"}
                onClose={handleClose}
                onSave={handleDialogSave}
            />
        </Box>

    )
}

const Experience = () => {
    const [isChecked, setIsChecked] = useState(false)
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const [jobTitle, setJobTitle] = useState();
    const [employer, setEmployer] = useState();
    const [cityAndState, setCityAndState] = useState();
    const [fromDate, setFromDate] = useState();
    const [toDate, setToDate] = useState();
    const [description, setDescription] = useState();
    const [country, setCountry] = useState();

    const data = {
        jobTitle,
        employer,
        cityAndState,
        fromDate,
        toDate,
        present: isChecked,
        description,
        country
    }
    const dispatch = useDispatch()
    const handleOnChange = (event) => {
        const { name, value } = event.target;
        data[name] = value
        dispatch(addCurrentExperiance(data))
    }

    const handleSave = () => {
        data._id = generateRandomId()
        console.log('id: ', data)
        dispatch(addExperienceToList(data))
    }

    return (
        <Paper elevation={3} sx={{
            paddingLeft: '3rem',
            // paddingRight: '3rem',
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
                    name = {"jobTitle"}
                    label="JOB TITLE"
                    onChange={e => {
                        setJobTitle(e.target.value)
                        handleOnChange(e)
                    }}
                />
                <TextField
                    fullWidth
                    required
                    autoComplete='off'
                    color="secondary"
                    name = {"employer"}
                    label="EMPLOYER"
                    onChange={ e => {
                        handleOnChange(e)
                        setEmployer(e.target.value)
                    }}
                />
            </Stack>
            <Stack direction={largeScreen ? "row" : "column"} spacing={3} p={1}>
                <TextField
                    fullWidth
                    required
                    value={cityAndState}
                    autoComplete='off'
                    color="secondary"
                    name = {"cityAndState"}
                    label="City or State"
                    onChange={ e => {
                        handleOnChange(e)
                        setCityAndState(e.target.value)
                    }}
                />
                <TextField
                    fullWidth
                    required
                    value={country}
                    autoComplete='off'
                    color="secondary"
                    name = {"country"}
                    label="Country"
                    onChange={ e => {
                        handleOnChange(e)
                        setCountry(e.target.value)
                    }}
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
                    name = {"fromDate"}
                    label="From Date"
                    onChange={e => {
                        setFromDate(formatCalenderDate(e.target.value))
                        handleOnChange(e)
                    }}
                    // InputProps={{
                    //     inputProps: {
                    //       max: formatDate(new Date()), // To set the maximum date as today's date
                    //     },
                    //   }}
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
                    name = 'toDate'
                    onChange={e => {
                        setToDate(formatCalenderDate(e.target.value))
                        handleOnChange(e)
                    }}
                    // InputProps={{
                    //     inputProps: {
                    //       max: formatDate(new Date()), // To set the maximum date as today's date
                    //     },
                    //   }}
                />
            </Stack>            

            <Stack direction={'row-reverse'} p={1}>
                <Typography p={1}>Till Present</Typography>
                <Checkbox
                    name = {'present'}
                    checked={isChecked}
                    onChange={
                        e => {
                        setIsChecked(!isChecked)
                        handleOnChange(e)
                    }
                }
                />
            </Stack>
            <Stack spacing={3} p={1}>
            <TextField
                // paddingLeft={1}
                fullWidth
                multiline
                minRows={4}
                autoComplete='off'
                color="secondary"
                name = "description"
                label="Description"
                onChange={e => {
                    setDescription(e.target.value)
                    handleOnChange(e)
                }}
            />
            </Stack>
            <Stack direction={'row-reverse'} alignItems={'flex-end'} spacing={3} marginRight={1}>
                <Button variant="outlined" endIcon={<SaveIcon />} color="secondary" onClick={handleSave}>
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