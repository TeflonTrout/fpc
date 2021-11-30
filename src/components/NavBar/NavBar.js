import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from "./NavBar.module.css";
import { createTheme, CssBaseline, Menu } from "@mui/material";
import { MenuItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { ThemeProvider } from '@mui/private-theming';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../../images/FramePerfectControllers.png";

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
        justifyContent: 'center',
        alignItems: 'center'
    }
})

const NavBar = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleHamburgerClick = e => {
        setMobileMenu(prevState => !prevState)
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline>
                <div className={styles['header']}>
                    <Link to="/">
                        <h1 className={styles['link']}>Home</h1>
                    </Link>
                    <Link to="/portfolio">
                        <h1 className={styles['link']}>Portfolio</h1>
                    </Link>
                    <Link to="/about">
                        <h1 className={styles['link']}>About</h1>
                    </Link>
                    <div>
                        <h1 className={styles['link']} onClick={handleClick}>Guide</h1>
                    </div>
                    <a className={styles['link']} href="https://frameperfectcontrollers.bigcartel.com/" target="_blank" rel='noreferrer'>
                        <h1 className={styles['link']}>Shop</h1>
                    </a>
                    <Menu
                        anchorEl={anchorEl}
                        open={open}
                        disableScrollLock={true}
                        onClose={handleClose}
                        classes={classes.root}
                        PaperProps={{
                            style: {
                                fontFamily: 'BlankRiver',
                                backgroundColor: 'rgba(86,192,161,255)',
                                boxShadow: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transform: 'translate(-30%)',
                            }
                        }}>
                        <MenuItem style={{backgroundColor: 'transparent'}} sx={{fontFamily: "BlankRiver", fontSize: '80px'}} onClick={handleClose}>
                            <Link className={styles['link']} to='/guide/resin'>Resin Guide</Link>
                        </MenuItem>
                        <MenuItem style={{backgroundColor: 'transparent'}} sx={{fontFamily: "BlankRiver", fontSize: '80px'}} onClick={handleClose}>
                            <Link className={styles['link']} to='/guide/liquid'>Liquid Cable</Link>
                        </MenuItem>
                    </Menu>
                </div>
                <div className={styles['hamburger-menu']}>
                    <img className={styles['logo']} src={logo} alt="" width={80} />
                    <div className={styles['hamburger-container']} onClick={e => handleHamburgerClick(e)} >
                        <MenuIcon className={styles['hamburger']} />
                    </div>
                    {mobileMenu ? <div className={styles['hamburger-header']}>
                        <div className={styles['close-btn']} style={mobileMenu ? {display: 'block'} : {display: 'none'}} onClick={e => handleHamburgerClick(e)}>
                            X
                        </div>
                        <Link to="/" onClick={e => handleHamburgerClick(e)}>
                            <h1 className={styles['link']}>Home</h1>
                        </Link>
                        <Link to="/portfolio" onClick={e => handleHamburgerClick(e)}>
                            <h1 className={styles['link']}>Portfolio</h1>
                        </Link>
                        <Link to="/about" onClick={e => handleHamburgerClick(e)}>
                            <h1 className={styles['link']}>About</h1>
                        </Link>
                        <Link to="/guide" onClick={e => handleHamburgerClick(e)}>
                            <h1 className={styles['link']}>Guide</h1>
                        </Link>
                    </div> : "" }
                </div>
            </CssBaseline>
        </ThemeProvider>
    )
}

export default NavBar
