import {
    Box,
    Card,
    CardContent,
    CardActions,
    Typography,
    Stack,
    Button,
    Divider,
    TableRow,
    TableCell,
    TableHead,
    Dialog, DialogTitle, DialogContent, DialogActions, TableContainer, Table, TableBody
} from '@mui/material';
import { useEffect, useState } from 'react';
import ExperienceDialog from './ExperienceDialog';
import { useDispatch } from 'react-redux';
import { updateExperienceList, deleteExperiance } from '../store/ResumeDataSlice';
import CloseIcon from '@mui/icons-material/Close';
import { Margin } from '@mui/icons-material';

export default function ExperienceRow({ data, islargeScreen }) {
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [expereenceId, setExperienceId] = useState();
    const dispatch = useDispatch()

    const handleUpdate = (data) => {
        dispatch(updateExperienceList(data))
        setOpen(false)
    }

    const handleDelete = (event) => {
        dispatch(deleteExperiance({
            _id: expereenceId
        }))
        setOpenAlert(false);

    }
    return (
        <Box sx={{
            padding: '1rem',
        }}>

            {
                islargeScreen ? (
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell  sx={{ color: '#ff9d54', width: "25%", flex: 1 }}>Job Title</TableCell>
                                    <TableCell  sx={{ color: '#ff9d54', width: "25%", flex: 1 }}>Employer</TableCell>
                                    <TableCell  sx={{ color: '#ff9d54', width: "35%", flex: 1 }}>Dates</TableCell>
                                    <TableCell  sx={{ color: '#ff9d54', width: "15%", flex: 1 }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell >{data.jobTitle}</TableCell>
                                    <TableCell >{data.employer}</TableCell>
                                    <TableCell >{`${data.fromDate} - ${!data.present ? data.toDate : "Present"
                                        }`}</TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row-reverse" spacing={2}>
                                            <Button
                                                variant="outlined"
                                                onClick={() => {
                                                    setOpenAlert(true);
                                                    setExperienceId(data._id);
                                                }}
                                            >
                                                Delete
                                            </Button>
                                            <Button variant="outlined" onClick={() => setOpen(true)}>
                                                Edit
                                            </Button>
                                        </Stack>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                ) : (
                    <Card>
                        <CardContent>
                            <Typography variant="h6">{data.jobTitle}</Typography>
                            <Typography variant="body1">{data.employer}</Typography>
                            <Typography variant="body2">{`${data.fromDate}  -  ${!data.present ? data.toDate : 'Present'}`}</Typography>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "flex-end" }}>
                            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Edit</Button>
                            <Button variant="outlined" color="secondary" onClick={() => {
                                setOpenAlert(true)
                                setExperienceId(data._id)
                            }}>Delete</Button>
                        </CardActions>
                    </Card>
                )
            }




            <ExperienceDialog open={open} data={data} onClose={() => setOpen(false)} onSave={handleUpdate} />
            {

                <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
                    <DialogTitle>Warning</DialogTitle>
                    <DialogContent>Are you sure to delete experience </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpenAlert(false)
                            setExperienceId(null)
                        }} color="primary">
                            No
                        </Button>
                        <Button color="secondary" onClick={handleDelete}>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>

            }

        </Box>
    )
}
