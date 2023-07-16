import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-between', paddingRight: '100px', paddingTop: '40px' , paddingBottom: '0px', paddingLeft: '100px'}}>
            <div>
                <h1 style={{color: 'rgb(229, 224, 255)', background: 'FF8AAE'}}> @ShailviStart</h1>
            </div>
            <div>
            <IconButton
                edge="start"
                sx={{ mr: 2 }}
                color="inherit"
                aria-label="menu"
            >
                <MenuIcon sx={{ fontSize: 40 }} />
            </IconButton>

            </div>
        </div>
    )
}
