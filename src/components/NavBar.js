import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import { createTheme, CssBaseline, Menu } from "@mui/material";
import { MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/private-theming';

const theme = createTheme({
    typography: {
        fontFamily: 'BlankRiver'
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `@font-face {font-family: "BlankRiver"}`
        }
    }
})

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
    }
})

const NavBar = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div className={styles['header']}>
                    <Link to="/">
                        <h1 className={styles['link']}>Home</h1>
                    </Link>
                    <Link to="/about">
                        <h1 className={styles['link']}>About</h1>
                    </Link>
                    <div>
                        <h1 className={styles['link']} onClick={handleClick}>Guide</h1>
                    </div>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        classes={classes.root}
                        PaperProps={{
                            style: {
                                fontFamily: 'BlankRiver',
                                backgroundColor: 'rgba(86,192,161,255)',
                                boxShadow: 'none',
                                display: 'flex',
                            }
                        }}>
                        <MenuItem style={{backgroundColor: 'transparent'}} sx={{fontFamily: "BlankRiver", fontSize: '80px'}} onClick={handleClose}>
                            <Link className={styles['link']} to='/resin'>Resin Guide</Link>
                        </MenuItem>
                        <MenuItem style={{backgroundColor: 'transparent'}} sx={{fontFamily: "BlankRiver", fontSize: '80px'}} onClick={handleClose}>
                            {/* <Link className={styles['link']}>Profile</Link> */}
                        </MenuItem>
                    </Menu>
                </div>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default NavBar
