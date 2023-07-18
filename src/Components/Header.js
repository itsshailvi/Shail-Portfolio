import React from 'react'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const options = [
    'Home',
    'about',
    'project',
    'blog',
    'contact'
  ];
  
  const ITEM_HEIGHT = 48;

export const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', paddingRight: '100px', paddingTop: '40px', paddingBottom: '0px', paddingLeft: '100px' }}>
            <div>
                <h1 style={{ color: '#FFB4B4', background: 'FF8AAE' }}> @ShailviStart</h1>
            </div>
            <div>
                <IconButton
                    edge="start"
                    sx={{ mr: 2 }}
                    color="inherit"
                    aria-label="menu"
                    onClick={handleClick}
                >
                    <MenuIcon sx={{ fontSize: 40 }} />
                </IconButton>
                <Menu
                    id="long-menu"
                    MenuListProps={{
                        'aria-labelledby': 'long-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    PaperProps={{
                        style: {
                            maxHeight: ITEM_HEIGHT * 6,
                            width: '18ch',
                            left: '955px'
                        },
                    }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
                            {option}
                        </MenuItem>
                    ))}
                </Menu>


            </div>
        </div>
    )
}
