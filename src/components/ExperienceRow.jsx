import {Box,
    Card,
    Typography, 
    Stack,
    Button,
    Divider,
    TableRow,
    TableCell
} from '@mui/material';
import { useState } from 'react';
import ExperianceDialog from './ExperienceDialog';
import { useDispatch } from 'react-redux';
import {updateExperienceList} from '../store/ResumeDataSlice'

export default function ExperianceRow({data}){
    const [open, setOpen] = useState(false);

    const dispatch = useDispatch()
    const handleUpdate = (data) => {
        dispatch(updateExperienceList(data))
        setOpen(false)
    }
    return(
        <Box sx={{
            padding: '1rem',
        }}>
            <TableRow>
                <TableCell>{data.jobTitle}</TableCell>
                <TableCell>{data.employer}</TableCell>
                <TableCell>{`${data.fromDate}  -  ${!data.present ? data.toDate : 'Present'}`}</TableCell>
                <TableCell>
                <Stack direction={'row-reverse'} spacing={3}>
                <Button fullWidth variant='outlined'>Delete</Button>
                <Button fullWidth variant='outlined' onClick={() => setOpen(true)}>Edit</Button>
            </Stack>
                </TableCell>
            </TableRow>
           
            <ExperianceDialog open={open} data={data} onClose={() => setOpen(false)} onSave={handleUpdate}/>
            
        
        </Box>
    )
}
