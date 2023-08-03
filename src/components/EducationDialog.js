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
    Typography,
    FormControlLabel
} from '@mui/material';
import { useEffect, useState } from 'react'
import { formatCalenderDate, formatDateToYyyyMmDd } from '../utilities/DateFormat'

export default function EducationDialog({ open = false, isNew = false, data = {}, pageTitle, onSave, onClose }) {
    const [isChecked, setIsChecked] = useState(data.present);
    // const {course} = data
    const [course, setCourse] = useState(data.course && !isNew ? data.course : '');
    const [univ, setUniv] = useState(data.univ && !isNew ? data.univ : '');
    const [city, setCity] = useState(data.cityAndState && !isNew ? data.cityAndState : '');
    const [country, setCountry] = useState(data.country && !isNew ? data.country : '');
    const [fromDate, setFromDate] = useState(data.fromDate && !isNew ? formatDateToYyyyMmDd(data.fromDate) : '');
    const [toDate, setToDate] = useState(data.toDate && !isNew ? formatDateToYyyyMmDd(data.toDate) : '');

    const [marks, setMarks] = useState('');
    const [currentlyPursuing, setCurrentlyPursuing] = useState(false);
    const [showPassingYearOnly, setShowPassingYearOnly] = useState(false);

    const [isDisable, setIsDisable] = useState(false);

    const handleSave = () => {
        onSave({
            course,
            univ,
            city,
            country,
            fromDate,
            toDate,
            description,
            _id: data._id
        })
        // setCourse('');
        // setUniv('');
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
                    label="Course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    sx={{ mb: 2, mt: 2 }}
                />
                <TextField
                    fullWidth
                    label="College/School"
                    value={univ}
                    onChange={(e) => setUniv(e.target.value)}
                    sx={{ mb: 2 }}
                />
                <TextField
                    fullWidth
                    label="University/Board"
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

                    <Stack direction={'row-reverse'}>
                        <FormControlLabel
                            sx={{
                                color: '#ff9d54',
                                fontWeight: !isLargeScreen ? '8px' : '12px'
                            }}
                            control={
                                <Checkbox
                                    disabled={showPassingYearOnly}
                                    checked={currentlyPursuing}
                                    onChange={(e) => setCurrentlyPursuing(e.target.checked)}
                                    color='secondary'
                                />
                            }
                            label={
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: isLargeScreen ? "16px" : "12px", // Set the font size to the desired value
                                    }}>
                                    Currently Pursuing
                                </Typography>
                            }
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={showPassingYearOnly}
                                    disabled={currentlyPursuing}
                                    onChange={(e) => setShowPassingYearOnly(e.target.checked)}
                                    color='secondary'
                                />
                            }
                            label={
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontSize: isLargeScreen ? "16px" : "12px", // Set the font size to the desired value
                                    }}>
                                    Show only passing year
                                </Typography>
                            }
                        />
                    </Stack>
                    <TextField
                        label="Marks(%)"
                        variant="outlined"
                        autoComplete='off'
                        type='number'
                        color='secondary'
                        value={marks}
                        onChange={(e) => setMarks(e.target.value)}
                        sx={{
                            width: "50%", // Set the width to 50% of the available space
                        }}
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
                <Stack>
                </Stack>
            </DialogContent>
            <DialogActions sx={{ p: '1rem' }}>
                <Button onClick={e => {
                    // setCourse('');
                    // setUniv('');
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