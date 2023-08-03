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
import EducationDialog from './EducationDialog';
import { useDispatch } from 'react-redux';
import { updateEducationList, deleteEducation } from '../store/ResumeDataSlice';
import CloseIcon from '@mui/icons-material/Close';
import { Margin } from '@mui/icons-material';

export default function EducationRow({ data, islargeScreen }) {
    console.log("islargeScreen: ", islargeScreen)
    const [open, setOpen] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [EducationId, setrEducationId] = useState();
    const dispatch = useDispatch()

    const handleUpdate = (data) => {
        dispatch(updateEducationList(data))
        setOpen(false)
    }

    const handleDelete = (event) => {
        // dispatch(deleteExperiance({
        //     _id: EducationId
        // }))
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
                                    <TableCell  sx={{ color: '#ff9d54', width: "25%", flex: 1 }}>Course</TableCell>
                                    <TableCell  sx={{ color: '#ff9d54', width: "25%", flex: 1 }}>University/Board</TableCell>
                                    <TableCell  sx={{ color: '#ff9d54', width: "35%", flex: 1 }}>Passing year</TableCell>
                                    {/* <TableCell  sx={{ color: '#ff9d54', width: "35%", flex: 1 }}>To</TableCell> */}
                                    <TableCell  sx={{ color: '#ff9d54', width: "15%", flex: 1 }}></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow>
                                    <TableCell >{data.course}</TableCell>
                                    <TableCell >{data.univ}</TableCell>
                                    <TableCell >{`${!data.pursuing ? data.passingYear : "pursuing"}`}</TableCell>
                                    <TableCell align="right">
                                        <Stack direction="row-reverse" spacing={2}>
                                            <Button
                                                variant="outlined"
                                                onClick={() => {
                                                    setOpenAlert(true);
                                                    setrEducationId(data._id);
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
                            <Typography variant="h6">{data.course}</Typography>
                            <Typography variant="body1">{data.univ}</Typography>
                            <TableCell >{`${!data.pursuing ? data.passingYear : "pursuing"}`}</TableCell>
                        </CardContent>
                        <CardActions sx={{ justifyContent: "flex-end" }}>
                            <Button variant="contained" color="primary" onClick={() => setOpen(true)}>Edit</Button>
                            <Button variant="outlined" color="secondary" onClick={() => {
                                setOpenAlert(true)
                                setrEducationId(data._id)
                            }}>Delete</Button>
                        </CardActions>
                    </Card>
                )
            }




            <EducationDialog open={open} data={data} onClose={() => setOpen(false)} onSave={handleUpdate} />
            {
                <Dialog open={openAlert} onClose={() => setOpenAlert(false)}>
                    <DialogTitle>Warning</DialogTitle>
                    <DialogContent>Are you sure to delete education detail </DialogContent>
                    <DialogActions>
                        <Button onClick={() => {
                            setOpenAlert(false)
                            setrEducationId(null)
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
