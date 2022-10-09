import React, {useState} from 'react';
import "@fontsource/big-shoulders-stencil-display"
import classes from './navbar.module.css';
import {Home, Person, Build, InsertPhoto} from '@mui/icons-material';
import {Link} from 'react-scroll';
import {Menu,Close} from '@mui/icons-material';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => {
        setNav(!nav)
    }
    const handleClickClose = () => {
        setNav(false)
    }
    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.logo}>
                    Yi Zhang
                </div>
                {nav?
                    <Close  className={classes.menu} onClick={handleClick}/>
                    :<Menu className={classes.menu} onClick={handleClick}/>
                }
                <div className={nav?classes.navOn:classes.nav}>
                    <div className={classes.navItem}>
                        <Home className={classes.icon}/>
                        <Link onClick={handleClickClose} to="home" spy={true} smooth={true} offset={-50} duration={500}>Home</Link>
                    </div>
                    <div className={classes.navItem}>
                        <Person className={classes.icon}/>
                        <Link onClick={handleClickClose} to="about" spy={true} smooth={true} offset={-50} duration={500}>About</Link>
                    </div>
                    <div className={classes.navItem}>
                        <Build className={classes.icon}/>
                        <Link onClick={handleClickClose} to="skills" spy={true} smooth={true} offset={-50} duration={500}>Skills</Link>
                    </div>
                    <div className={classes.navItem}>
                        <InsertPhoto className={classes.icon}/>
                        <Link onClick={handleClickClose} to="projects" spy={true} smooth={true} offset={-50} duration={500}>Projects</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;