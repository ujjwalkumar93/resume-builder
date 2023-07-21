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

const style = {
    fontSize: '12px'
}

export default function ExperianceCard({data}){

   //  const [experianceData, setExperianceData] = useState();
    return(
        <Box sx={{
            padding: '1rem',
        }}>
            <TableRow>
                <TableCell>{data.designation}</TableCell>
                <TableCell>{data.company}</TableCell>
                <TableCell>{data.duration}</TableCell>
                <TableCell>
                <Stack direction={'row-reverse'} spacing={3}>
                <Button fullWidth variant='outlined'>Delete</Button>
                <Button fullWidth variant='outlined'>Edit</Button>
            </Stack>
                </TableCell>
            </TableRow>
           

            
        
        </Box>
    )
}
