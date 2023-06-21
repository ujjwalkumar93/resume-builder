import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    Avatar
} from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';

export default function Navbar() {
    return(
        <AppBar position="sticky">
            <Toolbar sx={{
                display: "flex",
                justifyContent: "space-between"
            }}>
                <AcUnitIcon/>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Resume Builder
                </Typography>
                <Avatar sx={{ width: 24, height: 24 }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf276jXMCTWMHEDTtDKCjuNgRxx9w77GiepBlVaTSOrQ&usqp=CAU&ec=48600113" >M</Avatar>
            </Toolbar>

        </AppBar>
    )
}