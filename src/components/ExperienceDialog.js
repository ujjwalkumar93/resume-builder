import {
    Box,
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Stack,
    Checkbox,
    Typography
} from '@mui/material';
import { useEffect, useState } from 'react'
import {formatCalenderDate, formatDateToYyyyMmDd} from '../utilities/DateFormat'

export default function ExperianceDialog({ open=false, isNew = false, data = {}, pageTitle, onSave, onClose }) {
    const [isChecked, setIsChecked] = useState(data.present);
    // const {jobTitle} = data
    const [jobTitle, setJobTitle] = useState(data.jobTitle && !isNew ? data.jobTitle : '');
    const [employer, setEmployer] = useState(data.employer && !isNew ? data.employer : '');
    const [city, setCity] = useState(data.cityAndState && !isNew ? data.cityAndState : '');
    const [country, setCountry] = useState(data.country && !isNew ? data.country : '');
    const [fromDate, setFromDate] = useState(data.fromDate && !isNew ? formatDateToYyyyMmDd(data.fromDate) : '');
    const [toDate, setToDate] = useState(data.toDate && !isNew ? formatDateToYyyyMmDd(data.toDate ): '');
    const [description, setDescription] = useState(data.description && !isNew? data.description : '')

    const [isDisable, setIsDisable] = useState(false);

    const handleSave = () => {
        onSave({
            jobTitle,
            employer,
            city,
            country,
            fromDate,
            toDate,
            description,
            _id: data._id
        })
        // setJobTitle('');
        // setEmployer('');
        // setCity('');
        // setCountry('');
        // setFromDate('');
        // setToDate('');
        // setDescription('');
    }
    useEffect(() => {
        setIsDisable(isChecked)
    }, [isChecked])

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{pageTitle}</DialogTitle>
            <DialogContent >
                <TextField
                    fullWidth
                    label="Job Title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    sx={{ mb: 2, mt: 2 }}
                />
                <TextField
                    fullWidth
                    label="Employer"
                    value={employer}
                    onChange={(e) => setEmployer(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="City or State"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <Stack direction={'row'} spacing={3}>

                    <TextField
                        fullWidth
                        label="From Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        fullWidth
                        disabled={isDisable}
                        label="To Date"
                        type="date"
                        InputLabelProps={{ shrink: true }}
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                </Stack>


                <Stack direction={'row-reverse'} alignContent={'center'} alignItems={'start'}>
                    <Checkbox
                        name={'present'}
                        checked={isChecked}
                        onChange={
                            () => {
                                setIsChecked(!isChecked)
                            }
                        }
                    />
                    <Typography sx={{
                        marginTop: '8px'
                    }}>Till Present</Typography>
                </Stack>
                <Stack>
                <TextField
                    fullWidth
                    // required
                    multiline
                    minRows={4}
                    autoComplete='off'
                    color="secondary"
                    value={description}
                    // name = {"jobTitle"}
                    label="Description"
                    onChange={e => {
                        setDescription(e.target.value)
                    }}
                    
                />
                </Stack>
            </DialogContent>
            <DialogActions sx={{ p: '1rem' }}>
                <Button onClick={e => {
                            // setJobTitle('');
                            // setEmployer('');
                            // setCity('');
                            // setCountry('');
                            // setFromDate('');
                            // setToDate('');
                            // setDescription('');
                            onClose()
                }} color="primary" variant='contained' >
                    Cancel
                </Button>
                <Button onClick={handleSave} color="secondary" variant='contained' sx={{
                    color: '#fff',
                    mr: '1rem'
                }}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}