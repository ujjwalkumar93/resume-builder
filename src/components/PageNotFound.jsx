import {
    Box,
    Button,
    Stack,
    Typography
} from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import { theme } from '../theme';

export default function PageNotFound(){
    return(
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                height : '100vh',
                bgcolor: '#19727e'
            }}
    >
      {/* <span style={{ margin: 'auto' }} v>Centered Text</span> */}
     
      <Stack
        sx={{
            margin : "auto"
        }}
      >
      <Typography 
        variant='h2'
        color={'#ffffff'}
        >Ops, Page Not Found! (404)
        </Typography>

        <Button
            variant='contained'
            color='secondary'
            sx = {{
                margin : "auto",
                marginTop :"2rem"
            }}
            href='/'
            >
            Go Back To Home page
        </Button>

      </Stack>
    </Box>
    )
}